import os
from datetime import datetime


def construir_ruta(tipo: str, nombre_archivo: str, paciente_id: int, ojo: str):
    """
    Genera una ruta absoluta para guardar imágenes según su tipo y origen.

    Parámetros:
    - tipo: 'original', 'prepro', 'segmentada', etc.
    - nombre_archivo: nombre base del archivo
    - paciente_id: ID del paciente
    - ojo: 'OD' (ojo derecho) o 'OS' (ojo izquierdo)

    Retorna:
    - ruta absoluta (str)
    """

    carpeta_base = {
        "original": "uploads",
        "prepro": "procesadas",
        "segmentada": "segmentadas",
        "clasificada": "clasificadas",
    }.get(tipo)

    if not carpeta_base:
        raise ValueError(f"Tipo de imagen no reconocido: '{tipo}'")

    fecha = datetime.now().strftime("%Y-%m-%d")
    nombre = f"{fecha}_p{paciente_id}_{ojo}_{nombre_archivo}"

    ruta_completa = os.path.join(carpeta_base, f"p{paciente_id}", fecha)

    os.makedirs(ruta_completa, exist_ok=True)  # crea carpeta si no existe

    return os.path.join(ruta_completa, nombre)
