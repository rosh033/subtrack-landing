import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SubTrack — Never waste money on forgotten renewals again",
  description:
    "SubTrack tracks every subscription and free trial you have, sends you a reminder the day before each renewal, and syncs to your calendar. One place for all your subscriptions.",
  openGraph: {
    title: "SubTrack — Never waste money on forgotten renewals again",
    description:
      "AI-powered subscription tracking. Stop losing money to renewals you forgot about.",
    type: "website",
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
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
