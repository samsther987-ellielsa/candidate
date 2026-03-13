"use client";

import { useState } from "react";
import Image from "next/image";
import { DEFAULT_GALLERY_ITEMS, type GalleryItem } from "@/lib/gallery-data";

interface Props {
  items?: GalleryItem[];
}

export default function GallerySection({ items = DEFAULT_GALLERY_ITEMS }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ background: item.imagePath ? undefined : item.gradient }}
          >
            {item.imagePath ? (
              <Image
                src={item.imagePath}
                alt={item.label}
                fill
                className="object-cover"
              />
            ) : null}

            {/* 호버 오버레이 */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

            {/* 아이콘 (이미지 없을 때만) */}
            {!item.imagePath && (
              <div className="absolute top-4 left-4 text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
            )}

            {/* 하단 정보 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-semibold text-sm md:text-base leading-tight">{item.label}</p>
              <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
            </div>

            {/* 확대 아이콘 */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* 라이트박스 */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="aspect-[4/3] relative flex flex-col items-center justify-center gap-4"
              style={{ background: items[selected].imagePath ? undefined : items[selected].gradient }}
            >
              {items[selected].imagePath ? (
                <Image src={items[selected].imagePath!} alt={items[selected].label} fill className="object-cover" />
              ) : (
                <>
                  <span className="text-7xl">{items[selected].icon}</span>
                  <p className="text-white/60 text-sm">사진 준비 중</p>
                </>
              )}
            </div>
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold" style={{ color: "var(--color-primary)" }}>
                {items[selected].label}
              </h3>
              <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
                {items[selected].desc}
              </p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={() => setSelected((selected - 1 + items.length) % items.length)}
              className="absolute left-4 top-1/3 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelected((selected + 1) % items.length)}
              className="absolute right-4 top-1/3 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
