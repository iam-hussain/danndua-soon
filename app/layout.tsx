import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.danndua.com"),
  title: {
    default: "DAN N DUA - Empower Your Beauty Naturally",
    template: "%s | DAN N DUA",
  },
  description: "DAN N DUA offers luxurious, effective, and safe skincare solutions to empower women. Explore our premier skincare cream and experience the perfect blend of science and nature.",
  applicationName: "DAN N DUA",
  authors: [
    { name: "DAN N DUA Team", url: "https://www.danndua.com" },
  ],
  generator: "Next.js",
  keywords: [
    "DAN N DUA",
    "Skincare",
    "Women's Personal Care",
    "Natural Skincare",
    "Luxurious Cream",
  ],
  referrer: "origin",
  themeColor: "#eee5f3",
  colorScheme: "light",
  viewport: "width=device-width, initial-scale=1",
  creator: "DAN N DUA Team",
  publisher: "DAN N DUA",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.danndua.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.danndua.com",
    title: "DAN N DUA - Empower Your Beauty Naturally",
    description:
      "Experience luxurious and safe skincare with DAN N DUA. Discover our premium cream that combines the best of science and nature.",
    siteName: "DAN N DUA",
    images: [
      {
        url: "https://www.danndua.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DAN N DUA Cream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@danndua",
    creator: "@danndua",
    title: "DAN N DUA - Empower Your Beauty Naturally",
    description:
      "Discover DAN N DUA, the premier women's skincare brand offering luxurious and effective solutions for personal care.",
    images: ["https://www.danndua.com/twitter-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-paper">
      <body className="bg-paper">
            <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
