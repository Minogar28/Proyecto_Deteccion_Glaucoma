import base64
import mimetypes
import os


def codificar_imagen_base64(ruta_archivo: str) -> str:
    """
    Codifica una imagen en Base64 con prefijo MIME.

    Args:
        ruta_archivo (str): Ruta absoluta del archivo de imagen.

    Returns:
        str: Cadena codificada en Base64 con prefijo MIME ("data:image/jpeg;base64,...")

    Raises:
        FileNotFoundError: Si el archivo no existe.
        Exception: Para errores de lectura o codificación.
    """
    if not os.path.exists(ruta_archivo):
        raise FileNotFoundError(f"Archivo no encontrado: {ruta_archivo}")

    mime_type, _ = mimetypes.guess_type(ruta_archivo)
    if not mime_type:
        mime_type = "image/jpeg"

    try:
        with open(ruta_archivo, "rb") as f:
            imagen_base64 = base64.b64encode(f.read()).decode("utf-8")
            return f"data:{mime_type};base64,{imagen_base64}"
    except Exception as e:
        raise Exception(f"Error al codificar en Base64: {e}")
