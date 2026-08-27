export type HomeContent = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    trustPoints: Array<{ title: string; text: string }>;
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
    infoBoxes: Array<{ title: string; text: string }>;
  };
  assessment: {
    eyebrow: string;
    title: string;
    body: string;
    steps: Array<string>;
    cta: string;
  };
  reasons: {
    title: string;
    body: string;
    cards: Array<{ title: string; description: string }>;
  };
  finalCta: {
    title: string;
    body: string;
    cta: string;
  };
};

export const homeContent: Record<"da" | "en", HomeContent> = {
  da: {
    meta: {
      title: "MD Cleaning - Privat rengøring i Helsingør og Nordsjælland",
      description:
        "Privat rengøring i Helsingør og Nordsjælland. Vi tager personlig kontakt og ser hjemmet, før vi sender et tilbud.",
      ogTitle: "MD Cleaning - Privat rengøring i Helsingør",
      ogDescription:
        "Tryg privat rengøring til dit hjem. Vi lægger vægt på personlig kontakt, før vi sender et tilbud.",
    },
    hero: {
      eyebrow: "Privat rengøring i Helsingør og Nordsjælland",
      title: "Vi passer godt på dit hjem.",
      body:
        "Fast privat rengøring for dig, der ønsker et rent hjem, tydelige aftaler og mennesker, du kan føle dig tryg ved at lukke ind.",
      primaryCta: "Anmod om personligt møde",
      secondaryCta: "Se ydelser",
      imageAlt: "Lyst og roligt hjem med rene overflader",
      trustPoints: [
        { title: "Kvalitet først", text: "Vi tager kun opgaver, vi kan stå inde for" },
        { title: "Personlig kontakt", text: "Vi vil kende hjemmet, før vi giver tilbud" },
        { title: "Fast aftale", text: "Uge eller hver 14. dag" },
      ],
    },
    intro: {
      eyebrow: "Let at komme i gang",
      title: "En enkel løsning til et hjem, der skal fungere i hverdagen",
      body:
        "Vi starter med en praktisk vurdering af hjemmets størrelse, antal badeværelser og ønsket frekvens. Derefter tager vi personlig kontakt, så vi forstår hjemmet, hverdagen og forventningerne, før vi sender et tilbud.",
      infoBoxes: [
        { title: "Privat rengøring", text: "Køkken, bad, støv, gulve og faste opgaver." },
        { title: "Personligt møde", text: "Vi vil gerne se og forstå hjemmet først." },
        { title: "Tryg kontakt", text: "Du får en konkret dialog før tilbud." },
        { title: "Lokal rute", text: "Helsingør og opland med fokus på god ruteøkonomi." },
      ],
    },
    assessment: {
      eyebrow: "Din vurdering",
      title: "Sådan finder vi den rigtige løsning",
      body:
        "Hvert hjem er forskelligt. Derfor lægger vi vægt på personlig kontakt og et møde, før vi aftaler omfang og sender tilbud. Du får et forslag, der bygger på dit hjem, ikke en standardpakke.",
      steps: [
        "Du beskriver dit hjem og dine ønsker.",
        "Vi tager personlig kontakt og aftaler et møde eller en gennemgang.",
        "Først derefter sender vi et uforpligtende tilbud.",
      ],
      cta: "Anmod om vurdering",
    },
    reasons: {
      title: "Derfor vælger kunder MD Cleaning",
      body:
        "Sitet skal kunne bruges til Google Ads og lokale landingssider. Derfor holder vi budskabet enkelt: tryg privat rengøring, tydelig aftale og nem kontakt.",
      cards: [
        {
          title: "Rent hjem uden besvær",
          description:
            "Vi hjælper med de faste opgaver, der får hjemmet til at føles rent og overskueligt.",
        },
        {
          title: "Mennesker du kan stole på",
          description:
            "Privat rengøring handler om tillid. Vi lægger vægt på ordentlighed, stabilitet og god dialog.",
        },
        {
          title: "Aftale du kan forstå",
          description:
            "Du får en klar aftale om opgaver og frekvens efter personlig kontakt og forventningsafstemning.",
        },
      ],
    },
    finalCta: {
      title: "Klar til en vurdering af dit hjem?",
      body: "Fortæl os om dit hjem, så tager vi personlig kontakt og aftaler næste skridt.",
      cta: "Anmod om vurdering",
    },
  },
  en: {
    meta: {
      title: "MD Cleaning - Private home cleaning in Elsinore and North Zealand",
      description:
        "Private home cleaning in Elsinore and North Zealand. We make personal contact and understand the home before sending a quote.",
      ogTitle: "MD Cleaning - Private home cleaning in Elsinore",
      ogDescription:
        "Reliable private home cleaning. We value personal contact before sending a quote.",
    },
    hero: {
      eyebrow: "Private home cleaning in Elsinore and North Zealand",
      title: "We take good care of your home.",
      body:
        "Regular private home cleaning for people who want a clean home, clear agreements and people they can feel safe welcoming inside.",
      primaryCta: "Request a personal meeting",
      secondaryCta: "See services",
      imageAlt: "Bright and calm home with clean surfaces",
      trustPoints: [
        { title: "Quality first", text: "We only accept work we can stand behind" },
        { title: "Personal contact", text: "We want to know the home before quoting" },
        { title: "Regular agreement", text: "Weekly or every two weeks" },
      ],
    },
    intro: {
      eyebrow: "Easy to get started",
      title: "A simple solution for a home that needs to work in everyday life",
      body:
        "We begin with a practical understanding of the size of the home, number of bathrooms and preferred frequency. Then we make personal contact, so we understand the home, daily routines and expectations before sending a quote.",
      infoBoxes: [
        { title: "Private home cleaning", text: "Kitchen, bathrooms, dusting, floors and regular tasks." },
        { title: "Personal meeting", text: "We prefer to see and understand the home first." },
        { title: "Clear contact", text: "You get a concrete dialogue before any quote." },
        { title: "Local route", text: "Elsinore and nearby areas with focus on efficient local routes." },
      ],
    },
    assessment: {
      eyebrow: "Your assessment",
      title: "How we find the right solution",
      body:
        "Every home is different. That is why we focus on personal contact and a meeting before agreeing on scope and sending a quote. You receive a proposal based on your home, not a standard package.",
      steps: [
        "You describe your home and your wishes.",
        "We contact you personally and agree on a meeting or walkthrough.",
        "Only then do we send a non-binding quote.",
      ],
      cta: "Request an assessment",
    },
    reasons: {
      title: "Why customers choose MD Cleaning",
      body:
        "The website must work for Google Ads and local landing pages. That is why the message is simple: safe private home cleaning, a clear agreement and easy contact.",
      cards: [
        {
          title: "A clean home without the hassle",
          description:
            "We help with the regular tasks that make the home feel clean, calm and manageable.",
        },
        {
          title: "People you can trust",
          description:
            "Private home cleaning is about trust. We focus on decency, stability and good dialogue.",
        },
        {
          title: "An agreement you understand",
          description:
            "You get a clear agreement about tasks and frequency after personal contact and alignment of expectations.",
        },
      ],
    },
    finalCta: {
      title: "Ready for an assessment of your home?",
      body: "Tell us about your home, and we will contact you personally to agree on the next step.",
      cta: "Request an assessment",
    },
  },
};
