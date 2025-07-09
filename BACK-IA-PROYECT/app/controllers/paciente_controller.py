from app.models import Paciente
from app.dao import (
    paci_obtener_todos,
    paci_obtener_por_id,
    paci_crear,
    paci_actualizar,
    paci_eliminar,
)


def listar_pacientes():
    pacientes = paci_obtener_todos()
    return [p.to_dict() for p in pacientes], 200


def obtener_paciente(id):
    paciente = paci_obtener_por_id(id)
    if paciente:
        return paciente.to_dict(), 200
    return {"error": "Paciente no encontrado"}, 404


def crear_paciente(data):
    paciente = Paciente(
        paci_numero_identificacion=data.get("paci_numero_identificacion"),
        paci_nombre=data.get("paci_nombre"),
        paci_apellido=data.get("paci_apellido"),
        paci_edad=data.get("paci_edad"),
        paci_sexo=data.get("paci_sexo"),
        paci_diabetes=data.get("paci_diabetes"),
        paci_id_empresa=data.get("paci_id_empresa"),
    )
    paciente_id = paci_crear(paciente)
    paciente.id = paciente_id
    return {"msg": "Creado", "paciente": paciente.to_dict()}, 201


def actualizar_paciente(id, data):
    paci_actualizar(id, data)
    return {"msg": "Actualizado"}, 200


def eliminar_paciente(id):
    paci_eliminar(id)
    return {"msg": "Eliminado"}, 200
