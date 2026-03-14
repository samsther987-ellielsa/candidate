import type { Metadata } from "next";
import PolicyTabs from "@/components/PolicyTabs";

export const metadata: Metadata = {
  title: "공약 | 홍길동",
  description: "홍길동 후보의 분야별 핵심 공약을 확인하세요.",
};

export default function PolicyPage() {
  return (
    <>
      {/* 페이지 헤더 */}
      <section
        className="py-20 text-center text-white"
        style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest opacity-70 mb-3">Policy</p>
        <h1 className="text-4xl font-bold md:text-5xl" style={{ fontFamily: "Noto Serif KR, serif" }}>
          공약
        </h1>
        <p className="mt-3 text-lg opacity-80 max-w-md mx-auto">
          서산 시민과 함께 만드는 구체적이고 실현 가능한 약속
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <PolicyTabs />
      </section>
    </>
  );
}
