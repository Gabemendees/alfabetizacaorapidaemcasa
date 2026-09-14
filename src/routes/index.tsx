import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atividades de Alfabetização para Imprimir" },
      {
        name: "description",
        content:
          "Ajude seu filho de 3 a 7 anos a aprender a ler com fichas de alfabetização prontas para imprimir.",
      },
      { property: "og:title", content: "Atividades de Alfabetização para Imprimir" },
      {
        property: "og:description",
        content:
          "Fichas prontas para seu filho aprender a ler brincando, em apenas 15 minutos por dia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});