import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tài Khoản Giá Sỉ",
    template: "%s | Tài Khoản Giá Sỉ",
  },

  description:
    "Chuyên cung cấp tài khoản ChatGPT Plus, Gemini, Canva Pro, Netflix, Spotify.",

  icons: {
    icon: [
      { url: "/image.png", sizes: "32x32", type: "image/png" },
      { url: "/image.png", sizes: "16x16", type: "image/png" },
    ],

    apple: [
      { url: "/image.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
