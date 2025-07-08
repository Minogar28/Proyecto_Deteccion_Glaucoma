from app.dao import empresa_dao


def obtener_empresa(id: int):
    empresa = empresa_dao.obtener_por_id(id)
    if empresa:
        return empresa.__dict__, 200
    return {"error": "Empresa no encontrada"}, 404


def listar_empresas():
    empresas = empresa_dao.obtener_todas()
    return [e.__dict__ for e in empresas], 200
