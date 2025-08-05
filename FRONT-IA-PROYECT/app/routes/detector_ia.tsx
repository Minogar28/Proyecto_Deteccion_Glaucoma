import { DetectarIAForm } from "@/components";
import type { Route } from "./+types/detector_ia";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Detector IA" },
    { name: "description", content: "detector ia" },
  ];
}

export default function detector_ia() {
  return <DetectarIAForm />;
}
