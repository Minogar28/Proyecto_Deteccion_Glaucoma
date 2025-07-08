import os
from werkzeug.utils import secure_filename
from datetime import datetime

contador_global = 0


def guardar_imagen_original(file_storage, ojo: str, paciente_id: int):
    global contador_global
    contador_global += 1

    fecha = datetime.now().strftime("%Y%m%d")
    filename = secure_filename(file_storage.filename)
    extension = os.path.splitext(filename)[1]

    # Crear carpeta por ojo
    folder = os.path.join("uploads", ojo)
    os.makedirs(folder, exist_ok=True)

    # nombre
    nombre_estandar = f"{contador_global}_{paciente_id}_{ojo}_{fecha}{extension}"
    path = os.path.join(folder, nombre_estandar)

    # Guardar archivo
    file_storage.save(path)

    return path
