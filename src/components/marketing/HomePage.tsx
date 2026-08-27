import { Link } from "@tanstack/react-router";

import type { HomeContent } from "../../content/homeContent";
import heroInterior from "../../assets/hero-interior.jpg";

export function HomePage({ content }: { content: HomeContent }) {
  return (
    <>
      <section className="px-6 py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-12 items-center">
          <div className="max-w-2xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-5 block">
              {content.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-balance mb-7">
              {content.hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-pretty max-w-[58ch] text-muted-foreground mb-8">
              {content.hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-6 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                {content.hero.primaryCta}
              </Link>
              <Link
                to="/ydelser"
                className="inline-flex items-center justify-center ring-1 ring-primary/20 text-foreground py-3 px-6 rounded-sm text-sm font-medium hover:bg-surface transition-colors"
              >
                {content.hero.secondaryCta}
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              {content.hero.trustPoints.map((point) => (
                <TrustPoint key={point.title} title={point.title} text={point.text} />
              ))}
            </div>
          </div>

          <div>
            <img
              src={heroInterior}
              alt={content.hero.imageAlt}
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
              {content.intro.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-5">
              {content.intro.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">{content.intro.body}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.intro.infoBoxes.map((box) => (
                <InfoBox key={box.title} title={box.title} text={box.text} />
              ))}
            </div>
          </div>

          <div className="bg-background p-6 md:p-8 rounded-sm ring-1 ring-black/5">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
              {content.assessment.eyebrow}
            </span>
            <h2 className="text-3xl font-serif font-medium mb-3">{content.assessment.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {content.assessment.body}
            </p>

            <ol className="space-y-5 mb-8">
              {content.assessment.steps.map((step, index) => (
                <Step key={step} number={String(index + 1)} text={step} />
              ))}
            </ol>

            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground py-3 px-5 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              {content.assessment.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-serif font-medium leading-tight mb-4">
              {content.reasons.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{content.reasons.body}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.reasons.cards.map((card) => (
              <ServiceCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-medium mb-4">{content.finalCta.title}</h2>
          <p className="text-muted-foreground mb-10">{content.finalCta.body}</p>
          <Link
            to="/kontakt"
            className="inline-flex items-center bg-primary text-primary-foreground py-3 px-8 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            {content.finalCta.cta}
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
