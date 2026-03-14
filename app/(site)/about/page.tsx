import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HomeModernIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

const CATEGORY_COLORS: Record<string, string> = {
  주거: "#1e3a5f",
  교육: "#0369a1",
  경제: "#92400e",
  환경: "#065f46",
};

export const metadata: Metadata = {
  title: "후보자 소개 | 홍길동",
  description: "홍길동 후보의 이력, 공약, 활동 갤러리를 확인하세요.",
};

const CAREER = [
  { year: "2010", title: "서산시 주민자치위원회 위원", desc: "지역 주민 의견 수렴 및 자치 활동 참여" },
  { year: "2014", title: "충청남도 청년정책 자문위원", desc: "충남 청년 일자리·주거 정책 기획 참여" },
  { year: "2018", title: "서산시 지역발전협의회 의장", desc: "지역 현안 해결을 위한 민관 협력 주도" },
  { year: "2022", title: "사회복지법인 서산희망재단 이사", desc: "취약계층 지원 및 복지 인프라 확충 활동" },
  { year: "2026", title: "서산시 선거 출마", desc: "서산 시민과 함께 더 나은 내일을 만들기 위해" },
];

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const KEY_POLICIES: { icon: IconComponent; category: string; title: string; desc: string }[] = [
  { icon: HomeModernIcon,    category: "주거", title: "주거 안정", desc: "공공임대주택 500세대 공급, 청년 임대료 월 20만원 지원" },
  { icon: BookOpenIcon,      category: "교육", title: "교육 혁신", desc: "공립 돌봄센터 5개소 신설, 방과후 프로그램 무상 확대" },
  { icon: BriefcaseIcon,     category: "경제", title: "일자리 창출", desc: "청년 창업 센터 설립, 지역 기업 채용 인센티브 강화" },
  { icon: GlobeAmericasIcon, category: "환경", title: "환경 보호", desc: "서산 갯벌 생태 보전 특별구역 지정, 녹지 20% 확대" },
];

export default function AboutPage() {
  return (
    <>
      {/* 페이지 헤더 */}
      <section
        className="py-20 text-center text-white"
        style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest opacity-70 mb-3">About Candidate</p>
        <h1 className="text-4xl font-bold md:text-5xl" style={{ fontFamily: "Noto Serif KR, serif" }}>
          후보자 소개
        </h1>
      </section>

      {/* 프로필 섹션 */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          {/* 사진 플레이스홀더 */}
          <div className="flex-shrink-0">
            <div className="w-60 h-72 md:w-72 md:h-88 rounded-3xl overflow-hidden shadow-xl relative">
              <Image
                src="/images/candidate.jpg"
                alt="홍길동 후보자 사진"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* 뱃지 */}
            <div
              className="mt-4 rounded-2xl px-4 py-3 text-center text-white text-sm font-semibold"
              style={{ backgroundColor: "var(--color-cta)" }}
            >
              기호 ○번 홍길동
            </div>
          </div>

          {/* 정보 */}
          <div className="flex-1">
            <h2
              className="text-4xl font-bold mb-1"
              style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}
            >
              홍길동
            </h2>
            <p className="text-lg mb-6" style={{ color: "var(--color-text-muted)" }}>
              충청남도 서산시 선거 후보
            </p>

            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8 p-6 rounded-2xl" style={{ backgroundColor: "var(--color-bg-subtle)" }}>
              {[
                { label: "출생", value: "1975년, 충청남도 서산시" },
                { label: "학력", value: "서산고 · 충남대학교 행정학과" },
                { label: "주요 경력", value: "지역발전협의회 의장 역임" },
                { label: "연락처", value: "041-000-0000" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-cta)" }}>
                    {item.label}
                  </dt>
                  <dd className="text-base font-medium" style={{ color: "var(--color-text)" }}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <blockquote
              className="border-l-4 pl-5 py-1"
              style={{ borderColor: "var(--color-primary)" }}
            >
              <p className="text-base leading-8 italic" style={{ color: "var(--color-text-muted)" }}>
                "저는 서산에서 나고 자랐습니다. 어릴 적 골목길에서 뛰놀던 기억, 부모님이 농사를 지으시며 힘드셨던 모습,
                청년 시절 일자리를 찾아 서산을 떠났던 친구들의 얼굴이 지금도 선명합니다.
                그 기억이 저를 이 자리에 서게 만들었습니다."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 경력 타임라인 */}
      <section style={{ backgroundColor: "var(--color-bg-subtle)" }} className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-cta)" }}>Career</p>
            <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              주요 경력
            </h2>
          </div>
          <ol className="relative">
            {/* 세로선 */}
            <div
              className="absolute left-[19px] top-2 bottom-2 w-0.5"
              style={{ backgroundColor: "var(--color-border)" }}
            />
            {CAREER.map((item, i) => (
              <li key={item.year} className="relative flex gap-6 pb-8 last:pb-0">
                {/* 도트 */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold z-10"
                  style={{ backgroundColor: i === CAREER.length - 1 ? "var(--color-cta)" : "var(--color-primary)" }}
                >
                  {item.year.slice(2)}
                </div>
                <div className="pt-1.5">
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--color-text-muted)" }}>
                    {item.year}
                  </p>
                  <p className="text-base font-bold mb-1" style={{ color: "var(--color-text)" }}>
                    {item.title}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 핵심 공약 */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-cta)" }}>Policy</p>
          <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
            핵심 공약
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--color-border)" }}>
          {KEY_POLICIES.map((p, index) => {
            const Icon = p.icon;
            const color = CATEGORY_COLORS[p.category] ?? "var(--color-primary)";
            return (
              <div
                key={p.title}
                className={`flex items-center gap-4 px-6 py-5 bg-white ${index !== 0 ? "border-t" : ""}`}
                style={{ borderColor: "var(--color-border)" }}
              >
                {/* 번호 */}
                <span
                  className="hidden sm:flex flex-shrink-0 w-8 text-sm font-bold tabular-nums"
                  style={{ color: `${color}80` }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* 카테고리 뱃지 */}
                <span
                  className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{p.category}</span>
                </span>

                {/* 내용 */}
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

        <div className="text-center mt-8">
          <Link
            href="/policy"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border-2 px-8 py-3 text-sm font-bold transition-all hover:shadow-md"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
          >
            전체 공약 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </>
  );
}
