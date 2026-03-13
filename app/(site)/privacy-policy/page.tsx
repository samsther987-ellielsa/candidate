import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 홍길동",
  description: "홍길동 후보 선거사무소 개인정보처리방침",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="py-16 text-center text-white"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest opacity-75 mb-2">Legal</p>
        <h1 className="text-4xl font-bold" style={{ fontFamily: "Noto Serif KR, serif" }}>
          개인정보처리방침
        </h1>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 space-y-10" style={{ color: "var(--color-text)" }}>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          시행일: 2026년 3월 1일
        </p>

        {[
          {
            title: "1. 개인정보 수집 항목 및 목적",
            content: `홍길동 후보 선거사무소(이하 '사무소')는 다음과 같이 개인정보를 수집·이용합니다.

• 수집 항목: 이름, 이메일 주소, 연락처
• 수집 목적: 자원봉사 신청 관리, 뉴스레터 발송, 문의 답변
• 보유 기간: 선거 종료 후 6개월 이내 파기 (단, 법령에 따라 보존이 필요한 경우 해당 기간)`,
          },
          {
            title: "2. 개인정보 제3자 제공",
            content: `사무소는 수집한 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 법령에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우에는 예외로 합니다.`,
          },
          {
            title: "3. 개인정보의 파기",
            content: `사무소는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. 전자적 파일 형태로 저장된 개인정보는 복구 불가능한 방법으로 영구 삭제합니다.`,
          },
          {
            title: "4. 정보 주체의 권리",
            content: `이용자는 언제든지 다음의 권리를 행사할 수 있습니다.

• 개인정보 열람 요구
• 개인정보 정정·삭제 요구
• 개인정보 처리 정지 요구
• 뉴스레터 및 SMS 수신 거부

권리 행사는 041-000-0000 또는 contact@candidate.kr로 연락하시면 됩니다.`,
          },
          {
            title: "5. 개인정보 보호 책임자",
            content: `성명: 홍길동 선거사무장
연락처: 041-000-0000
이메일: contact@candidate.kr`,
          },
          {
            title: "6. 쿠키(Cookie) 정책",
            content: `본 웹사이트는 방문자 분석을 위해 Google Analytics를 사용할 수 있으며, 이 과정에서 쿠키가 저장될 수 있습니다. 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.`,
          },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-primary)" }}>
              {section.title}
            </h2>
            <p className="text-base leading-8 whitespace-pre-line" style={{ color: "var(--color-text-muted)" }}>
              {section.content}
            </p>
          </section>
        ))}
      </article>
    </>
  );
}
