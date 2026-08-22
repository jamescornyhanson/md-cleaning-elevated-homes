import { createFileRoute, Link } from "@tanstack/react-router";
import heroInterior from "../assets/hero-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Cleaning — Privatrengøring i Nordsjælland" },
      {
        name: "description",
        content:
          "Eksklusiv privatrengøring i Helsingør, Hornbæk, Gilleleje og Fredensborg. Ro i sindet, tillid og kompromisløs kvalitet.",
      },
      { property: "og:title", content: "MD Cleaning — Privatrengøring i Nordsjælland" },
      {
        property: "og:description",
        content:
          "Eksklusiv privatrengøring i Helsingør, Hornbæk, Gilleleje og Fredensborg. Ro i sindet, tillid og kompromisløs kvalitet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroInterior },
      { name: "twitter:image", content: heroInterior },
    ],
  }),
  component: Forside,
});

function Forside() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-6 block">
              Helsingør & Nordsjælland
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-balance mb-8">
              Vi sælger ikke timer. Vi sælger ro i sindet for det krævende hjem.
            </h1>
            <p className="text-lg leading-relaxed text-pretty max-w-[56ch] text-muted-foreground mb-10">
              Eksklusiv privatrengøring for dig, der værdsætter diskretion, stabilitet og
              kompromisløs kvalitet. Vi betjener de smukkeste hjem langs kysten fra
              Snekkersten til Gilleleje.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center bg-foreground text-background py-3 pr-4 pl-3 rounded-sm text-sm font-medium ring-1 ring-foreground transition-transform hover:-translate-y-0.5"
            >
              <svg
                className="size-4 mr-2 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Anmod om et uforpligtende tilbud
            </Link>
          </div>
        </div>
      </section>

      {/* Image Feature */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <img
            src={heroInterior}
            alt="Lyst nordisk interiør med morgenlys og linnedgardiner"
            width={1920}
            height={800}
            className="w-full aspect-[21/9] object-cover rounded-sm ring-1 ring-black/5"
            loading="eager"
          />
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-medium leading-snug text-balance">
              Kvalitet kræver selektivitet
            </h2>
          </div>
          <div className="space-y-6 text-background/80 font-light leading-relaxed">
            <p>
              Vi er ikke det billigste valg i markedet, og det er et bevidst valg. MD Cleaning
              ligger i den øverste top af markedet på både pris og udførelse.
            </p>
            <p>
              Vi tager kun nye kunder ind, hvor vi kan garantere den kompromisløse standard, vi
              er kendt for. Det er din sikkerhed for et fejlfrit resultat hver eneste gang.
            </p>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 px-6 bg-surface ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-serif font-medium leading-tight text-balance mb-4">
                Vores Ydelser
              </h2>
              <p className="text-muted-foreground text-pretty max-w-[48ch]">
                Vi skræddersyr altid vores besøg, men tager udgangspunkt i en fast ramme for at
                sikre kontinuitet.
              </p>
            </div>
            <div className="text-sm font-medium text-accent italic">
              Priser starter fra 580 kr. ekskl. moms (min. 2 timer)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              number="01 / Fast Aftale"
              title="Standardrengøring"
              description="Fast ugentlig eller 14-dages frekvens. Vi lærer dit hjem at kende, så hver detalje bliver perfekt hver gang."
              price="Fast pris pr. besøg"
            />
            <ServiceCard
              number="02 / Grundighed"
              title="Opstartsrengøring"
              description="Obligatorisk første besøg hvor vi nulstiller hjemmet. Dette sikrer, at vores standard herefter kan holdes."
              price="+25-50% af standard"
            />
            <ServiceCard
              number="03 / Ad hoc"
              title="Engangsopgaver"
              description="Hovedrengøring, flytterengøring eller efter håndværkere. Vi leverer et fejlfrit resultat klar til indflytning."
              price="Pris efter m²"
            />
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/ydelser"
              className="inline-flex items-center text-sm font-medium tracking-wide uppercase text-foreground hover:text-accent transition-colors"
            >
              Se alle ydelser
              <svg
                className="size-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">Lad os passe på dit hjem</h2>
          <p className="text-muted-foreground mb-10">
            Vi vender tilbage inden for to hverdage med en indledende vurdering.
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

function ServiceCard({
  number,
  title,
  description,
  price,
}: {
  number: string;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="group bg-background p-8 ring-1 ring-black/5 rounded-sm transition-transform hover:-translate-y-1">
      <span className="text-[10px] font-medium uppercase tracking-widest text-accent/60 mb-8 block">
        {number}
      </span>
      <h3 className="text-xl font-serif font-medium mb-4">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">{description}</p>
      <div className="pt-6 border-t border-black/5 flex justify-between items-baseline">
        <span className="text-xs uppercase tracking-tighter opacity-50">Pris</span>
        <span className="font-medium italic">{price}</span>
      </div>
    </div>
  );
}
