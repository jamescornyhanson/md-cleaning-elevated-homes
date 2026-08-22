import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & tilbud — MD Cleaning" },
      {
        name: "description",
        content:
          "Anmod om et uforpligtende tilbud fra MD Cleaning. Udfyld formularen med adresse, boligtype og ønsket frekvens — vi vender tilbage inden for 24-48 timer.",
      },
      { property: "og:title", content: "Kontakt & tilbud — MD Cleaning" },
      {
        property: "og:description",
        content:
          "Anmod om et uforpligtende tilbud fra MD Cleaning. Udfyld formularen med adresse, boligtype og ønsket frekvens — vi vender tilbage inden for 24-48 timer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    housingType: "",
    frequency: "ugentlig",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-6 block">
            Kontakt
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance mb-8 max-w-3xl">
            Anmod om et besøg
          </h1>
          <p className="text-lg leading-relaxed text-pretty max-w-[56ch] text-muted-foreground">
            Fortæl os om dit hjem og dine ønsker. Vi vender tilbage inden for 24-48 timer med en
            indledende vurdering.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-surface ring-1 ring-black/5">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-6">
                <svg
                  className="size-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-medium mb-4">Tak for din forespørgsel</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Vi har modtaget dine oplysninger og vender tilbage inden for 24-48 timer.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground ml-1"
                >
                  Navn
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background/50 ring-1 ring-black/5 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-accent/40"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground ml-1"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background/50 ring-1 ring-black/5 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-accent/40"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground ml-1"
                >
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-background/50 ring-1 ring-black/5 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-accent/40"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="housingType"
                  className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground ml-1"
                >
                  Boligtype
                </label>
                <input
                  id="housingType"
                  name="housingType"
                  type="text"
                  placeholder="F.eks. villa, rækkehus, lejlighed"
                  value={formData.housingType}
                  onChange={handleChange}
                  className="w-full bg-background/50 ring-1 ring-black/5 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-accent/40"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="address"
                  className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground ml-1"
                >
                  Adresse
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="F.eks. Strandvejen 12, 3100 Hornbæk"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-background/50 ring-1 ring-black/5 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-accent/40"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="frequency"
                  className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground ml-1"
                >
                  Ønsket frekvens
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="w-full bg-background/50 ring-1 ring-black/5 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-accent/40 appearance-none"
                >
                  <option value="ugentlig">Ugentlig</option>
                  <option value="14-dage">Hver 14. dag</option>
                  <option value="engang">Engangsopgave</option>
                  <option value="opstart">Opstartsrengøring</option>
                  <option value="usikker">Usikker — hjælp mig videre</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground ml-1"
                >
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Fortæl kort om dit hjem og dine ønsker..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background/50 ring-1 ring-black/5 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-accent/40 resize-none"
                />
              </div>

              <div className="md:col-span-2 flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-foreground text-background py-3 px-12 rounded-sm text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  Send forespørgsel
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Contact info */}
      <section className="py-24 px-6 bg-warm ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Område</h3>
            <p className="font-medium">Nordsjælland inden for 40 min. fra Helsingør</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">CVR</h3>
            <p className="font-medium">37487295</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">SE-nr.</h3>
            <p className="font-medium">45571157</p>
          </div>
        </div>
      </section>
    </>
  );
}
