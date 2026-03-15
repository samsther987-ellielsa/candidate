"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "소개", href: "/about" },
  { label: "공약", href: "/policy" },
  { label: "갤러리", href: "/gallery" },
  { label: "투표 안내", href: "/voter-guide" },
  { label: "연락처", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{ backgroundColor: "var(--color-primary)", borderColor: "var(--color-primary-dark)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* 로고 */}
        <Link
          href="/"
          className="text-lg font-bold text-white shrink-0"
          style={{ fontFamily: "Noto Serif KR, serif" }}
        >
          홍길동 후보
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]) && item.href !== "/about#gallery");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/participate"
            className="ml-3 rounded-lg px-5 py-2 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "var(--color-cta)" }}
          >
            응원하기 ❤️
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="flex md:hidden items-center justify-center w-11 h-11 rounded-md text-white hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <nav
          className="md:hidden border-t px-4 py-3 flex flex-col gap-2"
          style={{ backgroundColor: "var(--color-primary-dark)", borderColor: "var(--color-primary)" }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center min-h-[48px] px-4 py-3 rounded-md text-base font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/participate"
            onClick={() => setMenuOpen(false)}
            className="mt-1 flex items-center justify-center min-h-[52px] rounded-xl px-4 py-3 text-base font-bold text-white"
            style={{ backgroundColor: "var(--color-cta)" }}
          >
            응원하기 ❤️
          </Link>
        </nav>
      )}
    </header>
  );
}
