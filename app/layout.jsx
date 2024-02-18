import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Footer from "@/components/ui/Footer";
import { Canvas, useFrame } from '@react-three/fiber';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next-level",
  description: "This is the landing page!",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <Hero/>
        <Services />
        {children}
        <Footer />
        </body>
    </html>
  );
}
