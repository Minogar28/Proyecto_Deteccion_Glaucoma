from app.ml import preprocesamiento
from app.utils.file_handler import guardar_imagen_original
from datetime import datetime
import base64


def procesar_imagen(file_storage, ojo, paciente_id):
    try:
        # guarda imagen y devuelve la ruta
        ruta_original = guardar_imagen_original(file_storage, ojo, paciente_id)

        ruta_pre = preprocesamiento.preprocesar_imagen(ruta_original)

        with open(ruta_pre, "rb") as f:
            imagen_base64 = base64.b64encode(f.read()).decode("utf-8")

        return {
            "msg": "Imagen preprocesada correctamente",
            "preprocesada": ruta_pre,
            "ruta_original": ruta_original,
            "imagen_base64": f"data:image/jpeg;base64,{imagen_base64}",
            "ojo": ojo,
            "paciente": paciente_id,
            "fecha": datetime.now().strftime("%Y-%m-%d"),
        }, 200

    except Exception as e:
        return {"error": str(e)}, 500
