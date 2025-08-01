import Contact from "@/components/contact/contact";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
  title: "Contact | ViqarDev",
  description:
    "Get in touch with Viqar for collaboration, code review, or development inquiries. Let's create something impactful together!",
  keywords: [
    "Contact Viqar",
    "ViqarDev Contact",
    "Hire Developer",
    "Freelance Web Developer",
    "Collaboration",
    "Indonesia Developer",
  ],
  authors: [{ name: "Viqar 'Ammar Zulfa Mulya" }],
  creator: "Viqar 'Ammar Zulfa Mulya",
  openGraph: {
    title: "Contact | ViqarDev",
    description:
      "Reach out to Viqar for potential projects, questions, or just to connect about tech and development.",
    siteName: "ViqarDev",
    locale: "en_US",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <section className="py-16 md:py-24 flex flex-col justify-center items-center">
      <Contact />
    </section>
  );
};

export default ContactPage;
