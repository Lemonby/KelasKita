"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white transition-shadow ${
        scrolled ? "shadow-md backdrop-blur-sm" : ""
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/logo-navbar-clean.png"
            alt="Logo KelasKita"
            width={110}
            height={90}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => {
            const isActive =
              (link.href === "/" && pathname === "/") ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link relative py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? "nav-link-active font-semibold text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2.5 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="mobile-menu border-t border-slate-200 bg-white px-6 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-2">
            {navigationLinks.map((link) => {
              const isActive =
                (link.href === "/" && pathname === "/") ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`mobile-menu-item flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
