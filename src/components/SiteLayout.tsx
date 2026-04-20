import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-primary">
            樂韻
          </span>
          <span className="text-sm text-muted-foreground tracking-widest">
            CLASSICA
          </span>
        </Link>
        <nav className="flex items-center gap-7 text-sm font-medium">
          <Link
            to="/"
            className="text-foreground/80 transition-colors hover:text-primary"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
          >
            首頁
          </Link>
          <Link
            to="/composers"
            className="text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            作曲家
          </Link>
          <Link
            to="/about"
            className="text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            關於我們
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-parchment/40">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="font-serif text-lg text-primary">樂韻 Classica</p>
        <p className="mt-2 text-sm text-muted-foreground">
          致力於推薦不同人來了解、欣賞古典音樂之美
        </p>
        <p className="mt-4 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Classica. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
