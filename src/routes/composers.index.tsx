import { createFileRoute } from "@tanstack/react-router";
import { composers } from "@/data/composers";
import { ComposerCard } from "@/components/ComposerCard";

export const Route = createFileRoute("/composers/")({
  head: () => ({
    meta: [
      { title: "作曲家名單 — 樂韻 Classica" },
      { name: "description", content: "瀏覽精選古典音樂作曲家,從巴洛克、古典、浪漫到印象樂派。" },
      { property: "og:title", content: "作曲家名單 — 樂韻 Classica" },
      { property: "og:description", content: "瀏覽精選古典音樂作曲家,從巴洛克、古典、浪漫到印象樂派。" },
    ],
  }),
  component: ComposersIndex,
});

function ComposersIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Composers
        </p>
        <h1 className="mt-3 font-serif text-5xl font-bold text-foreground">
          作曲家名單
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          點選下方任一位作曲家,深入了解他們的代表作、人氣作品與創作年代。
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {composers.map((c) => (
          <ComposerCard key={c.slug} composer={c} />
        ))}
      </div>
    </div>
  );
}
