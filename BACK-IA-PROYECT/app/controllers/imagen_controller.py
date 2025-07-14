from app.ml import preprocesamiento
from app.ml.localizacion import localizar_imagen
from app.utils.file_handler import guardar_imagen_original
from app.utils.base64_encode import codificar_imagen_base64
from datetime import datetime


def procesar_imagen(file_storage, ojo, paciente_id):
    try:
        # guarda imagen y devuelve la ruta
        ruta_original = guardar_imagen_original(file_storage, ojo, paciente_id)

        ruta_pre = preprocesamiento.preprocesar_imagen(ruta_original)

        encode = codificar_imagen_base64(ruta_pre)

        return {
            "msg": "Imagen preprocesada correctamente",
            "ruta_preprocesada": ruta_pre,
            "ruta_original": ruta_original,
            "imagen_base64": f"{encode}",
            "ojo": ojo,
            "paciente": paciente_id,
            "fecha": datetime.now().strftime("%Y-%m-%d"),
        }, 200

    except Exception as e:
        return {"error": str(e)}, 500


def localizar_imagen_ruta(ruta):
    try:

        ruta_salida = localizar_imagen(ruta)

        encode = codificar_imagen_base64(ruta_salida)

        return {
            "msg": "Imagen localizada correctamente",
            "ruta_localizada": ruta_salida,
            "imagen_base64": f"{encode}",
            "fecha": datetime.now().strftime("%Y-%m-%d"),
        }, 200

    except Exception as e:
        return {"error": str(e)}, 500
