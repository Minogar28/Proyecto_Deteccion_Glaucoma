from app.models.paciente_model import Paciente
from app.extensions import mysql


def obtener_todos():
    db = mysql.get_db()
    cursor = db.cursor()
    cursor.execute(
        """
        SELECT paci_id, paci_numero_identificacion, paci_nombre, paci_apellido,
              paci_edad, paci_sexo, paci_diabetes, paci_id_empresa
        FROM paciente
    """
    )
    rows = cursor.fetchall()

    pacientes = []
    for row in rows:
        paciente = Paciente(
            id=row[0],
            numero_identificacion=row[1],
            nombre=row[2],
            apellido=row[3],
            edad=row[4],
            sexo=row[5],
            diabetes=row[6],
            id_empresa=row[7],
        )
        pacientes.append(paciente)

    return pacientes
