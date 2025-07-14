# app//init-.py

from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.extensions import mysql
from app.routes import register_blueprints
from app.utils.route_debugger import imprimir_rutas
import pymysql.cursors


def create_app():
    app = Flask(__name__)
    register_blueprints(app)

    app.config.from_object(Config)

    CORS(app)

    app.config["MYSQL_DATABASE_CURSORCLASS"] = pymysql.cursors.DictCursor

    mysql.init_app(app)

    imprimir_rutas(app)

    return app


# 3 modelos, Localizacion(realizar metodo y llamar el precargado) - return image,
# Segmentacion(imagen recibida de la localizacion) - return image,
# Clasificacion(recibir imagen)
# Detector de glaucoma - clasificador de clase(sin glaucoma, con glaucoma, sospechoso)
# Detector de severidad -

# Crear endpoints:
# Pre-procesamiento
