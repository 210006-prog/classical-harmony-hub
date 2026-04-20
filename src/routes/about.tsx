import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "關於我們 — 樂韻 Classica" },
      { name: "description", content: "致力於推薦不同人來了解、欣賞古典音樂之美。" },
      { property: "og:title", content: "關於我們 — 樂韻 Classica" },
      { property: "og:description", content: "致力於推薦不同人來了解、欣賞古典音樂之美。" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
        About Us
      </p>
      <h1 className="mt-3 font-serif text-5xl font-bold text-foreground">
        關於我們
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          <span className="font-serif text-2xl text-primary">樂韻 Classica</span>{" "}
          是一個專為古典音樂愛好者打造的推薦平台。我們致力於推薦不同的朋友,
          一同走入古典音樂的廣闊世界,發現屬於自己的心動樂章。
        </p>
        <p>
          無論您是初次接觸古典樂的新朋友,或是已經沉浸其中多年的樂迷,
          這裡都為您準備了精選的作曲家介紹、代表作與人氣作品名單,
          並附上創作年代與背景脈絡,讓欣賞變得更有溫度。
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <FeatureCard
          title="精選作曲家"
          desc="橫跨巴洛克、古典、浪漫到印象樂派,認識最具代表性的作曲家。"
        />
        <FeatureCard
          title="作品名單"
          desc="每位作曲家皆有代表作與人氣作品列表,附上創作年代。"
        />
        <FeatureCard
          title="溫暖入門"
          desc="以淺顯的文字介紹,讓初次認識古典樂的您也能輕鬆走入。"
        />
      </div>

      <blockquote className="mt-16 border-l-4 border-accent bg-card/50 px-8 py-8">
        <p className="font-serif text-xl italic leading-relaxed text-foreground/90">
          「沒有音樂,生命將是個錯誤。」
        </p>
        <footer className="mt-3 text-sm text-muted-foreground">— 尼采</footer>
      </blockquote>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
      <h3 className="font-serif text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
