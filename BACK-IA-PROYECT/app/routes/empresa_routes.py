from flask import Blueprint, jsonify
from app.controllers import empresa_controller

empresa_bp = Blueprint("empresa", __name__, url_prefix="/api/empresa")


@empresa_bp.route("/", methods=["GET"])
def listar():
    return jsonify(empresa_controller.listar_empresas()[0]), 200


@empresa_bp.route("/<int:id>", methods=["GET"])
def obtener(id):
    data, status = empresa_controller.obtener_empresa(id)
    return jsonify(data), status
