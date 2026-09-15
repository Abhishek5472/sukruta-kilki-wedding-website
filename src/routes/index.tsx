import { createFileRoute } from "@tanstack/react-router";
import { WeddingExperience } from "@/components/WeddingExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sukruta Weds Kilki — Jaipur Wedding Invitation" },
      { name: "description", content: "Join Sukruta and Kilki for their wedding celebration on 5 December 2026 in Jaipur, Rajasthan." },
      { property: "og:title", content: "Sukruta Weds Kilki — Jaipur Wedding Invitation" },
      { property: "og:description", content: "A cinematic invitation to celebrate Sukruta and Kilki in Jaipur on 5 December 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <WeddingExperience />;
}
