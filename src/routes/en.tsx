import { createFileRoute } from "@tanstack/react-router";

import heroInterior from "../assets/hero-interior.jpg";
import { HomePage } from "../components/marketing/HomePage";
import { homeContent } from "../content/homeContent";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: homeContent.en.meta.title },
      {
        name: "description",
        content: homeContent.en.meta.description,
      },
      { property: "og:title", content: homeContent.en.meta.ogTitle },
      {
        property: "og:description",
        content: homeContent.en.meta.ogDescription,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroInterior },
      { name: "twitter:image", content: heroInterior },
    ],
  }),
  component: EnglishHome,
});

function EnglishHome() {
  return <HomePage content={homeContent.en} />;
}
