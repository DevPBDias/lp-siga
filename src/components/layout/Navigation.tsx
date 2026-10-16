"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/src/constants/navLinks";
import instagramIcon from "@/src/assets/icons/instagram.png";
import instagramIconGreen from "@/src/assets/icons/instagram-green.png";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/";

export function NavigationLinks() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-md shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span
              className={`font-bebas tracking-tight transition-all duration-500 ${isScrolled ? "text-xl text-[#2c5128]" : "text-2xl text-white"}`}
            >
              SIGA Cattle
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap text-xs font-medium font-inter transition-colors duration-300 relative group xl:text-sm ${isScrolled ? "text-[#2c5128]/70 hover:text-[#2c5128]" : "text-white/70 hover:text-white"}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-[#2c5128]" : "bg-white"}`}
                />
              </a>
            ))}
          </div>

          {/* Instagram link */}
          <div className="hidden lg:flex items-center gap-4">
            {isScrolled ? (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do SIGA Cattle"
                className={`inline-flex size-10 items-center justify-center rounded-sm transition-all duration-500 hover:scale-105`}
              >
                <Image src={instagramIconGreen} alt="" width={28} height={28} />
              </a>
            ) : (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do SIGA Cattle"
                className={`inline-flex size-10 items-center justify-center rounded-sm transition-all duration-500 hover:scale-105`}
              >
                <Image src={instagramIcon} alt="" width={28} height={28} />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 overflow-y-auto overscroll-contain bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex min-h-full flex-col px-6 pb-6 pt-24 sm:px-8 sm:pt-28 sm:pb-8">
          {/* Navigation Links */}
          <div className="flex flex-1 flex-col justify-center gap-4 py-6 sm:gap-5">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`max-w-full break-words font-display text-[clamp(1.75rem,8vw,3rem)] leading-[0.95] text-foreground transition-all duration-500 hover:text-muted-foreground ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Instagram link */}
          <div
            className={`flex gap-4 border-t border-foreground/10 pt-5 transition-all duration-500 sm:pt-8 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do SIGA Cattle"
              className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-foreground text-base text-background"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src={instagramIcon} alt="" width={20} height={20} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
