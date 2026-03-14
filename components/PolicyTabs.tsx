"use client";

import { useState } from "react";
import {
  HomeModernIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAmericasIcon,
  HeartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const CATEGORIES: {
  id: string;
  icon: IconComponent;
  label: string;
  color: string;
  headline: string;
  items: { num: string; title: string; detail: string }[];
}[] = [
  {
    id: "housing",
    icon: HomeModernIcon,
    label: "주거 안정",
    color: "#1e3a5f",
    headline: "모든 서산 시민이 안심하고 살 수 있는 집",
    items: [
      { num: "01", title: "공공임대주택 공급 확대", detail: "노후 주거지 재정비 및 공공임대주택 500세대 신규 공급" },
      { num: "02", title: "청년·신혼부부 임대료 지원", detail: "월 최대 20만원 주거비 지원으로 실질적 주거 부담 경감" },
      { num: "03", title: "빈집 리모델링 사업", detail: "서산 내 빈집 100채를 사회주택으로 전환 추진" },
    ],
  },
  {
    id: "education",
    icon: BookOpenIcon,
    label: "교육 혁신",
    color: "#065f46",
    headline: "아이 키우기 좋은 도시, 서산",
    items: [
      { num: "01", title: "공립 돌봄센터 5개소 신설", detail: "읍·면·동별 거점 돌봄센터 확충으로 보육 공백 해소" },
      { num: "02", title: "방과후 프로그램 무상 확대", detail: "예술·체육·코딩 등 다양한 방과후 프로그램 무상 제공" },
      { num: "03", title: "영재교육 기회 균등화", detail: "소득 관계 없이 모든 아이에게 영재교육 기회 보장" },
    ],
  },
  {
    id: "jobs",
    icon: BriefcaseIcon,
    label: "일자리 창출",
    color: "#7c2d12",
    headline: "청년이 돌아오는 서산, 일자리가 있는 서산",
    items: [
      { num: "01", title: "청년 창업 지원 센터 설립", detail: "1인당 최대 3천만원 초기 자금 지원 및 멘토링 프로그램 운영" },
      { num: "02", title: "지역 기업 채용 인센티브", detail: "서산 청년 채용 기업 세제 혜택 및 고용보조금 지원" },
      { num: "03", title: "농업 6차산업화 지원", detail: "농촌 체험·가공·유통 통합 플랫폼 구축으로 농가 소득 30% 향상" },
    ],
  },
  {
    id: "environment",
    icon: GlobeAmericasIcon,
    label: "환경 보호",
    color: "#064e3b",
    headline: "서산의 자연은 우리의 자산입니다",
    items: [
      { num: "01", title: "서산 갯벌 생태 보전 특별구역 지정", detail: "갯벌 생태 복원 및 국제 보호구역 지정 추진" },
      { num: "02", title: "친환경 도시 인프라 구축", detail: "자전거 도로 30km 확장, 도심 녹지 20% 확대" },
      { num: "03", title: "탄소 중립 실천 마을", detail: "에너지 자립 마을 10개소 지정 및 태양광 보조금 지원" },
    ],
  },
  {
    id: "welfare",
    icon: HeartIcon,
    label: "복지 강화",
    color: "#4c1d95",
    headline: "한 사람도 소외되지 않는 서산",
    items: [
      { num: "01", title: "어르신 방문 의료 서비스 확대", detail: "거동 불편 어르신 대상 주 1회 방문 의료 서비스 전면 확대" },
      { num: "02", title: "장애인 이동 편의 시설 개선", detail: "저상버스 100% 전환 및 장애인 편의시설 전수 점검" },
      { num: "03", title: "1인 가구 고독사 예방", detail: "안부 전화 서비스 및 커뮤니티케어 거점 5개소 신설" },
    ],
  },
  {
    id: "transport",
    icon: TruckIcon,
    label: "교통 개선",
    color: "#1e3a5f",
    headline: "어디서나 연결되는 서산",
    items: [
      { num: "01", title: "농촌 대중교통 노선 확대", detail: "도서·산간 마을 연계 수요응답형 교통 서비스 도입" },
      { num: "02", title: "서산-천안 고속버스 증편", detail: "출퇴근 시간대 배차 간격 30분 → 15분으로 단축" },
      { num: "03", title: "복지 택시 운행 확대", detail: "노인·장애인 복지 택시 보유 대수 현행 대비 3배 확대" },
    ],
  },
];

export default function PolicyTabs() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];
  const CatIcon = cat.icon;

  return (
    <div>
      {/* 탭 버튼 */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {CATEGORIES.map((c, i) => {
          const Icon = c.icon;
          return (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 min-h-[44px]"
              style={
                active === i
                  ? { backgroundColor: c.color, color: "#fff", transform: "scale(1.05)" }
                  : { backgroundColor: "var(--color-bg-subtle)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* 콘텐츠 영역 */}
      <div
        key={cat.id}
        className="rounded-3xl overflow-hidden border"
        style={{ borderColor: "var(--color-border)" }}
      >
        {/* 상단 헤더 */}
        <div
          className="px-8 py-8 text-white"
          style={{ backgroundColor: cat.color }}
        >
          <div className="flex items-center gap-4 mb-3">
            <CatIcon className="w-10 h-10 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest opacity-75">{cat.label}</p>
              <h2 className="text-xl font-bold md:text-2xl" style={{ fontFamily: "Noto Serif KR, serif" }}>
                {cat.headline}
              </h2>
            </div>
          </div>
        </div>

        {/* 공약 목록 */}
        <div className="bg-white divide-y" style={{ borderColor: "var(--color-border)" }}>
          {cat.items.map((item) => (
            <div key={item.num} className="flex items-start gap-5 px-8 py-6">
              <span
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5"
                style={{ backgroundColor: cat.color }}
              >
                {item.num}
              </span>
              <div>
                <p className="font-bold text-base mb-1" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-6" style={{ color: "var(--color-text-muted)" }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
