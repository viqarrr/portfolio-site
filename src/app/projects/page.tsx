import Projects from "@/components/projects/project-comp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | ViqarDev",
  description:
    "Discover a collection of web and game development projects by Viqar, showcasing skills in React, TypeScript, Unity, and more.",
  keywords: [
    "ViqarDev Projects",
    "Portfolio Projects",
    "Web Projects",
    "Game Projects",
    "React",
    "Unity",
    "Fullstack Developer",
    "JavaScript",
    "Indonesia",
  ],
  authors: [{ name: "Viqar 'Ammar Zulfa Mulya" }],
  creator: "Viqar 'Ammar Zulfa Mulya",
  openGraph: {
    title: "Projects | ViqarDev",
    description:
      "Explore Viqar's web and game development projects and see how ideas turn into impactful digital products.",
    siteName: "ViqarDev",
    locale: "en_US",
    type: "website",
  },
};


const ProjectsPage = () => {
  return (
    <div className="mx-auto w-[90%] flex flex-col justify-center items-center">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
