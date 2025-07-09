from app.models.empresa_model import Empresa
from app.utils.db import get_db


def obtener_por_id(empr_id: int):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM empresa WHERE empr_id = %s", (empr_id,))
    row = cursor.fetchone()
    return Empresa(**row) if row else None


def obtener_todas():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM empresa")
    rows = cursor.fetchall()
    return [Empresa(**row) for row in rows]
