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
  metadataBase: new URL('https://muhammedajas.com'),
  title: "Muhammed Ajas | Senior Site Reliability Engineer & Cloud Architect",
  description: "Senior Site Reliability Engineer with 10+ years of experience in cloud platforms, Kubernetes, and enterprise automation. Managing 300+ production clusters for 500+ enterprise customers across AWS, IBM Cloud, and hybrid environments.",
  keywords: [
    "Site Reliability Engineer",
    "SRE",
    "Cloud Architect",
    "Kubernetes",
    "AWS",
    "IBM Cloud",
    "DevOps",
    "Platform Engineering",
    "Cloud Automation",
    "FinOps",
    "Terraform",
    "Python",
    "Muhammed Ajas"
  ],
  authors: [{ name: "Muhammed Ajas" }],
  creator: "Muhammed Ajas",
  publisher: "Muhammed Ajas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammedajas.com",
    title: "Muhammed Ajas | Senior Site Reliability Engineer",
    description: "Senior Site Reliability Engineer specializing in Kubernetes, AWS, and enterprise-scale automation. Managing 300+ production clusters for 500+ customers.",
    siteName: "Muhammed Ajas Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Ajas - Senior Site Reliability Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ajas | Senior Site Reliability Engineer",
    description: "Senior SRE specializing in Kubernetes, AWS, and enterprise automation",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}