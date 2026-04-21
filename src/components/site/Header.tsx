import { Link } from "@tanstack/react-router";
import { Bell, Heart, Menu, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-2xl font-extrabold tracking-tight text-primary">힐링타임</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary">
              마사지샵
            </Link>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              스웨디시
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              타이마사지
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              스포츠
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              건마·1인샵
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="hidden rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground sm:inline-flex"
            aria-label="알림"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground sm:inline-flex"
            aria-label="찜한 샵"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary sm:inline-flex"
          >
            <User className="h-4 w-4" />
            로그인
          </button>
          <button
            type="button"
            className="rounded-full p-2 text-foreground hover:bg-muted md:hidden"
            aria-label="메뉴"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
