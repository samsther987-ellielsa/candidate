import Link from "next/link";

const SNS_LINKS = [
  {
    label: "인스타그램",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "유튜브",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "페이스북",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "카카오톡",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.742 1.563 5.15 3.938 6.613-.173.63-.625 2.272-.717 2.623-.11.432.159.426.335.31.138-.092 2.19-1.482 3.077-2.085.437.062.885.094 1.367.094 5.523 0 10-3.477 10-7.755C20 6.477 17.523 3 12 3z" />
      </svg>
    ),
  },
  {
    label: "블로그",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-16"
      style={{ backgroundColor: "var(--color-primary-dark)", borderColor: "var(--color-primary)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* 후보자 정보 + SNS */}
          <div className="md:col-span-1">
            <p className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Noto Serif KR, serif" }}>
              홍길동 후보
            </p>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              충청남도 서산시
            </p>
            {/* SNS 버튼 */}
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              공식 SNS
            </p>
            <div className="flex flex-wrap gap-2">
              {SNS_LINKS.map((sns) => (
                <a
                  key={sns.label}
                  href={sns.href}
                  aria-label={sns.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl transition-all hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
                  title={sns.label}
                >
                  {sns.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">바로가기</p>
            <ul className="space-y-2.5">
              {[
                { label: "후보자 소개", href: "/about" },
                { label: "공약", href: "/policy" },
                { label: "응원 한마디", href: "/participate" },
                { label: "유권자 안내", href: "/voter-guide" },
                { label: "연락처", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">연락처</p>
            <address className="not-italic space-y-2">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>충청남도 서산시 선거사무소</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Tel: 041-000-0000</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Email: contact@candidate.kr</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>운영: 평일 09:00 ~ 18:00</p>
            </address>
          </div>

          {/* 응원하기 CTA */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white mb-1">응원해 주세요</p>
            <Link
              href="/participate"
              className="flex items-center justify-center min-h-[44px] rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--color-cta)" }}
            >
              응원 한마디 남기기 ❤️
            </Link>
            <Link
              href="/participate"
              className="flex items-center justify-center min-h-[44px] rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              자원봉사 신청
            </Link>
          </div>
        </div>

        <div
          className="mt-10 border-t pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 홍길동 후보 선거사무소. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-xs underline transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
