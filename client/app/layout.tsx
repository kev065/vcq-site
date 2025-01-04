import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Providers } from "./providers";
import BackToTop from "./components/back-to-top";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsent from "./components/CookieConsent";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Valcheq Technologies",
    template: "%s | Valcheq Technologies",
  },
  description:
    "Empowering businesses with cutting-edge web development, data analytics, and AI solutions. Valcheq Technologies offers custom website and app development, data analysis services, chatbots and AI-powered applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load vanilla-cookieconsent library */}
        <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.css"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
        <CookieConsent />
      </body>
    </html>
  );
}