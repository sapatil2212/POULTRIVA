import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  beforeLoad: ({ search }) => {
    const s = search as Record<string, unknown> | undefined;
    if (s?.division === "cattle") {
      throw redirect({ to: "/cattle-products" });
    }
    throw redirect({ to: "/poultry-products" });
  },
  component: () => null,
});
