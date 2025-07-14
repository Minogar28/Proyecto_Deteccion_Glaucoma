# app/ml/utils/load_model_seguro.py

from ultralytics import YOLO
from torch.serialization import safe_globals

# 📦 Clases comunes en modelos YOLOv8 entrenados con Ultralytics
from torch.nn.modules.container import Sequential, ModuleList
from torch.nn.modules.conv import Conv2d
from torch.nn.modules.batchnorm import BatchNorm2d
from torch.nn.modules.activation import SiLU, ReLU, LeakyReLU
from torch.nn.modules.linear import Linear
from torch.nn.modules.dropout import Dropout
from torch.nn.modules.pooling import MaxPool2d, AdaptiveAvgPool2d
from torch.nn.modules.upsampling import Upsample

# 🧠 Clases internas usadas por Ultralytics
import ultralytics.nn.tasks
import ultralytics.nn.modules.conv
import ultralytics.nn.modules.block


def load_model_seguro(model_path: str) -> YOLO:
    """
    Carga segura del modelo .pt, autorizando explícitamente todas las clases necesarias
    para PyTorch >=2.6 y modelos YOLOv8 con arquitectura completa.

    Args:
        model_path (str): Ruta absoluta al archivo del modelo (.pt)

    Returns:
        YOLO: Instancia lista del modelo cargado
    """

    with safe_globals(
        [
            # ✅ PyTorch - capas comunes
            Sequential,
            ModuleList,
            Conv2d,
            BatchNorm2d,
            SiLU,
            ReLU,
            LeakyReLU,
            Linear,
            Dropout,
            MaxPool2d,
            AdaptiveAvgPool2d,
            Upsample,
            # ✅ Ultralytics - arquitectura interna
            ultralytics.nn.tasks.DetectionModel,
            ultralytics.nn.modules.conv.Conv,
            ultralytics.nn.modules.conv.Concat,  # ← clase agregada recientemente
            ultralytics.nn.modules.block.C2f,
            ultralytics.nn.modules.block.Bottleneck,
            ultralytics.nn.modules.block.SPPF,
        ]
    ):
        return YOLO(model_path)  # Si vas a usar pesos solo, activa: weights_only=True
