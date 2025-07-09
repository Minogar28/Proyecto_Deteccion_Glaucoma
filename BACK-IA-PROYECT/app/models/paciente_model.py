from dataclasses import dataclass


@dataclass
class Paciente:
    paci_id: int = None
    paci_numero_identificacion: str = None
    paci_nombre: str = None
    paci_apellido: str = None
    paci_edad: int = None
    paci_sexo: str = None
    paci_diabetes: bool = False
    paci_id_empresa: int = None

    def to_dict(self):
        return self.__dict__
