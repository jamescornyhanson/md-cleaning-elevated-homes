import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Side ikke fundet</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Siden du leder efter findes ikke eller er blevet flyttet.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Gå til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Siden kunne ikke indlæses
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Der opstod en fejl. Prøv at genindlæse siden eller gå til forsiden.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Prøv igen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Gå til forsiden
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MD Cleaning — Privatrengøring i Nordsjælland" },
      {
        name: "description",
        content:
          "Privat rengøring i Helsingør og Nordsjælland. Få en personlig vurdering og et uforpligtende tilbud fra MD Cleaning.",
      },
      { property: "og:title", content: "MD Cleaning — Privatrengøring i Nordsjælland" },
      {
        property: "og:description",
        content:
          "Privat rengøring i Helsingør og Nordsjælland. Få en personlig vurdering og et uforpligtende tilbud fra MD Cleaning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Sans:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function Logo() {
  return (
    <Link to="/" className="group flex flex-col leading-none text-primary">
      <span className="text-xl font-semibold tracking-tight">MD Cleaning</span>
      <span className="mt-1 h-0.5 w-full rounded-full bg-primary transition-transform group-hover:scale-x-95" />
    </Link>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-foreground" }}
      className="text-sm font-medium tracking-wide uppercase text-muted-foreground transition-transform hover:text-foreground hover:translate-y-px"
    >
      {children}
    </Link>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md ring-1 ring-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/">Forside</NavLink>
          <NavLink to="/ydelser">Ydelser</NavLink>
          <NavLink to="/saadan-fungerer-det">Sådan fungerer det</NavLink>
          <NavLink to="/om-os">Om os</NavLink>
          <Link
            to="/kontakt"
            className="px-4 py-2 ring-1 ring-foreground/10 rounded-full text-sm font-medium tracking-wide uppercase text-foreground hover:bg-foreground hover:text-background transition-all"
          >
            Få tilbud
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label={mobileOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 bg-background px-6 py-6">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground"
            >
              Forside
            </Link>
            <Link
              to="/ydelser"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground"
            >
              Ydelser
            </Link>
            <Link
              to="/saadan-fungerer-det"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground"
            >
              Sådan fungerer det
            </Link>
            <Link
              to="/om-os"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground"
            >
              Om os
            </Link>
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium tracking-wide uppercase text-foreground"
            >
              Anmod om tilbud
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-black/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 opacity-60">
          <span className="text-sm font-semibold text-primary">MD Cleaning</span>
        </div>

        <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground text-center">
          CVR 37487295 &bull; SE 45571157 &bull; Helsingør, Nordsjælland
        </div>

        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} MD Cleaning. Alle rettigheder forbeholdes.
        </div>
      </div>
    </footer>
  );
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="da">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-accent/10">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
