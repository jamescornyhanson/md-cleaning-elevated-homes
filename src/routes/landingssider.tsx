import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/landingssider")({
  head: () => ({
    meta: [
      { title: "Landingssider | MD Cleaning" },
      {
        name: "description",
        content: "Intern oversigt over MD Cleanings landingssider til Google Ads.",
      },
    ],
  }),
  component: Landingssider,
});

const landingPages = [
  {
    title: "Privat rengøring i Helsingør",
    area: "Helsingør, Snekkersten, Hellebæk og Ålsgårde",
    path: "/privat-rengoering-helsingoer",
  },
  {
    title: "Rengøringshjælp i Helsingør",
    area: "Helsingør og nærområde",
    path: "/rengoeringshjaelp-helsingoer",
  },
  {
    title: "Privat rengøring i Nordsjælland",
    area: "Udvalgte ruter i Nordsjælland",
    path: "/privat-rengoering-nordsjaelland",
  },
  {
    title: "Privat rengøring i Hornbæk",
    area: "Hornbæk og kystområdet",
    path: "/privat-rengoering-hornbaek",
  },
];

function Landingssider() {
  return (
    <section className="px-6 py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-6 block">
          Intern oversigt
        </span>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-6">
            Landingssider til Google Ads
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Brug denne side til at åbne og kontrollere kampagnesiderne. Siderne er ikke lagt i
            hovedmenuen, fordi de er målrettet annoncer og specifikke søgninger.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {landingPages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group block bg-surface p-7 rounded-sm ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
            >
              <h2 className="text-2xl font-serif font-medium mb-3">{page.title}</h2>
              <p className="text-sm text-muted-foreground mb-6">{page.area}</p>
              <span className="text-sm font-medium text-primary group-hover:underline">
                Åbn landingsside
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
