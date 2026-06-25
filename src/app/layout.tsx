import type { Metadata, Viewport } from "next";
import NextTopLoader from 'nextjs-toploader';
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import PageTransition from "@/components/shared/PageTransition";
import SplashScreen from "@/components/shared/SplashScreen";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexicalsoftware.in"),
  title: {
    default: "Lexical Software | Website & App Development Studio — Gurugram, India",
    template: "%s | Lexical Software",
  },
  description:
    "Lexical Software builds professional websites, mobile apps, and web applications for businesses across India. Affordable, fast, and reliable — based in Gurugram. Get a free scope estimate today.",
  keywords: [
    "website development India",
    "app development India",
    "mobile app development",
    "web development Gurugram",
    "website banana hai",
    "website banwana hai",
    "app banwana hai",
    "website development company India",
    "affordable website development",
    "Next.js developer India",
    "React Native developer India",
    "freelance web developer India",
    "startup website development",
    "ecommerce website India",
    "web app development India",
    "website developer Gurugram",
    "software company Gurugram",
    "Lexical Software",
  ],
  authors: [{ name: "Lexical Software", url: "https://lexicalsoftware.in" }],
  creator: "Lexical Software",
  publisher: "Lexical Software",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lexicalsoftware.in",
    siteName: "Lexical Software",
    title: "Lexical Software | Website & App Development Studio",
    description:
      "We build websites, mobile apps, and web applications for businesses across India. Fast delivery, professional quality, affordable pricing.",
    images: [
      {
        url: "/images/logo/lexical-logo-full.jpeg",
        width: 1200,
        height: 630,
        alt: "Lexical Software — Website & App Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lexicalsoftware",
    creator: "@lexicalsoftware",
    title: "Lexical Software | Website & App Development Studio",
    description:
      "We build websites, mobile apps, and web applications for businesses across India.",
    images: ["/images/logo/lexical-logo-full.jpeg"],
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
  alternates: {
    canonical: "https://lexicalsoftware.in",
  },
  verification: {
    google: "VJ6WZOTBC39xZiZGHbJTVjxEsy1XBI2bniFUze_HIzQ",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lexical Software",
  url: "https://lexicalsoftware.in",
  logo: "https://lexicalsoftware.in/images/logo/lexical-mark.jpg",
  description:
    "Lexical Software builds professional websites, mobile apps, and web applications for businesses across India.",
  telephone: ["+91-9144462693", "+91-7415557442"],
  email: "softwarelexical@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: "IN",
  serviceType: [
    "Website Development",
    "Mobile App Development",
    "Web Application Development",
    "E-Commerce Development",
    "Website Maintenance",
  ],
  priceRange: "₹₹",
  openingHours: "Mo-Sa 09:00-20:00",
  sameAs: [
    "https://github.com/lexicalsoftware",
    "https://linkedin.com/company/lexicalsoftware",
    "https://twitter.com/lexicalsoftware",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-base text-ink antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        <SplashScreen />
        <Navbar />
        <NextTopLoader color="#2563EB" />
        <main className="pt-24 lg:pt-28">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}