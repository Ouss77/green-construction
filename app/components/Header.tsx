"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solutionsMenuRef = useRef<HTMLLIElement | null>(null);
  const pathname = usePathname();

  const isSolutionsActive =
    pathname === "/solutions" || pathname === "/produits" || pathname === "/conseils";

  const getNavClass = (isActive: boolean) =>
    isActive ? "text-green-600 font-semibold" : "text-gray-800 hover:text-green-600";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showSolutions &&
        solutionsMenuRef.current &&
        !solutionsMenuRef.current.contains(event.target as Node)
      ) {
        setShowSolutions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSolutions]);

  useEffect(() => {
    setShowSolutions(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 min-h-14 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-white"}
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6">
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
            <li>
              <Link href="/about" className={getNavClass(pathname === "/about")}>
                À Propos
              </Link>
            </li>
            <li ref={solutionsMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setShowSolutions((prev) => !prev)}
                className={`${getNavClass(isSolutionsActive)} flex items-center gap-1`}
              >
                Solution
                <svg
                  className={`w-4 h-4 transition-transform ${showSolutions ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showSolutions && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                  <li>
                    <Link
                      href="/produits"
                      className={`block px-4 py-2 hover:bg-gray-50 ${pathname === "/produits" ? "text-green-600 font-semibold" : "text-gray-800"}`}
                      onClick={() => setShowSolutions(false)}
                    >
                      Produits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conseils"
                      className={`block px-4 py-2 hover:bg-gray-50 ${pathname === "/conseils" ? "text-green-600 font-semibold" : "text-gray-800"}`}
                      onClick={() => setShowSolutions(false)}
                    >
                      Conseils
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/realisations" className={getNavClass(pathname === "/realisations")}>
                Réalisations
              </Link>
            </li>
            <li>
              <Link href="/actualites" className={getNavClass(pathname === "/actualites")}>
                Actualités
              </Link>
            </li>
            <li>
              <Link href="/prestataires" className={getNavClass(pathname === "/prestataires")}>
                Prestataires
              </Link>
            </li>
            <li>
              <Link href="/demande-etude" className={getNavClass(pathname === "/demande-etude")}>
                Demande d’étude
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getNavClass(pathname === "/contact")}>
                Contact
              </Link>
            </li>
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
