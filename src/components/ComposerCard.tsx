import { Link } from "@tanstack/react-router";
import type { Composer } from "@/data/composers";

export function ComposerCard({ composer }: { composer: Composer }) {
  return (
    <Link
      to="/composers/$slug"
      params={{ slug: composer.slug }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent hover:shadow-warm"
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/40 bg-gradient-to-br from-parchment to-secondary font-serif text-xl font-bold text-primary">
          {composer.portrait}
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">
            {composer.era}
          </p>
          <p className="text-xs text-muted-foreground">
            {composer.born} – {composer.died}
          </p>
        </div>
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
        {composer.name}
      </h3>
      <p className="mt-1 font-serif text-sm italic text-muted-foreground">
        {composer.nameEn}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/75">
        {composer.tagline}
      </p>
      <div className="mt-6 flex items-center text-sm font-medium text-primary">
        瀏覽作品
        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
