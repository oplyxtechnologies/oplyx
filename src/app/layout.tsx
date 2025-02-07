import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav/nav";
import { SiteFooter } from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oplyx - Web Development Company",
  description:
    "Oplyx Technologies offers top-tier web development solutions, creating user-friendly, high-performance websites and applications.",
  keywords:
    "Oplyx, web development, UI/UX design, software solutions, web design",
  openGraph: {
    title: "Oplyx - Web Development Company",
    description:
      "Oplyx Technologies offers top-tier web development solutions, creating user-friendly, high-performance websites and applications.",
    type: "website",
    url: "https://oplyx.com",
    images: [
      {
        url: "https://oplyx.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oplyx - Web Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OplyxTech",
    title: "Oplyx - Web Development Company",
    description:
      "Oplyx Technologies offers top-tier web development solutions, creating user-friendly, high-performance websites and applications.",
    images: ["https://oplyx.com/og-image.jpg"],
  },
  metadataBase: new URL("https://oplyx.com"),
  alternates: {
    canonical: "https://oplyx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
