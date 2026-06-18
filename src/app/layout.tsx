import type { Metadata, Viewport } from "next";
import NextTopLoader from 'nextjs-toploader';
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import PageTransition from "@/components/shared/PageTransition";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  metadataBase: new URL("https://lexicalsoftware.dev"),
  title: {
    default: "Lexical Software | Elite Software Startup & Consulting Group",
    template: "%s",
  },
  description:
    "Lexical Software builds full-stack web applications, APIs, and cloud infrastructure for startups and enterprises. Next.js, React, Java/Spring Boot, and cloud deployment specialists.",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="VJ6WZOTBC39xZiZGHbJTVjxEsy1XBI2bniFUze_HIzQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('lexical-theme');
                  var theme = stored === 'light' ? 'light' : 'dark';
                  document.documentElement.classList.remove('dark', 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-base text-ink antialiased`}
      >
       
        <ThemeProvider>
          <Analytics/>
          <SpeedInsights/>
          <Navbar />
          <NextTopLoader />
          <main className="pt-20">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
