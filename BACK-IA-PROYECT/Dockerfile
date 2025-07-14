FROM python:3.11-slim

WORKDIR /app

# Instalar dependencias del sistema para OpenCV
RUN apt-get update && apt-get install -y \
  libglib2.0-0 \
  libsm6 \
  libxrender1 \
  libxext6 \
  libgl1-mesa-glx \
  && rm -rf /var/lib/apt/lists/*

# Copiar el modelo YOLO al contenedor
COPY models/best.pt models/best.pt


# Instalar dependencias de Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# Copiar el resto del proyecto
COPY . .

CMD ["python", "run.py"]
