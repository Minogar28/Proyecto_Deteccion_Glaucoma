from app.utils.db import get_db


def guardar(imagen):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO imagen (ruta_original, ruta_preprocesada, ojo_id) VALUES (%s, %s, %s)",
        (imagen.ruta_original, imagen.ruta_preprocesada, imagen.ojo_id),
    )
    conn.commit()
    return cursor.lastrowid
