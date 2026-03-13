import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "유권자 안내 | 홍길동",
  description: "투표 방법, 사전 투표 일정, 투표소 찾기 등 유권자에게 필요한 정보를 안내합니다.",
};

export default function VoterGuidePage() {
  return (
    <>
      {/* 페이지 헤더 */}
      <section
        className="py-16 text-center text-white"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest opacity-75 mb-2">Voter Guide</p>
        <h1 className="text-4xl font-bold" style={{ fontFamily: "Noto Serif KR, serif" }}>
          유권자 안내
        </h1>
        <p className="mt-3 text-lg opacity-85">소중한 한 표가 서산을 바꿉니다</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 space-y-12">
        {/* 투표 일정 */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
            📅 투표 일정
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className="rounded-2xl border p-6 bg-white"
              style={{ borderColor: "var(--color-border)" }}
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                사전 투표
              </h3>
              <p className="text-2xl font-bold mb-1" style={{ color: "var(--color-cta)" }}>
                선거일 5~6일 전
              </p>
              <ul className="text-sm space-y-1 mt-3" style={{ color: "var(--color-text-muted)" }}>
                <li>• 오전 6시 ~ 오후 6시</li>
                <li>• 전국 어디서나 가능</li>
                <li>• 별도 신고 불필요</li>
                <li>• 신분증 지참 필수</li>
              </ul>
            </div>
            <div
              className="rounded-2xl border p-6 bg-white"
              style={{ borderColor: "var(--color-border)" }}
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                본 투표일
              </h3>
              <p className="text-2xl font-bold mb-1" style={{ color: "var(--color-cta)" }}>
                2026년 선거일
              </p>
              <ul className="text-sm space-y-1 mt-3" style={{ color: "var(--color-text-muted)" }}>
                <li>• 오전 6시 ~ 오후 8시</li>
                <li>• 주소지 관할 투표소</li>
                <li>• 신분증 지참 필수</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 투표 방법 */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
            🗳️ 투표 방법
          </h2>
          <ol className="space-y-4">
            {[
              { step: "01", title: "신분증 준비", desc: "주민등록증, 여권, 운전면허증 등 사진이 있는 신분증을 준비하세요." },
              { step: "02", title: "투표소 방문", desc: "안내받은 투표소를 방문합니다. 사전 투표는 전국 어디서나 가능합니다." },
              { step: "03", title: "본인 확인", desc: "선거인 명부에서 본인 확인 후 투표용지를 받습니다." },
              { step: "04", title: "기표 후 투함", desc: "기표소에서 도장으로 기표한 뒤 투표함에 넣으면 완료입니다." },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-2xl border bg-white p-5"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {item.step}
                </span>
                <div>
                  <p className="font-bold mb-1" style={{ color: "var(--color-primary)" }}>{item.title}</p>
                  <p className="text-sm leading-6" style={{ color: "var(--color-text-muted)" }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* 투표소 찾기 */}
        <div
          className="rounded-2xl border p-8 text-center"
          style={{ backgroundColor: "var(--color-bg-subtle)", borderColor: "var(--color-border)" }}
        >
          <div className="text-4xl mb-4">📍</div>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
            투표소 찾기
          </h2>
          <p className="text-base mb-6" style={{ color: "var(--color-text-muted)" }}>
            중앙선거관리위원회 홈페이지에서 내 투표소를 확인하세요.
          </p>
          <a
            href="https://www.nec.go.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center rounded-lg px-8 py-3 text-base font-bold text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            중앙선거관리위원회 바로가기 →
          </a>
        </div>

        {/* 유의사항 */}
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: "var(--color-border)", backgroundColor: "#fffbeb" }}
        >
          <h3 className="text-base font-bold mb-3" style={{ color: "#92400e" }}>
            ⚠️ 투표 시 유의사항
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "#78350f" }}>
            <li>• 투표소 안에서 사진 촬영, 통화는 금지입니다.</li>
            <li>• 기표 도장 외 다른 표시(서명 등)를 하면 무효 처리됩니다.</li>
            <li>• 타인에게 투표 내용을 공개하거나 강요하는 행위는 위법입니다.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
