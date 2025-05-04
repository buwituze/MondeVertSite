import type { Metadata } from "next";
import { Inter, Unbounded, Space_Grotesk, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

// For paragraphs and general text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// For headers
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

// For subheaders
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// For hero section special text
const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MondeVert",
  description: "Art, Technology, Culture for a sustainable future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${unbounded.variable} ${spaceGrotesk.variable} ${pacifico.variable} antialiased`}
      >
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
