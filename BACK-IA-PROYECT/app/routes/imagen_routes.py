from flask import Blueprint, request, jsonify
from app.controllers import imagen_controller
from app.controllers import paciente_controller


imagen_bp = Blueprint("imagen", __name__, url_prefix="/api/imagen")


@imagen_bp.route("/procesar", methods=["POST"])
def procesar_imagen():
    if "imagen" not in request.files:
        return jsonify({"error": "No se recibió la imagen"}), 400

    file = request.files["imagen"]
    tipo_ojo = request.form.get("ojo")

    if not tipo_ojo:
        return jsonify({"error": "Falta el tipo de ojo"}), 400

    id_paciente = request.form.get("id_paciente")
    datos_paciente = None

    if not id_paciente and request.form.get("paci_numero_identificacion"):
        data = request.form.to_dict()
        response, status = paciente_controller.crear_paciente(data)
        if status == 201:
            datos_paciente = response.get("paciente")

    response, status = imagen_controller.procesar_imagen(file, tipo_ojo, id_paciente)
    return jsonify(response), status


@imagen_bp.route("/localizar", methods=["POST"])
def api_localizar():
    data = request.get_json()
    ruta = data.get("ruta_imagen")
    try:
        return imagen_controller.localizar_imagen_ruta(ruta)
    except Exception as e:
        return {"status": "error", "msg": str(e)}, 500
