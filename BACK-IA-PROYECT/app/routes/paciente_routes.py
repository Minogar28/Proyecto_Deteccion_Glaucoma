from flask import Blueprint, request, jsonify
from app.controllers import paciente_controller

paciente_bp = Blueprint("paciente", __name__, url_prefix="/api/paciente")


@paciente_bp.route("/", methods=["GET"])
def get_all():
    data, status = paciente_controller.listar_pacientes()
    return jsonify(data), status


@paciente_bp.route("/<int:id>", methods=["GET"])
def get_by_id(id):
    data, status = paciente_controller.obtener_paciente(id)
    return jsonify(data), status


@paciente_bp.route("/crear", methods=["POST"])
def crear():
    data = request.get_json()
    response, status = paciente_controller.crear_paciente(data)
    return jsonify(response), status


@paciente_bp.route("/<int:id>", methods=["PUT"])
def actualizar(id):
    data = request.get_json()
    response, status = paciente_controller.actualizar_paciente(id, data)
    return jsonify(response), status


@paciente_bp.route("/<int:id>", methods=["DELETE"])
def eliminar(id):
    response, status = paciente_controller.eliminar_paciente(id)
    return jsonify(response), status
