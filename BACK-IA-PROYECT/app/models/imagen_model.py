from dataclasses import dataclass


@dataclass
class Imagen:
    id: int = None
    ruta_original: str = None
    ruta_preprocesada: str = None
    ojo_id: int = None
