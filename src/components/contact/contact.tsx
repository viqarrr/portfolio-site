"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Mail, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utilities/send-email";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const onSubmit = (data: FormData) => {
      setIsSubmitting(true);
      sendEmail(data);
      
      setTimeout(() => {
        toast("Message sent!", {
          description: "Thank you for your message. We'll get back to you soon.",
        });
  
        reset();
        setIsSubmitting(false);
      }, 1500);
    };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-8 md:py-0 px-5 lg:px-0">
      <div className="container max-w-6xl mx-auto">
        <Button asChild variant="ghost" className="mb-6 scale-transition -ml-3">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
              Get In Touch
            </h1>

            <p
              className="text-muted-foreground mb-8 max-w-md "
              style={{ animationDelay: "200ms" }}
            >
              I&apos;m always interested in new opportunities, collaborations,
              or just chatting about web development and design. Feel free to
              reach out!
            </p>

            <div className="space-y-6 " style={{ animationDelay: "300ms" }}>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary dark:bg-accent p-3 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:viqarmulya@gmail.com"
                      className="hover-underline"
                    >
                      viqarmulya@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary dark:bg-accent p-3 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    Surabaya, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-card rounded-lg shadow-sm p-6 md:p-8 ring-transition "
            style={{ animationDelay: "500ms" }}
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    {...register("email")}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject of your message"
                  {...register("subject")}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  {...register("message")}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full scale-transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
