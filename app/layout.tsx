import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "홍길동 후보 | 충청남도 서산시",
  description: "서산시민과 함께하는 홍길동 후보의 공식 선거 홍보 웹사이트입니다.",
  openGraph: {
    title: "홍길동 후보 | 충청남도 서산시",
    description: "서산시민과 함께하는 홍길동 후보",
    locale: "ko_KR",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
