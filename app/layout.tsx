import type { Metadata } from "next";
import { Lora, Geist_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanif Tri Widiyanto",
  description: "Developer who enjoys turning ideas into projects, writing, and reading regularly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${geistMono.variable} antialiased font-serif`}
        style={{ fontFamily: 'var(--font-lora)' }}
      >
        {children}
      </body>
    </html>
  );
}
