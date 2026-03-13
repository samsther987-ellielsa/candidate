"use client";

import { useState } from "react";

export default function ContactPage() {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* 페이지 헤더 */}
      <section
        className="py-16 text-center text-white"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest opacity-75 mb-2">Contact</p>
        <h1 className="text-4xl font-bold" style={{ fontFamily: "Noto Serif KR, serif" }}>
          연락처
        </h1>
        <p className="mt-3 text-lg opacity-85">궁금한 점이 있으시면 언제든 연락 주세요</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              선거사무소 안내
            </h2>
            <ul className="space-y-6">
              {[
                { icon: "📍", label: "주소", value: "충청남도 서산시 (상세 주소 추후 공개)" },
                { icon: "📞", label: "전화", value: "041-000-0000" },
                { icon: "📧", label: "이메일", value: "contact@candidate.kr" },
                { icon: "🕐", label: "운영 시간", value: "평일 09:00 ~ 18:00" },
              ].map((item) => (
                <li key={item.label} className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--color-text-muted)" }}>
                      {item.label}
                    </p>
                    <p className="text-base" style={{ color: "var(--color-text)" }}>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-text)" }}>SNS</p>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "YouTube"].map((sns) => (
                  <a
                    key={sns}
                    href="#"
                    className="flex min-h-[44px] items-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
                  >
                    {sns}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className="rounded-2xl border bg-white p-8" style={{ borderColor: "var(--color-border)" }}>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              문의하기
            </h2>
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✅</div>
                <p className="text-lg font-semibold" style={{ color: "var(--color-primary)" }}>
                  문의가 접수되었습니다!
                </p>
                <p className="text-sm mt-2" style={{ color: "var(--color-text-muted)" }}>
                  빠른 시일 내에 답변 드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (consent) setSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "var(--color-text)" }}>
                    이름 <span style={{ color: "var(--color-cta)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full rounded-lg border px-4 py-3 text-base outline-none min-h-[44px]"
                    style={{ borderColor: "var(--color-border)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "var(--color-text)" }}>
                    이메일 <span style={{ color: "var(--color-cta)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="w-full rounded-lg border px-4 py-3 text-base outline-none min-h-[44px]"
                    style={{ borderColor: "var(--color-border)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "var(--color-text)" }}>
                    문의 내용 <span style={{ color: "var(--color-cta)" }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="문의하실 내용을 입력해 주세요."
                    className="w-full rounded-lg border px-4 py-3 text-base outline-none resize-none"
                    style={{ borderColor: "var(--color-border)" }}
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer min-h-[44px] pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 flex-shrink-0"
                    required
                  />
                  <span className="text-sm leading-6" style={{ color: "var(--color-text-muted)" }}>
                    개인정보 수집·이용에 동의합니다.
                    <a href="/privacy-policy" className="underline ml-1" style={{ color: "var(--color-primary)" }}>
                      [개인정보처리방침]
                    </a>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!consent}
                  className="w-full rounded-lg px-6 py-3 text-base font-bold text-white min-h-[48px] transition-opacity disabled:opacity-40"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
