from dataclasses import dataclass


@dataclass
class Severidad:
    seve_id: int = None
    seve_nivel: str = None  # leve, moderado, severo
