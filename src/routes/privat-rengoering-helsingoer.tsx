import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../components/marketing/LandingPage";

export const Route = createFileRoute("/privat-rengoering-helsingoer")({
  head: () => ({
    meta: [
      { title: "Privat rengøring i Helsingør | MD Cleaning" },
      {
        name: "description",
        content:
          "Privat rengøring i Helsingør med tryg kontakt, personligt møde og fast aftale hver uge eller hver 14. dag.",
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
      intro="MD Cleaning hjælper private hjem i Helsingør med fast rengøring, tydelige aftaler og personlig kontakt, før vi sender et tilbud."
      proofText="Vi går efter faste aftaler, hvor kvaliteten kan holdes stabilt over tid. Derfor vil vi gerne kende hjemmet og forventningerne, før vi vurderer opgaven og sender et tilbud."
      localAreas={["Helsingør", "Snekkersten", "Hellebæk", "Ålsgårde"]}
    />
  );
}
