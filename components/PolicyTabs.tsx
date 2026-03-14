"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  BuildingOffice2Icon,
  HeartIcon,
  AcademicCapIcon,
  SparklesIcon,
  TruckIcon,
  MusicalNoteIcon,
  ShieldCheckIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type Policy = {
  id: string;
  category: string;
  icon: IconComponent;
  title: string;
  detail: {
    situation: string;
    pledges: string[];
    effects: string;
    schedule: string;
  };
};

const CATEGORY_COLORS: Record<string, string> = {
  경제: "#1e3a5f",
  복지: "#7c3aed",
  교육: "#0369a1",
  환경: "#065f46",
  교통: "#92400e",
  문화: "#be185d",
  안전: "#b45309",
};

const POLICIES: Policy[] = [
  {
    id: "economy-1",
    category: "경제",
    icon: BuildingOffice2Icon,
    title: "서산 산업단지 활성화 및 청년 일자리 창출",
    detail: {
      situation:
        "서산시 산업단지 가동률 72%에 불과하며, 청년층 인구 유출이 지속되고 있습니다. 2025년 기준 20~30대 순유출 인구가 연 1,200명에 달합니다.",
      pledges: [
        "대산산업단지 인프라 현대화 투자 유치",
        "청년 창업 허브 '서산 스타트업 밸리' 조성",
        "기업 유치 인센티브 패키지 강화",
        "석유화학·신재생에너지 융합 클러스터 구축",
      ],
      effects:
        "5년 내 양질의 일자리 1만개 창출, 산업단지 가동률 90% 이상 달성, 청년 인구 순유입 전환",
      schedule:
        "2026 하반기: 기업 유치 TF 구성 → 2027: 스타트업 밸리 착공 → 2028: 1차 입주 시작",
    },
  },
  {
    id: "welfare-1",
    category: "복지",
    icon: HeartIcon,
    title: "어르신 맞춤 돌봄 서비스 확대",
    detail: {
      situation:
        "서산시 65세 이상 노인 인구 비율 18.3%, 독거 어르신 약 4,200명. 고독사 및 방치 사례 매년 증가 추세.",
      pledges: [
        "방문 요양 서비스 대상 300명 추가 확대",
        "24시간 안부 확인 스마트 IoT 시스템 도입",
        "어르신 맞춤 건강관리 주치의제 시범 운영",
        "노인 복지관 3개소 신축 및 프로그램 다양화",
      ],
      effects:
        "독거 어르신 고독사 50% 감소, 노인 의료비 자기부담률 경감, 삶의 질 향상 지수 개선",
      schedule:
        "2026: IoT 시스템 1차 설치(1,000가구) → 2027: 전체 독거 어르신 확대 → 2028: 복지관 신축 완공",
    },
  },
  {
    id: "education-1",
    category: "교육",
    icon: AcademicCapIcon,
    title: "미래형 교육환경 조성",
    detail: {
      situation:
        "서산시 초·중·고 건물 중 30년 이상 노후 시설 42%. 방과 후 프로그램 이용률 전국 평균 대비 낮음.",
      pledges: [
        "노후 학교 건물 리모델링 5개교 우선 추진",
        "AI·코딩 교육 전용 스마트 교실 전 학교 설치",
        "방과 후 프로그램 전면 무상화",
        "농촌 지역 학교 통학버스 노선 확대",
      ],
      effects:
        "학교 시설 만족도 40% 향상, 사교육비 지출 감소, 교육 기회 격차 해소",
      schedule:
        "2026: 노후 시설 긴급 보수 → 2027: 스마트 교실 구축 완료 → 2028: 방과 후 무상화 전면 시행",
    },
  },
  {
    id: "environment-1",
    category: "환경",
    icon: SparklesIcon,
    title: "탄소중립 서산 2030 로드맵",
    detail: {
      situation:
        "서산시 온실가스 배출량 매년 1.2% 증가. 해안가 및 갯벌 생태계 위협 증가, 미세먼지 주의보 연 15회 이상.",
      pledges: [
        "서산 갯벌 생태 보전 특별구역 지정",
        "태양광·풍력 에너지 자립 마을 10개소 조성",
        "자전거 전용도로 30km 추가 조성",
        "도심 녹지 면적 20% 확대",
      ],
      effects:
        "2030년까지 탄소 배출 30% 감소, 신재생에너지 비율 25% 달성, 생태관광 수입 증대",
      schedule:
        "2026: 갯벌 특별구역 지정 신청 → 2027: 에너지 자립 마을 1차 조성 → 2030: 탄소중립 목표 달성",
    },
  },
  {
    id: "transport-1",
    category: "교통",
    icon: TruckIcon,
    title: "서산 교통 인프라 혁신",
    detail: {
      situation:
        "농촌 지역 대중교통 공백 지역 23개 마을. 서산-천안 광역버스 배차 간격 60분 이상으로 불편 극심.",
      pledges: [
        "수요응답형 농촌 버스(DRT) 전 읍면동 도입",
        "서산-천안 광역버스 배차 간격 30분으로 단축",
        "서산 시내 버스 노선 전면 재편",
        "장애인·노인 복지택시 3배 확대",
      ],
      effects:
        "교통 소외 마을 해소, 대중교통 이용률 30% 증가, 주민 이동 시간 평균 20분 단축",
      schedule:
        "2026: DRT 시범 운행 → 2027: 광역버스 증편 → 2028: 전체 노선 재편 완료",
    },
  },
  {
    id: "culture-1",
    category: "문화",
    icon: MusicalNoteIcon,
    title: "서산 문화·관광 브랜드 구축",
    detail: {
      situation:
        "서산시 관광객 수 정체, 문화 콘텐츠 부족으로 재방문율 낮음. 지역 문화예술 행사 예산 인근 시군 대비 30% 부족.",
      pledges: [
        "해미읍성 야간 관광 상설 프로그램 운영",
        "서산 마애삼존불 문화해설 AI 가이드 도입",
        "지역 문화예술인 창작 지원금 2배 확대",
        "서산 로컬 푸드 연계 관광 패키지 개발",
      ],
      effects:
        "연간 관광객 50만명 유치, 지역 내 관광 소비 30% 증가, 문화예술 종사자 소득 향상",
      schedule:
        "2026: 야간 관광 프로그램 론칭 → 2027: 관광 패키지 상품화 → 2028: 관광 거점 센터 완공",
    },
  },
  {
    id: "safety-1",
    category: "안전",
    icon: ShieldCheckIcon,
    title: "안전한 서산, 재난 대응 강화",
    detail: {
      situation:
        "서산시 태안 인근 해안가 침수 피해 반복 발생. CCTV 노후화 및 사각지대 다수 존재. 소방차 출동 시간 농촌 지역 전국 평균 초과.",
      pledges: [
        "해안 침수 방지 배수 시설 현대화",
        "CCTV 사각지대 1,000개소 추가 설치",
        "농촌 지역 소방서 분소 2개소 신설",
        "재난 대응 시민 교육 연 2회 의무화",
      ],
      effects:
        "자연재해 피해액 40% 감소, 범죄 발생률 15% 감소, 소방차 출동 시간 전국 평균 이내로 단축",
      schedule:
        "2026: CCTV 긴급 증설 → 2027: 소방 분소 착공 → 2028: 침수 방지 인프라 완공",
    },
  },
  {
    id: "housing-1",
    category: "복지",
    icon: HomeModernIcon,
    title: "서산 시민 주거 안정 지원",
    detail: {
      situation:
        "서산시 전·월세 가격 5년 새 23% 상승. 청년 1인 가구 주거비 부담 가중, 노후 주택 비율 38%.",
      pledges: [
        "청년·신혼부부 월세 최대 20만원 지원",
        "공공임대주택 500세대 신규 공급",
        "빈집 100채 사회주택 전환 추진",
        "노후 단독주택 리모델링 비용 50% 지원",
      ],
      effects:
        "청년 주거비 부담 경감, 공공임대 대기 기간 30% 단축, 노후 주택 거주 환경 개선",
      schedule:
        "2026: 월세 지원 사업 시행 → 2027: 공공임대 1차 공급 → 2028: 빈집 사회주택 전환 완료",
    },
  },
];

