import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://heroproperties.in"),
  title: "Hero Properties | Ultra-Luxury 3 & 4 BHK Smart Green Residences",
  description:
    "Welcome to Hero Properties (Hero Homes). Explore signature 3 & 4 BHK luxury residences built with IGBC Gold green standards, biometric wellness, and futuristic smart home features.",
  keywords: [
    "Hero Properties",
    "Hero Homes",
    "Hero Properties in",
    "Hero Properties co in",
    "Hero Luxury Residences",
    "3 BHK Flats Hero Homes",
    "4 BHK Luxury Apartments",
    "Hero Realty New Launch",
  ],
  authors: [{ name: "Hero Properties Authorised Desk" }],
  creator: "Hero Properties Advisory Desk",
  publisher: "Hero Properties Marketing Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "http://heroproperties.in/",
    languages: {
      "en-IN": "http://heroproperties.in/",
      "x-default": "http://heroproperties.co.in/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "http://heroproperties.in/",
    siteName: "Hero Properties",
    title: "Hero Properties | Ultra-Luxury 3 & 4 BHK Residences",
    description:
      "Engineered by the trusted legacy of Hero Enterprise. Experience resort-style clubhouse living, expansive deck balconies, and sustainable green designs.",
    images: [
      {
        url: "/banners/banner1.png",
        width: 1200,
        height: 630,
        alt: "Hero Properties Luxury Residential Township",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero Properties | Luxury Living Engineered",
    description:
      "Ultra-luxury 3 & 4 BHK residences. Download official brochures and schedule priority preview visits.",
    images: ["/banners/banner1.png"],
  },
  other: {
    "theme-color": "#FDFBF7",
    "secondary-domain": "http://heroproperties.co.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-ivory text-charcoal antialiased selection:bg-heroRed selection:text-white">
        <Navbar/>
        {children}
        <FloatingActions/>
        <Footer/>
      </body>
    </html>
  );
}