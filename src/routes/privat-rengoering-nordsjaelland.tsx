import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../components/marketing/LandingPage";

export const Route = createFileRoute("/privat-rengoering-nordsjaelland")({
  head: () => ({
    meta: [
      { title: "Privat rengøring i Nordsjælland | MD Cleaning" },
      {
        name: "description",
        content:
          "Privat rengøring i Nordsjælland med fokus på tryghed, faste aftaler og personlig kontakt før tilbud.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Privat rengøring i Nordsjælland"
      headline="Fast privat rengøring med ro, kvalitet og tydelige aftaler"
      intro="MD Cleaning hjælper private hjem i Nordsjælland med rengøring hver uge eller hver 14. dag. Vi tager personlig kontakt, før vi sender et tilbud."
      proofText="Vi er ikke bygget til priskrig. Vi er bygget til kunder, der ønsker ordentlig kommunikation, stabil rengøring og mennesker, man kan føle sig tryg ved at lukke ind."
      localAreas={["Helsingør", "Hornbæk", "Fredensborg", "Gilleleje"]}
    />
  );
}
