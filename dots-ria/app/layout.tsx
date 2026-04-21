import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DOTS RIA — Reporting Hub BPR",
  description:
    "Sistem pelaporan terpusat untuk Bank Perkreditan Rakyat. Kelola laporan bulanan, insidentil, dan regulasi dengan mudah.",
  keywords: ["BPR", "pelaporan", "DOTS RIA", "dashboard", "reporting hub"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full bg-[var(--surface-bg)]">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex flex-1 flex-col" style={{ marginLeft: "var(--sidebar-width)" }}>
          {/* Sticky Topbar */}
          <Topbar />

          {/* Page Content */}
          <main className="flex flex-1 flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
