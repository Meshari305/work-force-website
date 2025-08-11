import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Work Force - Fast Staffing in Saudi Arabia",
  description: "Saudi staffing & temporary staffing company. Global hiring from 39+ countries with full compliance. Request staffing today.",
  keywords: "Saudi staffing company, temporary staffing Saudi Arabia, fast recruitment GCC, hire in Saudi Arabia",
  authors: [{ name: "Work Force" }],
  creator: "Work Force",
  publisher: "Work Force",
  metadataBase: new URL('https://workforce.sa'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: "Work Force - Fast Staffing in Saudi Arabia",
    description: "Hire fast in Saudi Arabia — from anywhere in 45 days. Temporary staffing, recruitment, GRO & business setup.",
    url: 'https://workforce.sa',
    siteName: 'Work Force',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Work Force - Fast Staffing in Saudi Arabia",
    description: "Hire fast in Saudi Arabia — from anywhere in 45 days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${montserrat.variable} ${roboto.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
