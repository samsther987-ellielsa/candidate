import Link from "next/link";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import HeroVideo from "@/components/HeroVideo";
import {
  HomeModernIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAmericasIcon,
  MapPinIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  SunIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const STATS = [
  { value: "15년", label: "지역 봉사 경력" },
  { value: "12개", label: "완수한 지역 프로젝트" },
  { value: "47개", label: "구체적 공약" },
];

const POLICY_COLORS: Record<string, string> = {
  주거: "#1e3a5f",
  교육: "#0369a1",
  경제: "#92400e",
  환경: "#065f46",
};

const POLICIES: { icon: IconComponent; category: string; title: string; desc: string }[] = [
  { icon: HomeModernIcon,    category: "주거", title: "주거 안정",   desc: "공공임대 500세대 공급, 청년 임대료 월 20만원 지원" },
  { icon: BookOpenIcon,      category: "교육", title: "교육 혁신",   desc: "돌봄센터 5개소 신설, 방과후 프로그램 무상 확대" },
  { icon: BriefcaseIcon,     category: "경제", title: "일자리 창출", desc: "청년 창업 센터 설립, 지역 기업 채용 인센티브" },
  { icon: GlobeAmericasIcon, category: "환경", title: "환경 보호",   desc: "갯벌 생태 보전 특별구역, 도심 녹지 20% 확대" },
];

const GALLERY_PREVIEW: { label: string; gradient: string; Icon: IconComponent }[] = [
  { label: "지역 주민 간담회", gradient: "linear-gradient(135deg, #1e3a5f 0%, #2e6aa8 100%)", Icon: UserGroupIcon },
  { label: "청년 포럼 참석",   gradient: "linear-gradient(135deg, #065f46 0%, #0d9488 100%)", Icon: ChatBubbleLeftRightIcon },
  { label: "농촌 현장 방문",   gradient: "linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)", Icon: SunIcon },
  { label: "복지관 봉사활동",  gradient: "linear-gradient(135deg, #7c2d12 0%, #d97706 100%)", Icon: HeartIcon },
];

export default function HomePage() {
  return (
    <>
      {/* Hero 섹션 */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-4 py-24 text-center text-white overflow-hidden">
        {/* 배경 영상 */}
        <HeroVideo />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <MapPinIcon className="w-4 h-4 flex-shrink-0" />
            <span>충청남도 서산시 · 2026 지방선거</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-bold leading-tight md:text-7xl mb-6"
            style={{ fontFamily: "Noto Serif KR, serif" }}
          >
            서산의 내일을<br />함께 만들겠습니다
          </h1>

          <p className="text-base sm:text-xl leading-relaxed opacity-85 mb-10 max-w-xl mx-auto">
            15년간 서산 시민과 함께한 홍길동이<br className="sm:hidden" /> 더 나은 서산을 위해 나섭니다.
          </p>

          <ScrollButton />
        </div>
      </section>

      {/* 통계 바 */}
      <section style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="grid grid-cols-3 text-center text-white divide-x divide-white/20">
            {STATS.map((s) => (
              <div key={s.label} className="py-2 px-2">
                <p className="text-2xl font-bold sm:text-3xl md:text-4xl">{s.value}</p>
                <p className="mt-1 text-[11px] leading-tight opacity-70 sm:text-xs md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 후보자 소개 */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-shrink-0 w-56 h-64 rounded-3xl overflow-hidden shadow-lg relative">
            <Image
              src="/images/canditate2.jpg"
              alt="홍길동 후보자 사진"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-cta)" }}>
              About Candidate
            </p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              홍길동
            </h2>
            <p className="text-base sm:text-lg leading-8 mb-6" style={{ color: "var(--color-text-muted)" }}>
              서산에서 나고 자라며 15년간 지역 발전을 위해 헌신해온 홍길동입니다.<br />
              직접 겪어온 서산의 문제들을 누구보다 잘 알기에,<br className="sm:hidden" /> 실현 가능한 해결책을 제시합니다.
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
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-cta)" }}>
              Key Policy
            </p>
            <h2 className="text-3xl font-bold md:text-4xl" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              서산을 바꿀 4가지 약속
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--color-border)" }}>
            {POLICIES.map((p, index) => {
              const Icon = p.icon;
              const color = POLICY_COLORS[p.category] ?? "var(--color-primary)";
              return (
                <div
                  key={p.title}
                  className={`flex items-center gap-4 px-6 py-5 bg-white ${index !== 0 ? "border-t" : ""}`}
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span
                    className="hidden sm:flex flex-shrink-0 w-8 text-sm font-bold tabular-nums"
                    style={{ color: `${color}80` }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{p.category}</span>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-semibold mb-0.5" style={{ color: "var(--color-text)" }}>
                      {p.title}
                    </p>
                    <p className="text-xs sm:text-sm leading-5" style={{ color: "var(--color-text-muted)" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:text-4xl" style={{ fontFamily: "Noto Serif KR, serif" }}>
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
          {GALLERY_PREVIEW.map((item) => {
            const Icon = item.Icon;
            return (
              <Link
                key={item.label}
                href="/gallery"
                className="group relative aspect-square overflow-hidden rounded-2xl block"
                style={{ background: item.gradient }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
                <div className="absolute top-3 left-3 opacity-80 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-xs font-semibold md:text-sm leading-tight">{item.label}</p>
                </div>
              </Link>
            );
          })}
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
