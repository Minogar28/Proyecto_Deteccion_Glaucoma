from app.models.usuario_model import Usuario
from app.dao import usuario_dao


def crear_usuario(data: dict):
    usuario = Usuario(
        user_nombre=data.get("user_nombre"),
        user_apellido=data.get("user_apellido"),
        user_email=data.get("user_email"),
        user_password=data.get("user_password"),
        user_rol=data.get("user_rol"),
        user_id_empresa=data.get("user_id_empresa"),
    )
    user_id = usuario_dao.crear(usuario)
    usuario.user_id = user_id
    return {"msg": "Usuario creado", "usuario": usuario.user_email}, 201


def obtener_usuario_por_email(email: str):
    usuario = usuario_dao.obtener_por_email(email)
    if usuario:
        return usuario.__dict__, 200
    return {"error": "Usuario no encontrado"}, 404
