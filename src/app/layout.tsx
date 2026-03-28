import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clasquera - Know what really happens in every class",
  description: "Clasquera records, transcribes, and scores every lesson so you can see teacher performance without leaving your office.",
  keywords: ["education", "nigeria", "school management", "teacher accountability", "AI education"],
  authors: [{ name: "NIT7ER" }],
  openGraph: {
    title: "Clasquera - Know what really happens in every class",
    description: "AI-driven accountability for private schools. Powering Nigerian Education through data-driven academic excellence.",
    url: "https://clasquera.com",
    siteName: "Clasquera",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clasquera - Know what really happens in every class",
    description: "AI-driven accountability for private schools. Powering Nigerian Education through data-driven academic excellence.",
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
