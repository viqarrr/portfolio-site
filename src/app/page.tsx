import About from "@/components/home/about";
import ContactSection from "@/components/home/contact-section";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import WorkExperience from "@/components/home/work-experience";
import { Metadata } from "next";

export const metadata: Metadata = {
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
export default function Home() {
  return (
    <>
      <main className="w-full lg:w-[90%] mx-auto flex flex-col justify-center items-center">
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <ContactSection />
      </main>
    </>
  );
}
