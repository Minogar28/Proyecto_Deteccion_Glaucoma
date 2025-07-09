from flask import Blueprint, request, jsonify
from app.controllers import usuario_controller

usuario_bp = Blueprint("usuario", __name__, url_prefix="/api/usuario")


@usuario_bp.route("/<string:email>", methods=["GET"])
def get_by_email(email):
    data, status = usuario_controller.obtener_usuario_por_email(email)
    return jsonify(data), status


@usuario_bp.route("/", methods=["POST"])
def create():
    data = request.get_json()
    response, status = usuario_controller.crear_usuario(data)
    return jsonify(response), status
