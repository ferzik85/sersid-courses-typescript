import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Courses App" },
    { name: "description", content: "Welcome to Courses App!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
