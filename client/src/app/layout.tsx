import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <header>
            <Link href={"/"}>홈 화면으로 가기</Link>
          </header>
          <main>{children}</main>
          <footer>김성민</footer>
        </div>
      </body>
    </html>
  );
}
