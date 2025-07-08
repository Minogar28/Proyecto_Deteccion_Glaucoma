from app.models.analisis_model import AnalisisOjo
from app.dao import analisis_dao


def crear_analisis(data: dict):
    analisis = AnalisisOjo(
        anls_id_paciente=data.get("anls_id_paciente"),
        anls_ojo=data.get("anls_ojo"),
        anls_vf_md=data.get("anls_vf_md"),
        anls_id_glaucoma=data.get("anls_id_glaucoma"),
        anls_id_severidad=data.get("anls_id_severidad"),
        anls_fecha_analisis=data.get("anls_fecha_analisis"),
        anls_feedback_id=data.get("anls_feedback_id"),
    )
    anls_id = analisis_dao.crear(analisis)
    analisis.anls_id = anls_id
    return {"msg": "Análisis creado", "id": anls_id}, 201


def obtener_analisis_por_paciente(paci_id: int):
    analisis = analisis_dao.obtener_por_paciente(paci_id)
    return [a.__dict__ for a in analisis], 200
