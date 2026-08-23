import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../components/marketing/LandingPage";

export const Route = createFileRoute("/privat-rengoering-helsingoer")({
  head: () => ({
    meta: [
      { title: "Privat rengøring i Helsingør | MD Cleaning" },
      {
        name: "description",
        content:
          "Privat rengøring i Helsingør med individuel huspris, fast aftale hver uge eller hver 14. dag og tryg kontakt.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Privat rengøring i Helsingør"
      headline="Tryg rengøring til dit hjem i Helsingør"
      intro="MD Cleaning hjælper private hjem i Helsingør med fast rengøring, tydelige aftaler og en individuel pris baseret på hjemmets størrelse og behov."
      proofText="Vi går efter faste aftaler, hvor kvaliteten kan holdes stabilt over tid. Derfor starter vi med en enkel vurdering og giver pris pr. hus frem for at konkurrere på lav timepris."
      localAreas={["Helsingør", "Snekkersten", "Hellebæk", "Ålsgårde"]}
    />
  );
}
