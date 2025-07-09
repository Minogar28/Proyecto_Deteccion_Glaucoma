from app.models.usuario_model import Usuario
from app.utils.db import get_db


def obtener_por_email(email: str):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM usuario WHERE user_email = %s", (email,))
    row = cursor.fetchone()
    return Usuario(**row) if row else None


def crear(usuario: Usuario) -> int:
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO usuario (
            user_nombre,
            user_apellido,
            user_email,
            user_password,
            user_rol,
            user_id_empresa
        ) VALUES (%s, %s, %s, %s, %s, %s)
        """,
        (
            usuario.user_nombre,
            usuario.user_apellido,
            usuario.user_email,
            usuario.user_password,
            usuario.user_rol,
            usuario.user_id_empresa,
        ),
    )
    conn.commit()
    return cursor.lastrowid
