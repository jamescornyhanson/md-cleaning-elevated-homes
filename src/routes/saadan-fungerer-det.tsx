import { createFileRoute, Link } from "@tanstack/react-router";
import cleaningTools from "../assets/cleaning-tools.jpg";

export const Route = createFileRoute("/saadan-fungerer-det")({
  head: () => ({
    meta: [
      { title: "Sådan fungerer det — MD Cleaning" },
      {
        name: "description",
        content:
          "Læs hvordan MD Cleaning arbejder: forespørgsel, screening, besøg, fast pris og løbende evaluering i Nordsjælland.",
      },
      { property: "og:title", content: "Sådan fungerer det — MD Cleaning" },
      {
        property: "og:description",
        content:
          "Læs hvordan MD Cleaning arbejder: forespørgsel, screening, besøg, fast pris og løbende evaluering i Nordsjælland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: cleaningTools },
      { name: "twitter:image", content: cleaningTools },
    ],
  }),
  component: SaadanFungererDet,
});

function SaadanFungererDet() {
  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-6 block">
            Processen
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance mb-8 max-w-3xl">
            Sådan sikrer vi kvaliteten
          </h1>
          <p className="text-lg leading-relaxed text-pretty max-w-[56ch] text-muted-foreground">
            Vi screener alle nye opgaver nøje. Hvis vi ikke mener, at vi kan levere det niveau,
            vi er kendt for, siger vi hellere nej tak. Det er din garanti for ordentlighed.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 bg-surface ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-16">
            <ProcessStep
              number="01"
              title="Forespørgsel"
              description="Du kontakter os via formularen eller telefon. Vi svarer altid inden for 24-48 timer med en indledende dialog om dine behov."
            />
            <ProcessStep
              number="02"
              title="Screening af opgave og boligtype"
              description="Vi vurderer, om opgaven passer til vores kapacitet og kvalitetsniveau. Vi siger fra, hvis vi ikke kan levere det, vi står for."
            />
            <ProcessStep
              number="03"
              title="Besøg og vurdering"
              description="Vi mødes i dit hjem for at gennemgå dine ønsker, vurdere boligens stand og aftale eventuelle særlige hensyn."
            />
            <ProcessStep
              number="04"
              title="Fast pris"
              description="Efter besøget giver vi en fast pris pr. besøg eller opgave. Der er ingen skjulte gebyrer eller uforudsete tillæg."
            />
            <ProcessStep
              number="05"
              title="Kundeaftale"
              description="Når prisen er godkendt, udarbejder vi en klar kundeaftale med fastlagte detaljer, frekvens og forventninger."
            />
            <ProcessStep
              number="06"
              title="Første rengøring"
              description="Første besøg er en opstartsrengøring, der etablerer vores kvalitetsniveau og gør hjemmet klar til den faste service."
            />
            <ProcessStep
              number="07"
              title="Evaluering"
              description="Efter første besøg følger vi altid op med en samtale for at sikre, at resultatet lever op til dine forventninger."
            />
          </div>

          <div className="relative lg:sticky lg:top-28 h-fit">
            <img
              src={cleaningTools}
              alt="Nærbillede af rengøringsprodukter i glasflasker og foldet linnedklud"
              width={800}
              height={1008}
              className="w-full aspect-[4/5] object-cover rounded-sm ring-1 ring-black/5"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">Klar til at starte processen?</h2>
          <p className="text-muted-foreground mb-10">
            Send en forespørgsel — vi vender tilbage inden for to hverdage.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center bg-foreground text-background py-3 px-8 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Anmod om et besøg
          </Link>
        </div>
      </section>
    </>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <span className="text-sm font-serif italic text-accent w-8 shrink-0">{number}</span>
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">{description}</p>
      </div>
    </div>
  );
}
