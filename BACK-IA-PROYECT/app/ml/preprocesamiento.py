import cv2, numpy as np, os


def preprocesar_imagen(ruta_input: str):
    """
    Recibe la ruta de una imagen original y genera una versión preprocesada
    en formato cuadrado, con mejoras de contraste usando CLAHE.
    Guarda el resultado en la carpeta 'procesadas/'.

    Retorna: ruta de salida como string.
    """

    os.makedirs("procesadas", exist_ok=True)

    # Leer imagen original
    imagen_bgr = cv2.imread(ruta_input, cv2.IMREAD_COLOR)
    if imagen_bgr is None:
        raise ValueError(f"No se pudo cargar la imagen desde '{ruta_input}'")

    imagen_rgb = cv2.cvtColor(imagen_bgr, cv2.COLOR_BGR2RGB)

    # Transformar a imagen cuadrada
    h, w = imagen_rgb.shape[:2]
    size = max(h, w)
    cuadrada = np.zeros((size, size, 3), dtype=np.uint8)
    y_off, x_off = (size - h) // 2, (size - w) // 2
    cuadrada[y_off : y_off + h, x_off : x_off + w] = imagen_rgb

    # Aplicar CLAHE a R y G
    r, g, b = cv2.split(cuadrada)
    clahe = cv2.createCLAHE(clipLimit=4.0, tileGridSize=(8, 8))
    canales = [
        clahe.apply(cv2.normalize(c, None, 0, 255, cv2.NORM_MINMAX)) for c in [r, g]
    ] + [b]
    final = cv2.merge(canales)

    # Ruta de salida
    nombre_archivo = os.path.basename(ruta_input)
    output_path = os.path.join("procesadas", f"pre_{nombre_archivo}")
    cv2.imwrite(output_path, cv2.cvtColor(final, cv2.COLOR_RGB2BGR))

    return output_path
