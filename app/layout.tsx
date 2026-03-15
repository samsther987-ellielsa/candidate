import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "홍길동 후보 | 충청남도 서산시",
  description: "서산시민과 함께하는 홍길동 후보의 공식 선거 홍보 웹사이트입니다.",
  openGraph: {
    title: "홍길동 후보 | 충청남도 서산시",
    description: "서산시민과 함께하는 홍길동 후보",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/candidate.jpg",
        width: 1200,
        height: 630,
        alt: "홍길동 후보",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
