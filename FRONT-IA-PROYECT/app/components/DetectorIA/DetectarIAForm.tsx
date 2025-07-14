import { useState } from "react";
import { ModalWrapper, TabsNextStep } from "@/components";
import { usePasoIA, useDetectorIA } from "@/hooks";
import { usePacienteForm } from "@/hooks/usePacienteForm";
import SendImage from "./steps/StepSendImage";
import ImageDisplay from "@/components/ImagenViewer/ImageDisplay";
import type { TabStep } from "@/components/Tabs/config/TabsBase.type";
import type { Paciente } from "@/types";
import { localizarImagen } from "@/services/detectorIa/localizada";
import { getPacienteDataForFormData } from "@/services/helpers";

export default function DetectarIAForm() {
  const [selectedEye, setSelectedEye] = useState<string | null>(null);
  const [pacienteSeleccionado, setPacienteSeleccionado] =
    useState<Paciente | null>(null);
  const [imagenFile, setImagenFile] = useState<File | null>(null);

  const {
    rutaImage,
    msg,
    setMsg,
    imagen,
    setImagen,
    setImLoc,
    imPrePro,
    imLoc,
    imSeg,
    enviarArchivo,
  } = useDetectorIA();

  const { tabIndex, setTabIndex } = usePasoIA();

  const {
    values: pacienteFormData,
    setValues: setPacienteFormData,
    handleChange: handlePacienteChange,
    validate: validatePaciente,
    errors: pacienteErrors,
    reset: resetPacienteForm,
  } = usePacienteForm();

  const handleProcesamientoInicial = async () => {
    if (!imagenFile || !selectedEye) {
      alert("Faltan datos: imagen y tipo de ojo");
      return;
    }

    const hayDatosManual =
      !pacienteSeleccionado &&
      (pacienteFormData.nombre || pacienteFormData.numero_identificacion);

    if (hayDatosManual) {
      const isValid = validatePaciente();
      if (!isValid) {
        alert("Completa los datos obligatorios del paciente");
        return;
      }
    }

    const pacientePayload = !pacienteSeleccionado
      ? getPacienteDataForFormData(pacienteFormData)
      : undefined;

    await enviarArchivo(
      imagenFile,
      selectedEye,
      pacienteSeleccionado?.id ?? null,
      pacientePayload
    );
  };

  const handleUpload = async (file: File) => {
    const imgURL = URL.createObjectURL(file);
    setImagen(imgURL);
    setImagenFile(file);
  };

  const tabsIA: TabStep[] = [
    {
      label: "Subir Imagen",
      component: (
        <SendImage
          imagen={imagen}
          handleUpload={handleUpload}
          handleImage={() => {
            setImagen(null);
            setSelectedEye(null);
            setPacienteSeleccionado(null);
            resetPacienteForm();
          }}
          onDetect={(ojo, id) => {
            if (!imagenFile) return;
            enviarArchivo(imagenFile, ojo, id);
          }}
          onSelectUser={() => console.log("Seleccionar usuario")}
          selectedEye={selectedEye}
          setSelectedEye={setSelectedEye}
          pacienteSeleccionado={pacienteSeleccionado}
          setPacienteSeleccionado={setPacienteSeleccionado}
          pacienteFormData={pacienteFormData}
          setPacienteFormData={setPacienteFormData}
          handlePacienteChange={handlePacienteChange}
          pacienteErrors={pacienteErrors}
        />
      ),
      disabled: false,
      onNext: handleProcesamientoInicial,
    },
    {
      label: "Preprocesada",
      component: imPrePro ? (
        <ImageDisplay src={imPrePro} alt='Preprocesada' />
      ) : (
        <p>No disponible</p>
      ),
      disabled: !imPrePro,
      onNext: async () => {
        const result = await localizarImagen(rutaImage ?? "");
        setImLoc(result.imagen_base64);
      },
    },
    {
      label: "Localizada",
      component: imLoc ? (
        <ImageDisplay src={imLoc} alt='localizada' />
      ) : (
        <p>No disponible</p>
      ),
      disabled: !imLoc,
      onNext: () => {
        console.log("Enviar ruta localizada al backend:", imLoc);
      },
    },
    {
      label: "Segmentada",
      component: imSeg ? (
        <img src={imSeg} alt='Segmentada' className='max-w-md' />
      ) : (
        <p>No disponible</p>
      ),
      disabled: !imSeg,
      onNext: () => {
        console.log("Enviar ruta segmentada al backend:", imSeg);
      },
    },
    {
      label: "Resultado",
      component: <p>Métricas o resultados IA.</p>,
      disabled: !(imPrePro && imLoc && imSeg),
    },
  ];

  return (
    <div className='flex flex-row w-full h-full bg-blue-50 rounded-2xl p-4'>
      {msg && (
        <ModalWrapper open={true} onClose={() => setMsg(null)}>
          <h3 className='text-2xl text-black'>Resultado IA</h3>
          <p className='text-gray-950'>{msg}</p>
        </ModalWrapper>
      )}
      <TabsNextStep
        tabs={tabsIA}
        activeTabIndex={tabIndex}
        setActiveTabIndex={setTabIndex}
        tabsProps={{
          orientation: "vertical",
          variant: "scrollable",
          sx: {
            borderRight: 1,
            borderColor: "divider",
            height: "100%",
            display: "flex",
          },
        }}
      />
    </div>
  );
}
