export default function FormularioPaciente({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  return (
    <div>
      <h3>Formulario de Paciente</h3>
      <button onClick={onSuccess}>Cerrar</button>
    </div>
  );
}
