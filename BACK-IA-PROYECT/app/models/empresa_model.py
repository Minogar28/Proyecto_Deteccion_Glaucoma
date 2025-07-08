from dataclasses import dataclass


@dataclass
class Empresa:
    empr_id: int = None
    empr_razon_social: str = None
    empr_direccion: str = None
    empr_telefono: str = None
