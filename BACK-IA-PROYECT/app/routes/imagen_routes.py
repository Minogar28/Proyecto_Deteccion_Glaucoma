from flask import Blueprint, request, jsonify
from app.controllers import imagen_controller
from app.ml.localizacion import localizar_imagen


imagen_bp = Blueprint("imagen", __name__, url_prefix="/api/imagen")


@imagen_bp.route("/procesar", methods=["POST"])
def procesar_imagen():
    if "imagen" not in request.files:
        return jsonify({"error": "No se recibió la imagen"}), 400
    if "ojo" not in request.form or "id_paciente" not in request.form:
        return jsonify({"error": "Faltan datos requeridos"}), 400

    file = request.files["imagen"]
    tipo_ojo = request.form["ojo"]  # 'OD' o 'OS'
    id_paciente = int(request.form["id_paciente"])

    response, status = imagen_controller.procesar_imagen(file, tipo_ojo, id_paciente)
    return jsonify(response), status


@imagen_bp.route("/localizar", methods=["POST"])
def api_localizar():
    data = request.get_json()
    ruta = data.get("ruta_imagen")
    try:
        salida = localizar_imagen(ruta)
        return {"status": "ok", "ruta_localizada": salida}
    except Exception as e:
        return {"status": "error", "msg": str(e)}, 500
