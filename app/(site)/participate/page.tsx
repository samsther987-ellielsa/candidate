"use client";

import { useState } from "react";
import {
  HandRaisedIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  InboxArrowDownIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const SAMPLE_CHEERS = [
  { name: "서산 시민 이○○", message: "서산이 더 살기 좋아질 거라 믿습니다. 꼭 잘 해주세요!", region: "서산시 동문동" },
  { name: "청년 김○○", message: "일자리 공약 보고 희망이 생겼어요. 응원합니다!", region: "서산시 석남동" },
  { name: "농업인 박○○", message: "농촌 현장까지 직접 찾아와 주셔서 감사했습니다.", region: "서산시 해미면" },
];

export default function ParticipatePage() {
  const [cheerName, setCheerName] = useState("");
  const [cheerMessage, setCheerMessage] = useState("");
  const [cheerConsent, setCheerConsent] = useState(false);
  const [cheerSubmitted, setCheerSubmitted] = useState(false);

  const [volunteerConsent, setVolunteerConsent] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  return (
    <>
      {/* 페이지 헤더 */}
      <section
        className="py-20 text-center text-white"
        style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest opacity-70 mb-3">Support</p>
        <h1 className="text-4xl font-bold md:text-5xl" style={{ fontFamily: "Noto Serif KR, serif" }}>
          응원 한마디
        </h1>
        <p className="mt-3 text-lg opacity-80 max-w-sm mx-auto">
          시민 여러분의 한 마디가 큰 힘이 됩니다
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">

        {/* ── 응원 메시지 ── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              ❤️ 응원 메시지 남기기
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
              여러분의 진심 어린 응원이 서산의 내일을 만드는 힘입니다
            </p>
          </div>

          {/* 샘플 응원 카드 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-8">
            {SAMPLE_CHEERS.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border bg-white p-5"
                style={{ borderColor: "var(--color-border)" }}
              >
                <p className="text-sm leading-7 mb-4" style={{ color: "var(--color-text)" }}>
                  "{c.message}"
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    {c.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "var(--color-text)" }}>{c.name}</p>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{c.region}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 메시지 작성 폼 */}
          <div
            className="rounded-3xl border bg-white p-8"
            style={{ borderColor: "var(--color-border)" }}
          >
            {cheerSubmitted ? (
              <div className="text-center py-10">
                <CheckCircleIcon className="w-12 h-12 mb-4 mx-auto" style={{ color: "var(--color-cta)" }} />
                <p className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                  응원 메시지가 전달되었습니다!
                </p>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  소중한 응원, 감사합니다. 반드시 보답하겠습니다.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (cheerConsent) setCheerSubmitted(true); }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                      이름 (또는 닉네임) <span style={{ color: "var(--color-cta)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={cheerName}
                      onChange={(e) => setCheerName(e.target.value)}
                      placeholder="서산 시민"
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-shadow focus:shadow-md min-h-[48px]"
                      style={{ borderColor: "var(--color-border)" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                      지역 (선택)
                    </label>
                    <input
                      type="text"
                      placeholder="예: 서산시 동문동"
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-shadow focus:shadow-md min-h-[48px]"
                      style={{ borderColor: "var(--color-border)" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                    응원 메시지 <span style={{ color: "var(--color-cta)" }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={cheerMessage}
                    onChange={(e) => setCheerMessage(e.target.value)}
                    placeholder="홍길동 후보에게 응원의 한마디를 남겨주세요 ❤️"
                    className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-shadow focus:shadow-md resize-none"
                    style={{ borderColor: "var(--color-border)" }}
                  />
                  <p className="text-xs mt-1 text-right" style={{ color: "var(--color-text-muted)" }}>
                    {cheerMessage.length} / 200
                  </p>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cheerConsent}
                    onChange={(e) => setCheerConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 flex-shrink-0"
                    required
                  />
                  <span className="text-sm leading-6" style={{ color: "var(--color-text-muted)" }}>
                    개인정보 수집·이용에 동의합니다. (선거 캠페인 운영 목적)
                    <a href="/privacy-policy" className="underline ml-1" style={{ color: "var(--color-primary)" }}>[개인정보처리방침]</a>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!cheerConsent || !cheerName || !cheerMessage}
                  className="w-full rounded-xl px-6 py-4 text-base font-bold text-white min-h-[52px] transition-all hover:opacity-90 disabled:opacity-40"
                  style={{ backgroundColor: "var(--color-cta)" }}
                >
                  응원 메시지 보내기 ❤️
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── 자원봉사 + 뉴스레터 ── */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* 자원봉사 */}
          <div className="rounded-3xl border bg-white p-8" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center gap-3 mb-6">
              <HandRaisedIcon className="w-8 h-8 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
              <div>
                <h2 className="text-xl font-bold" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
                  자원봉사 신청
                </h2>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>함께 뛰어주실 분을 찾습니다</p>
              </div>
            </div>
            {volunteerSubmitted ? (
              <div className="text-center py-8">
                <CheckCircleIcon className="w-10 h-10 mb-3 mx-auto" style={{ color: "var(--color-primary)" }} />
                <p className="font-semibold" style={{ color: "var(--color-primary)" }}>신청 완료! 곧 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (volunteerConsent) setVolunteerSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)" }}>이름 *</label>
                  <input type="text" required placeholder="홍길동" className="w-full rounded-xl border px-4 py-3 text-base outline-none min-h-[48px]" style={{ borderColor: "var(--color-border)" }} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)" }}>연락처 *</label>
                  <input type="tel" required placeholder="010-0000-0000" className="w-full rounded-xl border px-4 py-3 text-base outline-none min-h-[48px]" style={{ borderColor: "var(--color-border)" }} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)" }}>희망 활동</label>
                  <select className="w-full rounded-xl border px-4 py-3 text-base outline-none min-h-[48px]" style={{ borderColor: "var(--color-border)" }}>
                    <option>선택해 주세요</option>
                    <option>유세 지원</option>
                    <option>홍보물 배포</option>
                    <option>SNS 홍보</option>
                    <option>사무 지원</option>
                  </select>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={volunteerConsent} onChange={(e) => setVolunteerConsent(e.target.checked)} className="mt-1 w-5 h-5 flex-shrink-0" required />
                  <span className="text-xs leading-5" style={{ color: "var(--color-text-muted)" }}>
                    개인정보 수집·이용에 동의합니다.
                    <a href="/privacy-policy" className="underline ml-1" style={{ color: "var(--color-primary)" }}>[방침]</a>
                  </span>
                </label>
                <button type="submit" disabled={!volunteerConsent} className="w-full rounded-xl px-6 py-3 text-base font-bold text-white min-h-[48px] disabled:opacity-40 transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--color-primary)" }}>
                  신청하기
                </button>
              </form>
            )}
          </div>

          {/* 뉴스레터 */}
          <div className="rounded-3xl border bg-white p-8" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center gap-3 mb-6">
              <EnvelopeIcon className="w-8 h-8 flex-shrink-0" style={{ color: "var(--color-cta)" }} />
              <div>
                <h2 className="text-xl font-bold" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
                  뉴스레터 구독
                </h2>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>최신 선거 소식을 이메일로</p>
              </div>
            </div>
            {newsletterSubmitted ? (
              <div className="text-center py-8">
                <InboxArrowDownIcon className="w-10 h-10 mb-3 mx-auto" style={{ color: "var(--color-primary)" }} />
                <p className="font-semibold" style={{ color: "var(--color-primary)" }}>구독 완료! 소식 보내드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (newsletterConsent) setNewsletterSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)" }}>이름</label>
                  <input type="text" placeholder="홍길동" className="w-full rounded-xl border px-4 py-3 text-base outline-none min-h-[48px]" style={{ borderColor: "var(--color-border)" }} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)" }}>이메일 *</label>
                  <input type="email" required placeholder="example@email.com" className="w-full rounded-xl border px-4 py-3 text-base outline-none min-h-[48px]" style={{ borderColor: "var(--color-border)" }} />
                </div>
                <div
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: "var(--color-bg-subtle)" }}
                >
                  <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-text)" }}>수신 내용</p>
                  {["선거 활동 소식", "공약 업데이트", "투표 안내"].map((item) => (
                    <label key={item} className="flex items-center gap-2 py-1 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>{item}</span>
                    </label>
                  ))}
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={newsletterConsent} onChange={(e) => setNewsletterConsent(e.target.checked)} className="mt-1 w-5 h-5 flex-shrink-0" required />
                  <span className="text-xs leading-5" style={{ color: "var(--color-text-muted)" }}>
                    이메일 수신에 동의합니다. 언제든 수신 거부 가능.
                    <a href="/privacy-policy" className="underline ml-1" style={{ color: "var(--color-primary)" }}>[방침]</a>
                  </span>
                </label>
                <button type="submit" disabled={!newsletterConsent} className="w-full rounded-xl px-6 py-3 text-base font-bold text-white min-h-[48px] disabled:opacity-40 transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--color-cta)" }}>
                  구독하기
                </button>
              </form>
            )}

            {/* 후원 안내 */}
            <div className="mt-6 rounded-2xl p-4 border" style={{ backgroundColor: "var(--color-bg-subtle)", borderColor: "var(--color-border)" }}>
              <p className="text-sm font-semibold mb-1 flex items-center gap-1.5" style={{ color: "var(--color-primary)" }}>
                <BanknotesIcon className="w-4 h-4 flex-shrink-0" />
                후원 안내
              </p>
              <p className="text-xs leading-5" style={{ color: "var(--color-text-muted)" }}>
                후원은 선관위 지정 계좌를 통해 진행됩니다. 문의: 041-000-0000
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
