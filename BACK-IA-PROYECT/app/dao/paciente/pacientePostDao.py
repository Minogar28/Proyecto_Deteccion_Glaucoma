from app.extensions import mysql


def crear_paciente(paciente):
    db = mysql.get_db()
    cursor = db.cursor()

    cursor.execute(
        """
        INSERT INTO paciente (
            paci_numero_identificacion,
            paci_nombre,
            paci_apellido,
            paci_edad,
            paci_sexo,
            paci_diabetes,
            paci_id_empresa
        ) VALUES (%s, %s, %s, %s, %s, %s, %s)
    """,
        (
            paciente.get_numero_identificacion(),
            paciente.get_nombre(),
            paciente.get_apellido(),
            paciente.get_edad(),
            paciente.get_sexo(),
            paciente.get_diabetes(),
            paciente.get_id_empresa(),
        ),
    )

    db.commit()
    return cursor.lastrowid
