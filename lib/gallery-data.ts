export interface GalleryItem {
  id: string;
  label: string;
  desc: string;
  gradient: string;
  icon: string;
  imagePath?: string; // 실제 업로드된 이미지 경로
}

export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    label: "지역 주민 간담회",
    desc: "2024.03 · 서산 시민회관",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2e6aa8 100%)",
    icon: "🤝",
  },
  {
    id: "2",
    label: "청년 포럼 참석",
    desc: "2024.05 · 서산 청년센터",
    gradient: "linear-gradient(135deg, #065f46 0%, #0d9488 100%)",
    icon: "💬",
  },
  {
    id: "3",
    label: "농촌 현장 방문",
    desc: "2024.07 · 서산 대산읍",
    gradient: "linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)",
    icon: "🌾",
  },
  {
    id: "4",
    label: "복지관 봉사활동",
    desc: "2024.09 · 서산종합사회복지관",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #d97706 100%)",
    icon: "❤️",
  },
  {
    id: "5",
    label: "환경 정화 캠페인",
    desc: "2024.10 · 서산 갯벌",
    gradient: "linear-gradient(135deg, #0e4c6e 0%, #0ea5e9 100%)",
    icon: "🌿",
  },
  {
    id: "6",
    label: "시민 토론회",
    desc: "2025.01 · 서산 문화예술회관",
    gradient: "linear-gradient(135deg, #881337 0%, #be185d 100%)",
    icon: "📢",
  },
  {
    id: "7",
    label: "선거사무소 개소식",
    desc: "2025.03 · 서산시 선거사무소",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #0d9488 100%)",
    icon: "🎊",
  },
  {
    id: "8",
    label: "어르신 요양원 방문",
    desc: "2025.04 · 서산 행복요양원",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)",
    icon: "🏥",
  },
  {
    id: "9",
    label: "학교 현장 방문",
    desc: "2025.05 · 서산 중앙초등학교",
    gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
    icon: "🏫",
  },
];
