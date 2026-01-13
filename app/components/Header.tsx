// components/Header.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";


const Header = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  return (
    <header className="w-full relative shadow-sm z-50 min-h-[80px] bg-transparent">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Green Construction Logo"
              width={80}
              height={30}
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex gap-6 text-white font-medium relative">
            <li><Link href="/about" className="hover:text-green-300">À Propos</Link></li>
            <li className="relative">
              <button
                className="hover:text-green-300 focus:outline-none flex items-center gap-1"
                onClick={() => setShowSolutions((v) => !v)}
                onBlur={() => setTimeout(() => setShowSolutions(false), 150)}
                aria-haspopup="true"
                aria-expanded={showSolutions}
                type="button"
              >
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {showSolutions && (
                <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded shadow-lg z-50 animate-fade-in">
                  <li>
                    <Link href="/solutions/kits" className="block px-4 py-2 hover:bg-green-100" onClick={() => setShowSolutions(false)}>
                      Kits sélectionnés (sans prix)
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/fourniture" className="block px-4 py-2 hover:bg-green-100" onClick={() => setShowSolutions(false)}>
                      Fourniture matériel PV
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/etudes" className="block px-4 py-2 hover:bg-green-100" onClick={() => setShowSolutions(false)}>
                      Études
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li><Link href="/realisations" className="hover:text-green-300">Réalisations</Link></li>
            <li><Link href="/actualites" className="hover:text-green-300">Actualités</Link></li>
            <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
          </ul>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-green-700 text-white px-5 py-2 rounded font-semibold hover:bg-green-800 transition"
        >
          Demander un devis
        </Link>

        {/* Mobile */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
