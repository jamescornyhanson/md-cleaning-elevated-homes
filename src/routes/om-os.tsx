import { createFileRoute, Link } from "@tanstack/react-router";
import cleaningTools from "../assets/cleaning-tools.jpg";

export const Route = createFileRoute("/om-os")({
  head: () => ({
    meta: [
      { title: "Om os — MD Cleaning" },
      {
        name: "description",
        content:
          "Læs om MD Cleaning: et privat rengøringsfirma i Nordsjælland, der behandler medarbejdere godt for at sikre stabilitet og kvalitet i kundens hjem.",
      },
      { property: "og:title", content: "Om os — MD Cleaning" },
      {
        property: "og:description",
        content:
          "Læs om MD Cleaning: et privat rengøringsfirma i Nordsjælland, der behandler medarbejdere godt for at sikre stabilitet og kvalitet i kundens hjem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: cleaningTools },
      { name: "twitter:image", content: cleaningTools },
    ],
  }),
  component: OmOs,
});

function OmOs() {
  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-6 block">
            Bag kulissen
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance mb-8 max-w-3xl">
            Ordentlighed starter med ordentlige vilkår
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 px-6 bg-surface ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <img
              src={cleaningTools}
              alt="Rengøringsprodukter i glasflasker og foldet linnedklud på lyst træ"
              width={800}
              height={1008}
              className="w-full aspect-[4/5] object-cover rounded-sm ring-1 ring-black/5"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2 max-w-lg">
            <h2 className="text-3xl font-serif font-medium mb-8">
              Glade medarbejdere giver bedre resultater
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                MD Cleaning er et privat rengøringsfirma med base i Nordsjælland. Vi betjener
                kunder inden for 40 minutters kørsel fra Helsingør — herunder Hornbæk,
                Snekkersten, Espergærde, Gilleleje og Fredensborg.
              </p>
              <p>
                Vi ved, at tilliden til at lukke fremmede ind i sit hjem er stor. Derfor
                behandler vi vores medarbejdere med dyb respekt og ordentlige vilkår.
              </p>
              <p>
                Resultatet er stabile, ordentlige og dedikerede mennesker, der sætter en ære i
                at passe på dit hjem, som var det deres eget.
              </p>
              <p>
                Vi sælger ikke discounttimer. Vi sælger ro i sindet — og den ro bygger på
                pålidelighed, diskretion og et team, der trives.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-black/5">
              <dl className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-tighter text-muted-foreground mb-1">CVR</dt>
                  <dd className="font-medium">37487295</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-tighter text-muted-foreground mb-1">SE-nr.</dt>
                  <dd className="font-medium">45571157</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-medium mb-16 text-center">Det, vi står for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Tillid"
              description="Du lukker os ind i dit hjem. Det tager vi alvorligt — hver gang."
            />
            <ValueCard
              title="Stabilitet"
              description="Det samme team. Den samme standard. Uge efter uge."
            />
            <ValueCard
              title="Kvalitet"
              description="Vi siger fra, hvis vi ikke kan levere vores niveau. Ingen undskyldninger."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">Mød teamet bag rengøringen</h2>
          <p className="text-muted-foreground mb-10">
            Har du spørgsmål til, hvordan vi arbejder? Vi er klar til en uforpligtende samtale.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center bg-foreground text-background py-3 px-8 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Kontakt os
          </Link>
        </div>
      </section>
    </>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-surface p-8 ring-1 ring-black/5 rounded-sm">
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
