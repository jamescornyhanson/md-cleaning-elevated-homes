import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroInterior from "../../assets/hero-interior.jpg";

type LandingPageProps = {
  areaLabel: string;
  headline: string;
  intro: string;
  proofText: string;
  localAreas: string[];
};

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
];

const internalHourlyRate = 320;

export function LandingPage({
  areaLabel,
  headline,
  intro,
  proofText,
  localAreas,
}: LandingPageProps) {
  return (
    <>
      <section className="px-6 py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-12 items-center">
          <div className="max-w-2xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-5 block">
              {areaLabel}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-balance mb-7">
              {headline}
            </h1>
            <p className="text-lg leading-relaxed text-pretty max-w-[58ch] text-muted-foreground mb-8">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#pris"
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
          </div>

          <img
            src={heroInterior}
            alt="Lyst og roligt hjem med rene overflader"
            width={900}
            height={1080}
            className="w-full aspect-[4/5] object-cover rounded-sm ring-1 ring-black/5"
            loading="eager"
          />
        </div>
      </section>

      <section className="py-18 px-6 bg-surface ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.75fr_1fr] gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-medium mb-5">
              Tryg fast rengøring - uden at du skal vælge på timepris
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">{proofText}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoBox title="Uge eller 14 dage" text="Det er udgangspunktet for faste aftaler." />
              <InfoBox title="Individuel huspris" text="Baseret på m², bad, stand og opgaver." />
              <InfoBox title="Tydelig opstart" text="Vi afstemmer forventningerne før første besøg." />
              <InfoBox title="Lokalt fokus" text={`Relevant for ${localAreas.join(", ")}.`} />
            </div>
          </div>

          <LandingCalculator />
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-serif font-medium leading-tight mb-4">
              Sådan kommer du videre
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Brug beregneren som pejlemærke. Derefter kontakter vi dig med en konkret vurdering
              af hjemmet og en pris pr. besøg.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Step number="01" title="Beregn ca. pris" text="Vælg størrelse, badeværelser og frekvens." />
            <Step number="02" title="Send forespørgsel" text="Fortæl kort om hjemmet og dine ønsker." />
            <Step number="03" title="Få huspris" text="Vi vurderer opgaven og giver et konkret forslag." />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">Vil du have en konkret pris?</h2>
          <p className="text-muted-foreground mb-10">
            Send en forespørgsel, så vender vi tilbage med næste skridt.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center bg-primary text-primary-foreground py-3 px-8 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Få et tilbud
          </Link>
        </div>
      </section>
    </>
  );
}

function LandingCalculator() {
  const [areaIndex, setAreaIndex] = useState(1);
  const [bathroomIndex, setBathroomIndex] = useState(1);
  const [frequencyIndex, setFrequencyIndex] = useState(0);
  const [startup, setStartup] = useState(false);

  const estimate = useMemo(() => {
    const base = areaOptions[areaIndex].hours;
    const bathrooms = bathroomOptions[bathroomIndex].extra;
    const extras = startup ? 0.75 : 0;
    const multiplier = frequencyOptions[frequencyIndex].multiplier;
    const hours = Math.max(2, (base + bathrooms + extras) * multiplier);
    const roundedLow = Math.round(hours * 2) / 2;
    const roundedHigh = roundedLow + 0.5;
    const low = Math.round(roundedLow * internalHourlyRate);
    const high = Math.round(roundedHigh * internalHourlyRate);
    return { roundedLow, roundedHigh, low, high };
  }, [areaIndex, bathroomIndex, frequencyIndex, startup]);

  return (
    <div id="pris" className="bg-background p-6 md:p-8 rounded-sm ring-1 ring-black/5">
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
        Prispejlemærke
      </span>
      <h2 className="text-3xl font-serif font-medium mb-3">Få et ca.-billede</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        Estimatet er ikke en offentlig timepris. Endelig pris gives som individuel huspris.
      </p>

      <ButtonGroup label="Boligstørrelse">
        {areaOptions.map((option, index) => (
          <Choice key={option.label} active={areaIndex === index} onClick={() => setAreaIndex(index)}>
            {option.label}
          </Choice>
        ))}
      </ButtonGroup>

      <ButtonGroup label="Toiletter/badeværelser">
        {bathroomOptions.map((option, index) => (
          <Choice
            key={option.label}
            active={bathroomIndex === index}
            onClick={() => setBathroomIndex(index)}
          >
            {option.label}
          </Choice>
        ))}
      </ButtonGroup>

      <ButtonGroup label="Frekvens">
        {frequencyOptions.map((option, index) => (
          <Choice
            key={option.label}
            active={frequencyIndex === index}
            onClick={() => setFrequencyIndex(index)}
          >
            {option.label}
          </Choice>
        ))}
      </ButtonGroup>

      <label className="flex items-center gap-3 text-sm p-3 mb-8 rounded-sm ring-1 ring-black/5 bg-background cursor-pointer">
        <input
          type="checkbox"
          checked={startup}
          onChange={(event) => setStartup(event.target.checked)}
          className="size-4 accent-[var(--primary)]"
        />
        Grundig opstart første gang
      </label>

      <div className="bg-surface p-5 rounded-sm ring-1 ring-black/5">
        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">
          Ca. pr. besøg
        </div>
        <div className="text-3xl font-medium text-foreground mb-2">
          {estimate.low}-{estimate.high} kr. ekskl. moms
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          Ca. {estimate.roundedLow}-{estimate.roundedHigh} timers rengøring. Endelig pris gives
          som huspris efter konkret vurdering.
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

function ButtonGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <div className="text-sm font-medium mb-3">{label}</div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Choice({
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

function InfoBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-background p-5 rounded-sm ring-1 ring-black/5">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="bg-surface p-7 ring-1 ring-black/5 rounded-sm">
      <span className="text-sm font-serif italic text-accent mb-5 block">{number}</span>
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
