def get_db():
    from app.extensions import mysql

    return mysql.get_db()
