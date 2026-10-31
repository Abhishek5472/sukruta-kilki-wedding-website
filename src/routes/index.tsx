import { createFileRoute } from "@tanstack/react-router";
import { WeddingExperience } from "@/components/WeddingExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sukruta Weds Kilki — Jaipur Wedding Invitation" },
      {
        name: "description",
        content:
          "A cinematic invitation to celebrate Sukruta and Kilki in Jaipur on 5 December 2026.",
      },
      { name: "author", content: "Sukruta Weds Kilki" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Sukruta Weds Kilki — Jaipur Wedding Invitation" },
      {
        property: "og:description",
        content:
          "A cinematic invitation to celebrate Sukruta and Kilki in Jaipur on 5 December 2026.",
      },
      {
        property: "og:url",
        content: "https://sukruta-kilki-wedding-website.kulkarniabhishek24j.workers.dev/",
      },
      {
        property: "og:image",
        content:
          "https://sukruta-kilki-wedding-website.kulkarniabhishek24j.workers.dev/wedding-preview.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sukruta Weds Kilki — Jaipur Wedding Invitation" },
      {
        name: "twitter:description",
        content:
          "A cinematic invitation to celebrate Sukruta and Kilki in Jaipur on 5 December 2026.",
      },
      {
        name: "twitter:image",
        content:
          "https://sukruta-kilki-wedding-website.kulkarniabhishek24j.workers.dev/wedding-preview.png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <WeddingExperience />;
}
