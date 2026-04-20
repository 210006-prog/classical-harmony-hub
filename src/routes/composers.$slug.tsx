import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getComposer, type Composer } from "@/data/composers";

export const Route = createFileRoute("/composers/$slug")({
  loader: ({ params }): { composer: Composer } => {
    const composer = getComposer(params.slug);
    if (!composer) throw notFound();
    return { composer };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.composer.name} — 樂韻 Classica` },
          { name: "description", content: loaderData.composer.tagline },
          { property: "og:title", content: `${loaderData.composer.name} — 樂韻 Classica` },
          { property: "og:description", content: loaderData.composer.tagline },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl text-primary">找不到這位作曲家</h1>
      <Link to="/composers" className="mt-6 inline-block text-primary underline">
        返回作曲家列表
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl text-destructive">發生錯誤</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ComposerDetail,
});

function ComposerDetail() {
  const { composer } = Route.useLoaderData() as { composer: Composer };
  type W = Composer["works"][number];
  const masterpieces = composer.works.filter((w: W) => w.type === "代表作");
  const popular = composer.works.filter((w: W) => w.type === "人氣作品");

  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      <Link
        to="/composers"
        className="text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        ← 返回作曲家列表
      </Link>

      {/* Header */}
      <header className="mt-8 border-b border-border pb-10">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-4 border-accent/40 bg-gradient-to-br from-parchment to-secondary font-serif text-3xl font-bold text-primary shadow-warm">
            {composer.portrait}
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {composer.era} · {composer.nationality}
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
              {composer.name}
            </h1>
            <p className="mt-2 font-serif text-xl italic text-muted-foreground">
              {composer.nameEn}
            </p>
            <p className="mt-3 text-sm text-foreground/70">
              {composer.born} — {composer.died}
            </p>
          </div>
        </div>
        <p className="mt-8 font-serif text-xl italic leading-relaxed text-primary">
          「{composer.tagline}」
        </p>
        <p className="mt-4 leading-relaxed text-foreground/85">{composer.bio}</p>
      </header>

      {/* Masterpieces */}
      <section className="mt-12">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="font-serif text-3xl font-bold text-foreground">代表作</h2>
          <span className="text-sm text-muted-foreground">
            Masterpieces · {masterpieces.length} 首
          </span>
        </div>
        <ul className="space-y-4">
          {masterpieces.map((w: Composer["works"][number]) => (
            <WorkItem key={w.title} title={w.title} year={w.year} description={w.description} accent />
          ))}
        </ul>
      </section>

      {/* Popular */}
      <section className="mt-12">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="font-serif text-3xl font-bold text-foreground">人氣作品</h2>
          <span className="text-sm text-muted-foreground">
            Popular · {popular.length} 首
          </span>
        </div>
        <ul className="space-y-4">
          {popular.map((w: Composer["works"][number]) => (
            <WorkItem key={w.title} title={w.title} year={w.year} description={w.description} />
          ))}
        </ul>
      </section>
    </article>
  );
}

function WorkItem({
  title,
  year,
  description,
  accent = false,
}: {
  title: string;
  year: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <li
      className={`group rounded-lg border bg-card p-6 shadow-soft transition-all hover:shadow-warm ${
        accent ? "border-l-4 border-l-accent border-y-border border-r-border" : "border-border"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-serif text-xl font-semibold text-foreground">
          {title}
        </h3>
        <span className="font-serif text-sm tracking-wider text-accent">
          {year}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground/75">{description}</p>
    </li>
  );
}
