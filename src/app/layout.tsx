import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "김영완 - 이력서",
  description: "프론트엔드 개발자 김영완의 이력서입니다.",
  keywords: [
    "프론트엔드",
    "React",
    "TypeScript",
    "Next.js",
    "개발자",
    "이력서",
  ],
  authors: [{ name: "김영완" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
