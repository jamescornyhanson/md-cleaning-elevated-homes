import { createFileRoute, Link } from "@tanstack/react-router";
import heroInterior from "../assets/hero-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Cleaning - Privat rengøring i Helsingør og Nordsjælland" },
      {
        name: "description",
        content:
          "Privat rengøring i Helsingør og Nordsjælland. Vi tager personlig kontakt og ser hjemmet, før vi sender et tilbud.",
      },
      { property: "og:title", content: "MD Cleaning - Privat rengøring i Helsingør" },
      {
        property: "og:description",
        content:
          "Tryg privat rengøring til dit hjem. Vi lægger vægt på personlig kontakt, før vi sender et tilbud.",
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
      <section className="px-6 py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-12 items-center">
          <div className="max-w-2xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-5 block">
              Privat rengøring i Helsingør og Nordsjælland
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-balance mb-7">
              Vi passer godt på dit hjem.
            </h1>
            <p className="text-lg leading-relaxed text-pretty max-w-[58ch] text-muted-foreground mb-8">
              Fast privat rengøring for dig, der ønsker et rent hjem, tydelige aftaler og
              mennesker, du kan føle dig tryg ved at lukke ind.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Anmod om personligt møde
              </Link>
              <Link
                to="/ydelser"
                className="inline-flex items-center justify-center ring-1 ring-primary/20 text-foreground py-3 px-6 rounded-sm text-sm font-medium hover:bg-surface transition-colors"
              >
                Se ydelser
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <TrustPoint title="Kvalitet først" text="Vi tager kun opgaver, vi kan stå inde for" />
              <TrustPoint title="Personlig kontakt" text="Vi vil kende hjemmet, før vi giver tilbud" />
              <TrustPoint title="Fast aftale" text="Uge eller hver 14. dag" />
            </div>
          </div>

          <div>
            <img
              src={heroInterior}
              alt="Lyst og roligt hjem med rene overflader"
              width={900}
              height={1080}
              className="w-full aspect-[4/5] object-cover rounded-sm ring-1 ring-black/5"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1fr] gap-14 items-start">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-5 block">
              Let at komme i gang
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-5">
              En enkel løsning til et hjem, der skal fungere i hverdagen
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Vi starter med en praktisk vurdering af hjemmets størrelse, antal badeværelser og
              ønsket frekvens. Derefter tager vi personlig kontakt, så vi forstår hjemmet,
              hverdagen og forventningerne, før vi sender et tilbud.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoBox title="Privat rengøring" text="Køkken, bad, støv, gulve og faste opgaver." />
              <InfoBox title="Personligt møde" text="Vi vil gerne se og forstå hjemmet først." />
              <InfoBox title="Tryg kontakt" text="Du får en konkret dialog før tilbud." />
              <InfoBox title="Lokal rute" text="Helsingør og opland med fokus på god ruteøkonomi." />
            </div>
          </div>

          <div className="bg-background p-6 md:p-8 rounded-sm ring-1 ring-black/5">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
              Din vurdering
            </span>
            <h2 className="text-3xl font-serif font-medium mb-3">
              Sådan finder vi den rigtige løsning
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Hvert hjem er forskelligt. Derfor lægger vi vægt på personlig kontakt og et møde,
              før vi aftaler omfang og sender tilbud. Du får et forslag, der bygger på dit hjem,
              ikke en standardpakke.
            </p>

            <ol className="space-y-5 mb-8">
              <Step number="1" text="Du beskriver dit hjem og dine ønsker." />
              <Step number="2" text="Vi tager personlig kontakt og aftaler et møde eller en gennemgang." />
              <Step number="3" text="Først derefter sender vi et uforpligtende tilbud." />
            </ol>

            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-5 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              Anmod om vurdering
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-serif font-medium leading-tight mb-4">
              Derfor vælger kunder MD Cleaning
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sitet skal kunne bruges til Google Ads og lokale landingssider. Derfor holder vi
              budskabet enkelt: tryg privat rengøring, tydelig aftale og nem kontakt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Rent hjem uden besvær"
              description="Vi hjælper med de faste opgaver, der får hjemmet til at føles rent og overskueligt."
            />
            <ServiceCard
              title="Mennesker du kan stole på"
              description="Privat rengøring handler om tillid. Vi lægger vægt på ordentlighed, stabilitet og god dialog."
            />
            <ServiceCard
              title="Aftale du kan forstå"
              description="Du får en klar aftale om opgaver og frekvens efter personlig kontakt og forventningsafstemning."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">
            Klar til en vurdering af dit hjem?
          </h2>
          <p className="text-muted-foreground mb-10">
            Fortæl os om dit hjem, så tager vi personlig kontakt og aftaler næste skridt.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center bg-primary text-primary-foreground py-3 px-8 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Anmod om vurdering
          </Link>
        </div>
      </section>
    </>
  );
}

function TrustPoint({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-l-2 border-accent pl-3">
      <div className="font-medium text-foreground">{title}</div>
      <div>{text}</div>
    </div>
  );
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-background p-5 rounded-sm ring-1 ring-black/5">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-surface p-7 ring-1 ring-black/5 rounded-sm">
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full ring-1 ring-black/10 text-xs font-medium text-foreground">
        {number}
      </span>
      <span className="text-sm text-muted-foreground leading-relaxed pt-1">{text}</span>
    </li>
  );
}
