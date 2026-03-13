import Link from "next/link";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";

const STATS = [
  { value: "15년", label: "지역 봉사 경력" },
  { value: "3,200+", label: "서명한 시민" },
  { value: "47개", label: "구체적 공약" },
];

const POLICIES = [
  { icon: "🏘️", title: "주거 안정", desc: "공공임대 500세대 공급\n청년 임대료 월 20만원 지원" },
  { icon: "📚", title: "교육 혁신", desc: "돌봄센터 5개소 신설\n방과후 프로그램 무상 확대" },
  { icon: "💼", title: "일자리 창출", desc: "청년 창업 센터 설립\n지역 기업 채용 인센티브" },
  { icon: "🌿", title: "환경 보호", desc: "갯벌 생태 보전 특별구역\n도심 녹지 20% 확대" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero 섹션 */}
      <section
        className="relative flex min-h-[92vh] flex-col items-center justify-center px-4 py-24 text-center text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 55%, var(--color-primary-light) 100%)" }}
      >
        {/* 배경 장식 원 */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "white" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: "white" }} />

        <div className="relative z-10 max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <span>📍</span>
            <span>충청남도 서산시 · 2026 지방선거</span>
          </div>

          <h1
            className="text-5xl font-bold leading-tight md:text-7xl mb-6"
            style={{ fontFamily: "Noto Serif KR, serif" }}
          >
            서산의 내일을<br />함께 만들겠습니다
          </h1>

          <p className="text-xl leading-relaxed opacity-85 mb-10 max-w-xl mx-auto">
            15년간 서산 시민과 함께한 홍길동이<br />
            더 나은 서산을 위해 나섭니다.
          </p>

          <ScrollButton />
        </div>
      </section>

      {/* 통계 바 */}
      <section style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="grid grid-cols-3 gap-4 text-center text-white divide-x divide-white/20">
            {STATS.map((s) => (
              <div key={s.label} className="py-2">
                <p className="text-3xl font-bold md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs opacity-70 md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 후보자 소개 */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-shrink-0 w-56 h-64 md:w-64 md:h-80 rounded-3xl overflow-hidden shadow-lg relative">
            <Image
              src="/images/canditate2.jpg"
              alt="홍길동 후보자 사진"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-cta)" }}>
              About Candidate
            </p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              홍길동
            </h2>
            <p className="text-lg leading-8 mb-6" style={{ color: "var(--color-text-muted)" }}>
              서산에서 나고 자라며 15년간 지역 발전을 위해 헌신해온 홍길동입니다.
              직접 겪어온 서산의 문제들을 누구보다 잘 알기에,
              실현 가능한 해결책을 제시합니다.
            </p>
            <Link
              href="/about"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              자세히 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 핵심 공약 */}
      <section id="policy" style={{ backgroundColor: "var(--color-bg-subtle)" }} className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-cta)" }}>
              Key Policy
            </p>
            <h2 className="text-3xl font-bold md:text-4xl" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              서산을 바꿀 4가지 약속
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {POLICIES.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl bg-white p-7 border transition-all duration-200 hover:shadow-xl hover:-translate-y-2 cursor-default"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: "var(--color-bg-subtle)" }}
                >
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-primary)" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-7 whitespace-pre-line" style={{ color: "var(--color-text-muted)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/policy"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border-2 px-8 py-3 text-base font-bold transition-all hover:shadow-md"
              style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
            >
              전체 공약 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 참여 CTA */}
      <section
        className="py-24 text-center text-white"
        style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)" }}
      >
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl" style={{ fontFamily: "Noto Serif KR, serif" }}>
            변화는 함께 만드는 것입니다
          </h2>
          <p className="text-lg mb-10 opacity-80">
            후원, 자원봉사, 뉴스레터 구독으로<br className="md:hidden" /> 서산의 변화에 함께해 주세요.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/participate"
              className="flex min-h-[56px] items-center justify-center rounded-xl px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-cta)" }}
            >
              지금 참여하기
            </Link>
            <Link
              href="/contact"
              className="flex min-h-[56px] items-center justify-center rounded-xl border-2 border-white/60 px-10 py-4 text-lg font-semibold transition-all hover:border-white hover:bg-white/10"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* 갤러리 프리뷰 */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-cta)" }}>
            Gallery
          </p>
          <h2 className="text-3xl font-bold md:text-4xl" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
            현장에서 함께했습니다
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            { label: "지역 주민 간담회", gradient: "linear-gradient(135deg, #1e3a5f 0%, #2e6aa8 100%)", icon: "🤝" },
            { label: "청년 포럼 참석",   gradient: "linear-gradient(135deg, #065f46 0%, #0d9488 100%)", icon: "💬" },
            { label: "농촌 현장 방문",   gradient: "linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)", icon: "🌾" },
            { label: "복지관 봉사활동",  gradient: "linear-gradient(135deg, #7c2d12 0%, #d97706 100%)", icon: "❤️" },
          ].map((item) => (
            <Link
              key={item.label}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-2xl block"
              style={{ background: item.gradient }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
              <div className="absolute top-3 left-3 text-2xl md:text-3xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-xs font-semibold md:text-sm leading-tight">{item.label}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border-2 px-8 py-3 text-base font-bold transition-all hover:shadow-md"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
          >
            전체 갤러리 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
