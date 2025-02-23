import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const inter = Inter({ subsets:["latin"]});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pageTitle = "Modern Steel Railing";
export const metadata: Metadata = {
  title : `${pageTitle}`,
  description: "Enhance your space with premium steel railings, custom window and gate designs. Offering unmatched strength, safety, and sleek aesthetics for every project. Built to last, crafted to impress.",
  twitter: {
    card:"summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
