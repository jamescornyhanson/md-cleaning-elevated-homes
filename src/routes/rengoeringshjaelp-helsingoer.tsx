import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../components/marketing/LandingPage";

export const Route = createFileRoute("/rengoeringshjaelp-helsingoer")({
  head: () => ({
    meta: [
      { title: "Rengøringshjælp i Helsingør | MD Cleaning" },
      {
        name: "description",
        content:
          "Rengøringshjælp i Helsingør til private hjem. Få vurderet dit behov og få et uforpligtende tilbud.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Rengøringshjælp i Helsingør"
      headline="Få hjælp til rengøringen - uden at gå på kompromis med trygheden"
      intro="Hvis hjemmet skal være rent uden at hverdagen bliver tungere, hjælper MD Cleaning med faste og tydelige rengøringsaftaler i Helsingør."
      proofText="Rengøringshjælp i private hjem kræver tillid. Derfor fokuserer vi på forventningsafstemning, stabilitet og en pris, der passer til det konkrete hus."
      localAreas={["Helsingør", "Snekkersten", "Espergærde", "Hellebæk"]}
    />
  );
}
