"use client";

export default function ScrollButton() {
  const handleClick = () => {
    document.getElementById("policy")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="group inline-flex flex-col items-center gap-3 transition-all hover:opacity-90"
    >
      <span
        className="flex items-center gap-2 rounded-xl px-10 py-4 text-lg font-bold text-white shadow-xl transition-all group-hover:scale-105 group-hover:shadow-2xl"
        style={{ backgroundColor: "var(--color-cta)" }}
      >
        핵심 공약 보기
      </span>
    </button>
  );
}
