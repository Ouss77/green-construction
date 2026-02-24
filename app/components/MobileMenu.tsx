// components/MobileMenu.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "À Propos" },
  { href: "/solutions", label: "Solutions", sub: [
    { href: "/produits", label: "Produits" },
    { href: "/conseils", label: "Conseils" },
  ] },
  { href: "/realisations", label: "Réalisations" },
  { href: "/actualites", label: "Actualités" },
  { href: "/prestataires", label: "Prestataires" },
  { href: "/demande-etude", label: "Demande d’étude" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Burger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
        className="text-gray-800 focus:outline-none"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="4" y1="7" x2="24" y2="7" />
          <line x1="4" y1="14" x2="24" y2="14" />
          <line x1="4" y1="21" x2="24" y2="21" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setOpen(false)} />
      )}

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-900 text-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-2xl"
          aria-label="Fermer le menu"
        >
          ×
        </button>

        <ul className="flex flex-col gap-6 p-8 mt-12 font-medium">
          {links.map(link => (
            <li key={link.href} className="relative">
              {link.sub ? (
                <>
                  <button
                    className={`w-full text-left flex items-center justify-between focus:outline-none px-2 py-2 rounded transition-colors ${
                      pathname === "/solutions" || pathname === "/produits" || pathname === "/conseils"
                        ? "text-green-200 bg-white/10"
                        : "hover:text-green-200 bg-white/5"
                    }`}
                    onClick={() => setOpenSub(openSub === link.href ? null : link.href)}
                  >
                    {link.label}
                    <svg className={`w-4 h-4 ml-2 transition-transform ${openSub === link.href ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openSub === link.href && (
                    <ul className="bg-white text-green-900 rounded-xl shadow-xl mt-2 mb-2 overflow-hidden animate-fade-in border border-green-100">
                      {link.sub.map(sublink => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            onClick={() => { setOpen(false); setOpenSub(null); }}
                            className={`block px-6 py-3 hover:bg-green-50 hover:text-green-700 font-medium transition ${pathname === sublink.href ? "text-green-700 bg-green-50" : ""}`}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={pathname === link.href ? "text-green-300" : "hover:text-green-300"}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
