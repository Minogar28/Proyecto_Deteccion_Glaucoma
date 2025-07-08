from app.models.analisis_model import AnalisisOjo
from app.utils.db import get_db


def crear(analisis: AnalisisOjo) -> int:
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO analisis_ojo (
            anls_id_paciente,
            anls_ojo,
            anls_vf_md,
            anls_id_glaucoma,
            anls_id_severidad,
            anls_fecha_analisis,
            anls_feedback_id
        ) VALUES (%s, %s, %s, %s, %s, %s, %s)
        """,
        (
            analisis.anls_id_paciente,
            analisis.anls_ojo,
            analisis.anls_vf_md,
            analisis.anls_id_glaucoma,
            analisis.anls_id_severidad,
            analisis.anls_fecha_analisis,
            analisis.anls_feedback_id,
        ),
    )
    conn.commit()
    return cursor.lastrowid


def obtener_por_paciente(paci_id: int):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM analisis_ojo WHERE anls_id_paciente = %s", (paci_id,))
    rows = cursor.fetchall()
    return [AnalisisOjo(**row) for row in rows]
