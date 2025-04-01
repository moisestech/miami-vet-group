import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
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
  title: "Miami Vet Group",
  description: "General & Integrative Animal Hospital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-KXDBJBLVRJ`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KXDBJBLVRJ');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "Miami Vet Group",
              "description": 'Holistic & Traditional pet care in Pinecrest. Call 786-713-0863 for an appointment!',
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12521 S Dixie Hwy",
                "addressLocality": "Pinecrest",
                "addressRegion": "FL",
                "postalCode": "33156",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.6624",
                "longitude": "-80.3339"
              },
              "telephone": "+17867130863",
              "url": "https://miamivetgroup.com",
              "sameAs": [
                "https://www.instagram.com/miamivetgroup/",
                "https://www.facebook.com/miamivetgroup"
              ],
              "openingHours": "Mo-Fr 09:00-17:00",
              "specialties": [
                "Holistic Veterinary Care",
                "Integrative Medicine",
                "Natural Pet Care",
                "Homeopathy",
                "Acupuncture"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
