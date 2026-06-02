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
  title: "SubParse | Track Subscriptions. Cancel Before You're Charged.",
  description:
    "The frictionless way to manage subscriptions and free trials. Upload a screenshot, let AI do the rest, and never get caught by a surprise renewal.",
  openGraph: {
    title: "SubParse | Track Subscriptions. Cancel Before You're Charged.",
    description:
      "The frictionless way to manage subscriptions and free trials. Upload a screenshot, let AI do the rest, and never get caught by a surprise renewal.",
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
