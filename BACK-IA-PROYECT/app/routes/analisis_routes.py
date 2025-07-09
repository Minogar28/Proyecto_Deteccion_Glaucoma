from flask import Blueprint, request, jsonify
from app.controllers import analisis_controller

analisis_bp = Blueprint("analisis", __name__, url_prefix="/api/analisis")


@analisis_bp.route("/", methods=["POST"])
def crear_analisis():
    data = request.get_json()
    response, status = analisis_controller.crear_analisis(data)
    return jsonify(response), status


@analisis_bp.route("/paciente/<int:paci_id>", methods=["GET"])
def obtener_por_paciente(paci_id):
    data, status = analisis_controller.obtener_analisis_por_paciente(paci_id)
    return jsonify(data), status