const TABS = ["전체", "경제", "복지", "교육", "환경", "교통", "문화", "안전"];

const DETAIL_SECTIONS = [
  { key: "situation" as const, label: "현황 및 문제점", color: "#1e3a5f" },
  { key: "pledges" as const, label: "공약 내용", color: "#d97706" },
  { key: "effects" as const, label: "기대 효과", color: "#065f46" },
  { key: "schedule" as const, label: "추진 일정", color: "#7c3aed" },
];

export default function PolicyTabs() {
  const [activeTab, setActiveTab] = useState("전체");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered =
    activeTab === "전체"
      ? POLICIES
      : POLICIES.filter((p) => p.category === activeTab);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <div>
      {/* 탭 필터 */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-1 justify-center flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenId(null);
            }}
            className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all min-h-[44px]"
            style={
              activeTab === tab
                ? { backgroundColor: "var(--color-primary)", color: "#fff" }
                : {
                    backgroundColor: "var(--color-bg-subtle)",
                    color: "var(--color-text-muted)",
                    border: "1px solid var(--color-border)",
                  }
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 아코디언 리스트 */}
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: "var(--color-border)" }}
      >
        {filtered.map((policy, index) => {
          const isOpen = openId === policy.id;
          const color = CATEGORY_COLORS[policy.category] ?? "var(--color-primary)";
          const Icon = policy.icon;

          return (
            <div
              key={policy.id}
              className={index !== 0 ? "border-t" : ""}
              style={{ borderColor: "var(--color-border)" }}
            >
              {/* 헤더 행 */}
              <button
                onClick={() => toggle(policy.id)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50 min-h-[56px]"
                aria-expanded={isOpen}
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
                  <span className="hidden sm:inline">{policy.category}</span>
                </span>

                {/* 제목 */}
                <span
                  className="flex-1 text-sm sm:text-base font-semibold leading-snug"
                  style={{ color: "var(--color-text)" }}
                >
                  {policy.title}
                </span>

                {/* 펼치기 아이콘 */}
                <ChevronDownIcon
                  className="flex-shrink-0 w-5 h-5 transition-transform duration-300"
                  style={{
                    color: "var(--color-text-muted)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {/* 펼침 영역 */}
              {isOpen && (
                <div
                  className="px-6 pb-6 border-t"
                  style={{
                    backgroundColor: "var(--color-bg-subtle)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="pt-5 space-y-5">
                    {DETAIL_SECTIONS.map((section) => (
                      <div key={section.key}>
                        <h4
                          className="flex items-center gap-2 text-sm font-bold mb-2"
                          style={{ color: section.color }}
                        >
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: section.color }}
                          />
                          {section.label}
                        </h4>

                        {section.key === "pledges" ? (
                          <ol className="space-y-1.5 pl-4">
                            {policy.detail.pledges.map((pledge, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm leading-6"
                                style={{ color: "var(--color-text)" }}
                              >
                                <span
                                  className="flex-shrink-0 font-bold"
                                  style={{ color: section.color }}
                                >
                                  {"①②③④⑤".charAt(i)}
                                </span>
                                {pledge}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <p
                            className="text-sm leading-7 pl-4"
                            style={{ color: "var(--color-text)" }}
                          >
                            {policy.detail[section.key]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
