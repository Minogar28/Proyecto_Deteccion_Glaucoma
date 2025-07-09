from dataclasses import dataclass


@dataclass
class Usuario:
    user_id: int = None
    user_nombre: str = None
    user_apellido: str = None
    user_email: str = None
    user_password: str = None
    user_rol: str = None
    user_id_empresa: int = None
