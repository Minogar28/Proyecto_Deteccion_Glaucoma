from app.models.paciente_model import Paciente
from app.utils.db import get_db
import pymysql.cursors


def paci_obtener_todos():
    conn = get_db()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM paciente")
    rows = cursor.fetchall()
    return [Paciente(**row) for row in rows]


def paci_obtener_por_id(paci_id: int):
    conn = get_db()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM paciente WHERE paci_id = %s", (paci_id,))
    row = cursor.fetchone()
    return Paciente(**row) if row else None


def paci_crear(paciente: Paciente) -> int:
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO paciente (
            paci_numero_identificacion,
            paci_nombre,
            paci_apellido,
            paci_edad,
            paci_sexo,
            paci_diabetes,
            paci_id_empresa
        ) VALUES (%s, %s, %s, %s, %s, %s, %s)
        """,
        (
            paciente.paci_numero_identificacion,
            paciente.paci_nombre,
            paciente.paci_apellido,
            paciente.paci_edad,
            paciente.paci_sexo,
            paciente.paci_diabetes,
            paciente.paci_id_empresa,
        ),
    )
    conn.commit()
    return cursor.lastrowid


def paci_actualizar(paci_id: int, datos: dict):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        """
        UPDATE paciente SET
            paci_nombre = %s,
            paci_apellido = %s,
            paci_edad = %s,
            paci_sexo = %s,
            paci_diabetes = %s,
            paci_id_empresa = %s
        WHERE paci_id = %s
        """,
        (
            datos.get("paci_nombre"),
            datos.get("paci_apellido"),
            datos.get("paci_edad"),
            datos.get("paci_sexo"),
            datos.get("paci_diabetes"),
            datos.get("paci_id_empresa"),
            paci_id,
        ),
    )
    conn.commit()


def paci_eliminar(paci_id: int):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM paciente WHERE paci_id = %s", (paci_id,))
    conn.commit()
