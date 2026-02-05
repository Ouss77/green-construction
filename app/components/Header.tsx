"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 min-h-[80px] transition-all duration-300
        ${
          scrolled
            ? "bg-gray-100 shadow-md text-gray-800 font-bold"
            : "bg-transparent text-white"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Green Construction Logo"
              width={80}
              height={30}
              priority
            />
          </Link>

          <ul className="hidden md:flex gap-6 font-medium">
            <li><Link href="/about" className="hover:text-green-500">À Propos</Link></li>
            <li><Link href="/solutions" className="hover:text-green-500">Solutions</Link></li>
            <li><Link href="/realisations" className="hover:text-green-500">Réalisations</Link></li>
            <li><Link href="/actualites" className="hover:text-green-500">Actualités</Link></li>
            <li><Link href="/contact" className="hover:text-green-500">Contact</Link></li>
          </ul>
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-green-600 text-white px-5 py-2 rounded font-semibold hover:bg-green-700 transition"
        >
          Demander un devis
        </Link>

        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
