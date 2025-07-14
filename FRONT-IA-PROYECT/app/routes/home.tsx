import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Detector Glaucoma" },
    { name: "description", content: "Welcome to detector-glaucoma" },
  ];
}

export default function Home() {
  return <Welcome />;
}
