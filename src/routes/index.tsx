import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroInterior from "../assets/hero-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Cleaning - Privat rengøring i Helsingør og Nordsjælland" },
      {
        name: "description",
        content:
          "Privat rengøring i Helsingør og Nordsjælland. Få en enkel ca.-pris på rengøring af dit hjem og anmod om et uforpligtende tilbud.",
      },
      { property: "og:title", content: "MD Cleaning - Privat rengøring i Helsingør" },
      {
        property: "og:description",
        content:
          "Tryg privat rengøring til dit hjem. Beregn en ca.-pris og få et uforpligtende tilbud fra MD Cleaning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroInterior },
      { name: "twitter:image", content: heroInterior },
    ],
  }),
  component: Forside,
});

const areaOptions = [
  { label: "Op til 80 m²", hours: 2 },
  { label: "80-120 m²", hours: 2.5 },
  { label: "120-160 m²", hours: 3 },
  { label: "160-220 m²", hours: 4 },
  { label: "220+ m²", hours: 5 },
];

const bathroomOptions = [
  { label: "1 toilet/bad", extra: 0 },
  { label: "2 toiletter/bade", extra: 0.5 },
  { label: "3+ toiletter/bade", extra: 1 },
];

const frequencyOptions = [
  { label: "Hver uge", multiplier: 1 },
  { label: "Hver 14. dag", multiplier: 1.08 },
  { label: "Engangsbesøg", multiplier: 1.2 },
];

const internalHourlyRate = 320;

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
              <a
                href="#prisberegner"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Beregn ca. pris
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center ring-1 ring-primary/20 text-foreground py-3 px-6 rounded-sm text-sm font-medium hover:bg-surface transition-colors"
              >
                Få et uforpligtende tilbud
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <TrustPoint title="Fra 2 timer" text="Minimum pr. besøg" />
              <TrustPoint title="Individuel pris" text="Baseret på dit hjem" />
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
              ønsket frekvens. Derefter får du et forslag, der passer til hverdagen og kan
              leveres stabilt.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoBox title="Privat rengøring" text="Køkken, bad, støv, gulve og faste opgaver." />
              <InfoBox title="Tydelig huspris" text="Du får et samlet billede af prisen pr. besøg." />
              <InfoBox title="Tryg kontakt" text="Du får en konkret vurdering før opstart." />
              <InfoBox title="Lokal rute" text="Helsingør og opland med fokus på god ruteøkonomi." />
            </div>
          </div>

          <PriceCalculator />
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
              budskabet enkelt: tryg privat rengøring, tydelig pris og nem kontakt.
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
              title="Pris der er til at forstå"
              description="Vores beregner giver et ca.-billede. Endelig pris aftales efter hjemmets behov og opgaver."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">
            Klar til en ca.-pris på dit hjem?
          </h2>
          <p className="text-muted-foreground mb-10">
            Brug beregneren som pejlemærke, eller send os en besked, så vender vi tilbage med et
            konkret forslag.
          </p>
          <a
            href="#prisberegner"
            className="inline-flex items-center bg-primary text-primary-foreground py-3 px-8 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Gå til prisberegner
          </a>
        </div>
      </section>
    </>
  );
}

function PriceCalculator() {
  const [areaIndex, setAreaIndex] = useState(1);
  const [bathroomIndex, setBathroomIndex] = useState(1);
  const [frequencyIndex, setFrequencyIndex] = useState(0);
  const [startup, setStartup] = useState(false);
  const [pets, setPets] = useState(false);

  const estimate = useMemo(() => {
    const base = areaOptions[areaIndex].hours;
    const bathrooms = bathroomOptions[bathroomIndex].extra;
    const extras = (startup ? 0.75 : 0) + (pets ? 0.25 : 0);
    const multiplier = frequencyOptions[frequencyIndex].multiplier;
    const hours = Math.max(2, (base + bathrooms + extras) * multiplier);
    const roundedLow = Math.round(hours * 2) / 2;
    const roundedHigh = roundedLow + 0.5;
    const low = Math.round(roundedLow * internalHourlyRate);
    const high = Math.round(roundedHigh * internalHourlyRate);

    return { roundedLow, roundedHigh, low, high };
  }, [areaIndex, bathroomIndex, frequencyIndex, startup, pets]);

  return (
    <div id="prisberegner" className="bg-background p-6 md:p-8 rounded-sm ring-1 ring-black/5">
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
        Prisberegner
      </span>
      <h2 className="text-3xl font-serif font-medium mb-3">Hvad koster rengøring ca.?</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        Beregneren er et pejlemærke til privat rengøring. Vi giver altid en individuel pris ud
        fra hjemmets størrelse, badeværelser, stand, opgaver og frekvens.
      </p>

      <CalculatorGroup label="Hvor stort er hjemmet?">
        {areaOptions.map((option, index) => (
          <ChoiceButton
            key={option.label}
            active={areaIndex === index}
            onClick={() => setAreaIndex(index)}
          >
            {option.label}
          </ChoiceButton>
        ))}
      </CalculatorGroup>

      <CalculatorGroup label="Hvor mange toiletter/badeværelser?">
        {bathroomOptions.map((option, index) => (
          <ChoiceButton
            key={option.label}
            active={bathroomIndex === index}
            onClick={() => setBathroomIndex(index)}
          >
            {option.label}
          </ChoiceButton>
        ))}
      </CalculatorGroup>

      <CalculatorGroup label="Hvor ofte ønsker du rengøring?">
        {frequencyOptions.map((option, index) => (
          <ChoiceButton
            key={option.label}
            active={frequencyIndex === index}
            onClick={() => setFrequencyIndex(index)}
          >
            {option.label}
          </ChoiceButton>
        ))}
      </CalculatorGroup>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        <ToggleOption checked={startup} onChange={setStartup} label="Grundig opstart første gang" />
        <ToggleOption checked={pets} onChange={setPets} label="Kæledyr i hjemmet" />
      </div>

      <div className="bg-surface p-5 rounded-sm ring-1 ring-black/5">
        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">
          Ca. estimat pr. besøg
        </div>
        <div className="text-3xl font-medium text-foreground mb-2">
          {estimate.low}-{estimate.high} kr. ekskl. moms
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          Ca. {estimate.roundedLow}-{estimate.roundedHigh} timers rengøring pr. besøg. Den
          endelige pris gives som huspris efter konkret vurdering.
        </p>
        <Link
          to="/kontakt"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-5 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
        >
          Få konkret tilbud
        </Link>
      </div>
    </div>
  );
}

function CalculatorGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <div className="text-sm font-medium mb-3">{label}</div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function ChoiceButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-sm text-sm ring-1 transition-colors ${
        active
          ? "bg-primary text-primary-foreground ring-primary"
          : "bg-background text-foreground ring-black/10 hover:bg-surface"
      }`}
    >
      {children}
    </button>
  );
}

function ToggleOption({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 text-sm p-3 rounded-sm ring-1 ring-black/5 bg-background cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 accent-[var(--primary)]"
      />
      {label}
    </label>
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
