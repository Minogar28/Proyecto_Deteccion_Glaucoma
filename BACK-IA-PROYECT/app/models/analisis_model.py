from dataclasses import dataclass


@dataclass
class AnalisisOjo:
    anls_id: int = None
    anls_id_paciente: int = None
    anls_ojo: str = None  # OD, OS
    anls_vf_md: float = None
    anls_id_glaucoma: int = None
    anls_id_severidad: int = None
    anls_fecha_analisis: str = None
    anls_feedback_id: int = None
