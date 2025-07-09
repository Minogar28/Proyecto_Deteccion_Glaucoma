# app/routes/register.py
from app.routes.paciente_routes import paciente_bp
from app.routes.usuario_routes import usuario_bp
from app.routes.empresa_routes import empresa_bp
from app.routes.analisis_routes import analisis_bp
from app.routes.imagen_routes import imagen_bp
from app.routes.routes_test import api

blueprints = [paciente_bp, usuario_bp, empresa_bp, analisis_bp, imagen_bp, api]


def register_blueprints(app):
    for bp in blueprints:
        app.register_blueprint(bp)
