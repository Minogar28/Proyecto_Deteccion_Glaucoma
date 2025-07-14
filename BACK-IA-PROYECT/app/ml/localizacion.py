import os
import cv2
import numpy as np
from ultralytics import YOLO


from app.ml.utils.load_model_seguro import load_model_seguro
from app.utils.paths import MODELS_DIR

model_path = os.path.join(MODELS_DIR, "best.pt")
model = load_model_seguro(model_path)
CROP_SIZE = 800
FINAL_SIZE = 512


def localizar_imagen(image_path: str, output_folder="localizadas") -> str | None:
    """
    Detecta una región en la imagen, la recorta centrada, la redimensiona y la guarda.

    Args:
        image_path (str): Ruta absoluta de la imagen a procesar.
        output_folder (str): Carpeta donde se guardará el resultado.

    Returns:
        str | None: Ruta del recorte guardado, o None si no se detectó nada.
    """

    os.makedirs(output_folder, exist_ok=True)
    image = cv2.imread(image_path)

    if image is None:
        raise ValueError(f"No se pudo cargar la imagen: {image_path}")

    height, width, _ = image.shape
    results = model(image_path)
    boxes = results[0].boxes.xyxy.cpu().numpy()

    if len(boxes) == 0:
        no_detected_folder = os.path.join(output_folder, "no_identificadas")
        os.makedirs(no_detected_folder, exist_ok=True)
        file_name = os.path.basename(image_path)
        out_path = os.path.join(no_detected_folder, file_name)
        cv2.imwrite(out_path, image)
        return None

    x_min, y_min, x_max, y_max = map(int, boxes[0][:4])
    x_center = (x_min + x_max) // 2
    y_center = (y_min + y_max) // 2
    half_crop = CROP_SIZE // 2

    x1, y1 = x_center - half_crop, y_center - half_crop
    x2, y2 = x_center + half_crop, y_center + half_crop

    cropped = np.zeros((CROP_SIZE, CROP_SIZE, 3), dtype=np.uint8)

    x1_img, y1_img = max(x1, 0), max(y1, 0)
    x2_img, y2_img = min(x2, width), min(y2, height)

    x1_dst = x1_img - x1
    y1_dst = y1_img - y1
    x2_dst = x1_dst + (x2_img - x1_img)
    y2_dst = y1_dst + (y2_img - y1_img)

    cropped[y1_dst:y2_dst, x1_dst:x2_dst] = image[y1_img:y2_img, x1_img:x2_img]

    resized = cv2.resize(cropped, (FINAL_SIZE, FINAL_SIZE))

    out_name = f"{os.path.splitext(os.path.basename(image_path))[0]}_loc.jpg"
    out_path = os.path.join(output_folder, out_name)
    cv2.imwrite(out_path, resized)

    return out_path
