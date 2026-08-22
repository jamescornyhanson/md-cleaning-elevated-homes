import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ydelser")({
  head: () => ({
    meta: [
      { title: "Ydelser — MD Cleaning" },
      {
        name: "description",
        content:
          "Se MD Cleanings ydelser: standardrengøring, opstartsrengøring, tillægsydelser og engangsopgaver. Fast pris og høj kvalitet i Nordsjælland.",
      },
      { property: "og:title", content: "Ydelser — MD Cleaning" },
      {
        property: "og:description",
        content:
          "Se MD Cleanings ydelser: standardrengøring, opstartsrengøring, tillægsydelser og engangsopgaver. Fast pris og høj kvalitet i Nordsjælland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ydelser,
});

function Ydelser() {
  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-6 block">
            Hvad vi tilbyder
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance mb-8 max-w-3xl">
            Skræddersyet rengøring til det krævende hjem
          </h1>
          <p className="text-lg leading-relaxed text-pretty max-w-[56ch] text-muted-foreground">
            Alle opgaver prissættes individuelt efter boligtype, stand og omfang. Vi arbejder
            altid ud fra en fast ramme, så du ved præcis, hvad du får.
          </p>
        </div>
      </section>

      {/* Pricing notice */}
      <section className="py-8 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm font-medium uppercase tracking-wide">
            Startpris: minimum 2 timer á 580 kr. ekskl. moms
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center text-sm font-medium uppercase tracking-wide underline underline-offset-4 hover:no-underline"
          >
            Få en fast pris
          </Link>
        </div>
      </section>

      {/* Main services */}
      <section className="py-24 px-6 bg-surface ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto space-y-24">
          <ServiceBlock
            number="01"
            title="Standardrengøring"
            description="Vores kerneydelse. En fast aftale med ugentlig eller 14-dages frekvens, hvor vi lærer dit hjem at kende og sikrer, at hver detalje bliver perfekt hver gang."
            details={[
              "Fast pris pr. besøg — ingen overraskelser",
              "Samme team og samme standard hver gang",
              "Tilpasset dit hjem og dine ønsker",
            ]}
            price="Fast pris pr. besøg"
          />

          <ServiceBlock
            number="02"
            title="Opstartsrengøring"
            description="Første besøg hos nye kunder er altid en grundig nulstilling. Det etablerer det kvalitetsniveau, som den efterfølgende standardrengøring skal vedligeholde."
            details={[
              "Grundig rengøring af alle overflader og hjørner",
              "Typisk 25-50% dyrere end standardbesøget",
              "Kan også bestilles som selvstændig engangsydelse",
            ]}
            price="+25-50% af standardpris"
          />

          <ServiceBlock
            number="03"
            title="Engangsopgaver"
            description="Større, tidsafgrænsede opgaver, der kræver ekstra grundighed. Prisen fastsættes efter boligens størrelse og aktuelle stand."
            details={[
              "Hovedrengøring",
              "Flytterengøring",
              "Rengøring efter håndværkere",
            ]}
            price="Pris efter m² og stand"
          />
        </div>
      </section>

      {/* Tillægsydelser */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-serif font-medium mb-4">Tillægsydelser</h2>
            <p className="text-muted-foreground">
              Tilføj ekstra ydelser til din faste aftale eller engangsopgave efter behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 ring-1 ring-black/10 rounded-sm overflow-hidden">
            <AddonCard title="Ovn" description="Grundig af fedt og brugsspor." />
            <AddonCard title="Køleskab" description="Indvendig rengøring og udtørring." />
            <AddonCard title="Ekstra kalk" description="Afkalkning af armaturer og fliser." />
            <AddonCard title="Dyrehår" description="Særlig fokus på pels og allergener." />
            <AddonCard title="Sengeskift" description="Friske lagner og opredning." />
            <AddonCard title="Andet" description="Fortæl os dine ønsker — vi finder en løsning." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">Vil du vide, hvad vi kan gøre for dig?</h2>
          <p className="text-muted-foreground mb-10">
            Fortæl os om dit hjem, så vender vi tilbage med en skræddersyet plan og fast pris.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center bg-foreground text-background py-3 px-8 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Anmod om et tilbud
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceBlock({
  number,
  title,
  description,
  details,
  price,
}: {
  number: string;
  title: string;
  description: string;
  details: string[];
  price: string;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
      <div className="md:col-span-3">
        <span className="text-sm font-serif italic text-accent">{number}</span>
      </div>
      <div className="md:col-span-6">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">{title}</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        <ul className="space-y-3">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-1.5 size-1.5 rounded-full bg-accent shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-3 md:text-right">
        <span className="text-xs uppercase tracking-tighter text-muted-foreground block mb-2">Pris</span>
        <span className="font-medium italic">{price}</span>
      </div>
    </div>
  );
}

function AddonCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-background p-8 h-full">
      <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
