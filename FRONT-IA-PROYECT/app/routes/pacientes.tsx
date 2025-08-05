import { PacienteCrud } from "@/components";
import type { Route } from "./+types/pacientes";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Pacientes" },
//     { name: "description", content: "pacientes" },
//   ];
// }

export default function pacientes() {
  return <PacienteCrud />;
}
