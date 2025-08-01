"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-5 left-0 right-0 z-50 transition-all duration-300"
      )}
    >
      <div
        className={cn(
          "w-[90%] lg:w-[90%]  mx-auto transition-all duration-500 ease-in-out",
          scrolled ? "w-[90%] lg:w-[60%]" : ""
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between",
            "rounded-2xl px-4 py-2",
            "bg-background/90 backdrop-blur-lg",
            "border border-primary/5 dark:border-primary/10",
            "shadow-[0_5px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_30px_rgba(255,255,255,0.02)]"
          )}
        >
          <Link
            href="/"
            className="font-raleway text-lg font-bold relative group flex items-center gap-2"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="/logo.svg"
                alt="Avatar"
                className="rounded-none"
              />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            VIQAR.DEV
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover-underline text-sm font-medium relative group"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <ThemeToggle hideOnMobile/>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in mt-2">
            <div className="flex flex-col space-y-4 rounded-xl bg-background/90 backdrop-blur-lg p-4 border border-primary/5 dark:border-primary/10 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover-underline text-sm font-medium py-2"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
