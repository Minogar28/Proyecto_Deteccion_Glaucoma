import torch


def escanear_clases_modelo(path: str):
    try:
        ckpt = torch.load(path, map_location="cpu", weights_only=False)
        print("\n📦 Tipo del checkpoint cargado:")
        print(type(ckpt))
    except Exception as e:
        print("\n⚠️ Error al cargar:", e)


if __name__ == "__main__":
    modelo_path = "models/best.pt"  # Ajusta la ruta si necesario
    escanear_clases_modelo(modelo_path)
