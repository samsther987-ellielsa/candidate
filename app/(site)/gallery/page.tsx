import type { Metadata } from "next";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "갤러리 | 홍길동",
  description: "홍길동 후보의 현장 활동 갤러리입니다.",
};

export default function GalleryPage() {
  return (
    <>
      <section
        className="py-20 text-center text-white"
        style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest opacity-70 mb-3">Gallery</p>
        <h1 className="text-4xl font-bold md:text-5xl" style={{ fontFamily: "Noto Serif KR, serif" }}>
          활동 갤러리
        </h1>
        <p className="mt-3 text-lg opacity-80">현장에서 함께한 순간들</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-sm mb-10" style={{ color: "var(--color-text-muted)" }}>
          사진을 클릭하면 크게 볼 수 있습니다
        </p>
        <GallerySection />
      </section>
    </>
  );
}
