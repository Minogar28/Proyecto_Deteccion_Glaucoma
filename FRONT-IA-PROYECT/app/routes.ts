import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("chats", "routes/chat.tsx"), // → "/chats"
  route("about", "routes/about.tsx"), // → "/about"
  route("detector_ia", "routes/detector_ia.tsx"), // → "/about"
  route("pacientes", "routes/pacientes.tsx"), // → "/about"
] satisfies RouteConfig;
