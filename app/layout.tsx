import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import Script from "next/script";
import Tracker from "@/components/molecules/tracker";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.danndua.com"),
  title: {
    default: "DAN N DUA - Empower Your Beauty Naturally",
    template: "%s | DAN N DUA",
  },
  description:
    "DAN N DUA offers luxurious, effective, and safe skincare solutions to empower women. Explore our premier skincare cream and experience the perfect blend of science and nature.",
  applicationName: "DAN N DUA",
  authors: [{ name: "DAN N DUA Team", url: "https://www.danndua.com" }],
  generator: "Next.js",
  keywords: [
    "DAN N DUA",
    "Skincare Canada",
    "Women's Personal Care Canada",
    "Natural Skincare Canada",
    "Luxurious Cream",
    "Cosmetics Canada",
    "Organic Skincare Canada",
    "Dermatologist Approved Cream",
    "Moisturizer for All Skin Types",
    "Canadian Beauty Products",
    "Luxury Skincare Brand",
    "Best Face Cream in Canada",
    "Canadian Skincare Products",
    "Eco-Friendly Cosmetics Canada",
    "Hydrating Cream for Women",
  ],
  referrer: "origin",
  creator: "DAN N DUA Team",
  publisher: "DAN N DUA",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.danndua.com",
  },
  icons: {
    icon: "https://www.danndua.com/favicon.ico",
    apple: "https://www.danndua.com/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.danndua.com",
    title: "DAN N DUA - Canada's Premier Skincare Brand",
    description:
      "Experience luxurious and natural skincare with DAN N DUA. Our premium cream is eco-friendly, dermatologist-approved, and perfect for all skin types. Available in Canada.",
    siteName: "DAN N DUA",
    images: [
      {
        url: "https://www.danndua.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DAN N DUA Cream - Canada's Premier Skincare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@danndua",
    // creator: "@danndua",
    title: "DAN N DUA - Empower Your Beauty Naturally",
    description:
      "Discover DAN N DUA, the premier women's skincare brand offering luxurious and effective solutions for personal care.",
    images: ["https://www.danndua.com/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: '#fff',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-paper">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XDST1KYDK8"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XDST1KYDK8', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="bg-paper">
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
        <Tracker />
      </body>
    </html>
  );
}
