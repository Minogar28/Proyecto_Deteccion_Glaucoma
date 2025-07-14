# from app.ml.utils.diagnostico_modelo import escanear_clases_modelo

# if __name__ == "__main__":
#     escanear_clases_modelo("app/models/best.pt")

import torch
import traceback


def escanear_clases_modelo(path: str):
    print(f"\n🔍 Escaneando archivo: {path}")
    try:
        ckpt = torch.load(path, map_location="cpu", weights_only=False)
        print("\n✅ El modelo se cargó correctamente con arquitectura completa.")
        print(f"📦 Tipo de objeto: {type(ckpt)}\n")

    except Exception as e:
        error_str = str(e)
        print("\n⚠️ Error al cargar el modelo .pt")
        print(f"🧠 Mensaje: {error_str}\n")

        # Extraer clase bloqueada
        blocked = None
        for line in traceback.format_exception_only(type(e), e):
            if "GLOBAL" in line and "torch.serialization" not in line:
                parts = line.split("GLOBAL ")
                if len(parts) > 1:
                    blocked = parts[1].split()[0]

        if blocked:
            print(f"🚫 Clase bloqueada detectada: {blocked}\n")
            print("🔐 Para solucionarlo, agrega esta línea a safe_globals:")
            print(f"    {blocked}")
            print("\n✅ Ejemplo completo:")
            print(f"    import {blocked.rsplit('.', 1)[0]}")
            print(
                f"    with safe_globals([{blocked}]):\n        model = YOLO(model_path)"
            )
        else:
            print(
                "😕 No se pudo extraer la clase bloqueada. Revisa el traceback completo."
            )


if __name__ == "__main__":
    escanear_clases_modelo("models/best.pt")
