from flask import Blueprint, request, jsonify
from app.extensions import mysql  # Para acceder a la base de datos

api = Blueprint("api", __name__, url_prefix="/api/test")


@api.route("/ping_db", methods=["GET"])
def ping_db():
    try:
        cursor = mysql.get_db().cursor()
        cursor.execute("SELECT NOW()")
        time = cursor.fetchone()[0]
        return jsonify({"status": "ok", "server_time": str(time)})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})
