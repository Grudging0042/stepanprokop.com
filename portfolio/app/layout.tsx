import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";
import { ViewTransitionsProvider } from "@/components/transitions/ViewTransitionsProvider";
import { siteConfig } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.ui-lab.cz"),
  title: "Štěpán Prokop - Product Designer",
  description:
    "Portfolio of Štěpán Prokop, a product designer based in Prague, Czechia. Showcasing design projects, interactive components, and blog articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://umami.stepanprokop.com/script.js"
          data-website-id="98c73d4b-c578-4853-9086-5a9717022103"
          strategy="afterInteractive"
        />
        {/* Structured Data */}
        <PersonJsonLd
          person={{
            name: siteConfig.name,
            url: siteConfig.url,
            jobTitle: "Product Designer",
            description: siteConfig.description,
            address: {
              addressLocality: "Prague",
              addressCountry: "CZ",
            },
          }}
        />
        <WebsiteJsonLd
          website={{
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            author: {
              name: siteConfig.name,
              url: siteConfig.url,
            },
          }}
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <ViewTransitionsProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <div className="flex min-h-screen flex-col">
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ViewTransitionsProvider>
      </body>
    </html>
  );
}
