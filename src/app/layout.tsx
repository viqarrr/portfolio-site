import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/root/footer";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/root/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); 

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
}); 

export const metadata: Metadata = {
  icons: {
    icon: '/icon.svg',
  },
  title: "ViqarDev | Portfolio",
  description:
    "Explore the portfolio of Viqar 'Ammar Zulfa Mulya, a web and game developer passionate about building creative, functional, and impactful digital experiences.",
  keywords: [
    "Viqar",
    "ViqarDev",
    "Portfolio",
    "Web Developer",
    "Game Developer",
    "React",
    "TypeScript",
    "Unity",
    "Frontend",
    "Backend",
    "Indonesia",
  ],
  authors: [{ name: "Viqar 'Ammar Zulfa Mulya"}],
  creator: "Viqar 'Ammar Zulfa Mulya",
  openGraph: {
    title: "ViqarDev | Portfolio",
    description:
      "Explore the projects and skills of Viqar, a full-stack developer with a passion for both web and game development.",
    siteName: "ViqarDev",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
