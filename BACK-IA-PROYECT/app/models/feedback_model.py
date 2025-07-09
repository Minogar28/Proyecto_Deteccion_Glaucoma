from dataclasses import dataclass


@dataclass
class Feedback:
    feed_id: int = None
    feed_comentario: str = ""
    feed_puntaje: str = ""
