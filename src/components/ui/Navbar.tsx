"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-yellow-400 border-b border-gray-200 transition-all duration-300 ease-in-out shadow-sm ${
        scrolled ? "py-1 shadow-md" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/next.svg"
            alt="AAT Logo"
            width={scrolled ? 28 : 36}
            height={scrolled ? 28 : 36}
            className="object-contain transition-all duration-300"
          />
          <span
            className={`text-base font-semibold text-white whitespace-nowrap transition-all duration-300 ${
              scrolled ? "text-sm" : "text-lg"
            }`}
          >
            AAT Business Solutions
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-green-200 transition-colors duration-200">Home</Link>
          <Link href="/#services" className="hover:text-green-200 transition-colors duration-200">Services</Link>
          <Link href="/header-pages/about-us" className="hover:text-green-200 transition-colors duration-200">About</Link>
          <Link href="/contact-pages" className="hover:text-green-200 transition-colors duration-200">Contact</Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-600 to-yellow-400 border-t border-gray-200 px-6 pb-4">
          <nav className="flex flex-col gap-4 text-white font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/header-pages/about-us" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact-pages" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
