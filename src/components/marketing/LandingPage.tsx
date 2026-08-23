import { Link } from "@tanstack/react-router";
import { useState } from "react";
import heroInterior from "../../assets/hero-interior.jpg";

type LandingPageProps = {
  areaLabel: string;
  headline: string;
  intro: string;
  proofText: string;
  localAreas: string[];
};

const areaOptions = [
  "Op til 80 m²",
  "80-120 m²",
  "120-160 m²",
  "160-220 m²",
  "220+ m²",
];

const bathroomOptions = [
  "1 toilet/bad",
  "2 toiletter/bade",
  "3+ toiletter/bade",
];

const frequencyOptions = [
  "Hver uge",
  "Hver 14. dag",
];

const priorityOptions = [
  "Stabil fast hjælp",
  "Grundig rengøring",
  "Tryg person i hjemmet",
  "Let hverdag",
];

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
                href="#vurdering"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Få vurderet dit hjem
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

          <NeedAssessment />
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-serif font-medium leading-tight mb-4">
              Sådan kommer du videre
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Brug vurderingen som første skridt. Derefter kontakter vi dig med en konkret
              vurdering af hjemmet og et forslag til fast aftale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Step number="01" title="Fortæl om hjemmet" text="Vælg størrelse, badeværelser og frekvens." />
            <Step number="02" title="Send forespørgsel" text="Fortæl kort om hjemmet og dine ønsker." />
            <Step number="03" title="Få konkret forslag" text="Vi vurderer opgaven og vender tilbage med næste skridt." />
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

function NeedAssessment() {
  const [areaIndex, setAreaIndex] = useState(1);
  const [bathroomIndex, setBathroomIndex] = useState(1);
  const [frequencyIndex, setFrequencyIndex] = useState(0);
  const [startup, setStartup] = useState(false);
  const [priorityIndex, setPriorityIndex] = useState(0);

  return (
    <div id="vurdering" className="bg-background p-6 md:p-8 rounded-sm ring-1 ring-black/5">
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
        Behovsvurdering
      </span>
      <h2 className="text-3xl font-serif font-medium mb-3">Find den rigtige aftale</h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        Svarene hjælper os med at vurdere opgaven, så vi kan vende tilbage med en individuel
        huspris og en aftale, der passer til hjemmet.
      </p>

      <ButtonGroup label="Boligstørrelse">
        {areaOptions.map((option, index) => (
          <Choice key={option} active={areaIndex === index} onClick={() => setAreaIndex(index)}>
            {option}
          </Choice>
        ))}
      </ButtonGroup>

      <ButtonGroup label="Toiletter/badeværelser">
        {bathroomOptions.map((option, index) => (
          <Choice
            key={option}
            active={bathroomIndex === index}
            onClick={() => setBathroomIndex(index)}
          >
            {option}
          </Choice>
        ))}
      </ButtonGroup>

      <ButtonGroup label="Frekvens">
        {frequencyOptions.map((option, index) => (
          <Choice
            key={option}
            active={frequencyIndex === index}
            onClick={() => setFrequencyIndex(index)}
          >
            {option}
          </Choice>
        ))}
      </ButtonGroup>

      <ButtonGroup label="Vigtigst for dig">
        {priorityOptions.map((option, index) => (
          <Choice
            key={option}
            active={priorityIndex === index}
            onClick={() => setPriorityIndex(index)}
          >
            {option}
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
          Foreløbig vurdering
        </div>
        <div className="text-2xl font-serif font-medium text-foreground mb-3">
          Fast rengøring {frequencyOptions[frequencyIndex].toLowerCase()}
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          Et hjem på {areaOptions[areaIndex].toLowerCase()} med {bathroomOptions[
            bathroomIndex
          ].toLowerCase()} vurderes bedst med en konkret gennemgang, hvor vi også tager højde
          for stand, adgang og særlige ønsker.
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
