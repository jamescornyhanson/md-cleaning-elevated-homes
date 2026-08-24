import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../components/marketing/LandingPage";

export const Route = createFileRoute("/privat-rengoering-hornbaek")({
  head: () => ({
    meta: [
      { title: "Privat rengøring i Hornbæk | MD Cleaning" },
      {
        name: "description",
        content:
          "Privat rengøring i Hornbæk og omegn. Faste aftaler, tryg kontakt og personligt møde før tilbud.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Privat rengøring i Hornbæk"
      headline="Rengøring til hjem i Hornbæk med ro og omtanke"
      intro="MD Cleaning hjælper private hjem i Hornbæk og omegn med faste rengøringsaftaler, hvor opgaver og forventninger afstemmes personligt."
      proofText="Hornbæk og kystområdet passer godt til vores fokus på private hjem, hvor kunden ønsker stabilitet, tryghed og personlig kontakt frem for laveste pris."
      localAreas={["Hornbæk", "Dronningmølle", "Hellebæk", "Ålsgårde"]}
    />
  );
}
