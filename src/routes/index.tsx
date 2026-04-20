import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-classical.jpg";
import { composers } from "@/data/composers";
import { ComposerCard } from "@/components/ComposerCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "樂韻 Classica — 歡迎來到古典音樂推薦網站" },
      { name: "description", content: "走入古典音樂的世界,從巴赫到德布西,聆聽跨越世紀的不朽樂章。" },
      { property: "og:title", content: "樂韻 Classica — 歡迎來到古典音樂推薦網站" },
      { property: "og:description", content: "走入古典音樂的世界,從巴赫到德布西,聆聽跨越世紀的不朽樂章。" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = composers.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="古典鋼琴與小提琴"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center md:py-44">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Classical Music · Curated
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
            歡迎來到
            <br />
            <span className="text-primary">古典音樂推薦網站</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
            從巴洛克的莊嚴到浪漫派的熱情,精選最動人的作曲家與作品,
            <br className="hidden md:inline" />
            邀請您一同走進音樂的時光長廊。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/composers"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-warm transition-all hover:scale-105 hover:bg-primary/90"
            >
              探索作曲家
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-background/60 px-7 py-3 text-sm font-medium text-primary backdrop-blur transition-colors hover:bg-primary/10"
            >
              關於我們
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Featured Composers
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground">
            精選作曲家
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            點選作曲家,進入他們的世界,認識代表作與人氣作品。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <ComposerCard key={c.slug} composer={c} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/composers"
            className="inline-flex items-center gap-2 font-serif text-lg text-primary underline-offset-4 hover:underline"
          >
            查看全部作曲家 →
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <blockquote className="border-l-4 border-accent bg-card/50 px-8 py-10 text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-foreground/90">
            「音樂能喚起或撫慰情感,描繪事件,
            <br />
            它無處不在,無所不能。」
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">
            — 路德維希・范・貝多芬
          </footer>
        </blockquote>
      </section>
    </div>
  );
}
