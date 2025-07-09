import os
from dotenv import load_dotenv

load_dotenv()  # Esto debe estar antes de leer variables


class Config:
    MYSQL_DATABASE_HOST = os.getenv("MYSQL_DATABASE_HOST")
    MYSQL_DATABASE_PORT = int(os.getenv("MYSQL_DATABASE_PORT", 3306))
    MYSQL_DATABASE_USER = os.getenv("MYSQL_DATABASE_USER")
    MYSQL_DATABASE_PASSWORD = os.getenv("MYSQL_DATABASE_PASSWORD")
    MYSQL_DATABASE_DB = os.getenv("MYSQL_DATABASE_DB")
