import os
import shutil


def borrar_pycache(directorio_base="."):
    borradas = []

    for root, dirs, files in os.walk(directorio_base):
        for dir_name in dirs:
            if dir_name == "__pycache__":
                pycache_path = os.path.join(root, dir_name)
                try:
                    shutil.rmtree(pycache_path)
                    borradas.append(pycache_path)
                except Exception as e:
                    print(f"Error al borrar {pycache_path}: {e}")

        for file_name in files:
            if file_name.endswith(".pyc"):
                pyc_path = os.path.join(root, file_name)
                try:
                    os.remove(pyc_path)
                    borradas.append(pyc_path)
                except Exception as e:
                    print(f"Error al borrar {pyc_path}: {e}")

    print("🧹 Archivos de caché eliminados:")
    for ruta in borradas:
        print(" -", ruta)


if __name__ == "__main__":
    borrar_pycache("app")
