import React from 'react';
import Image from 'next/image';
const Header = () => (
  <header className="w-full relative shadow-sm z-50" style={{ minHeight: '80px', background: 'transparent' }}>
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-8">
         <Image src="/logo.png" alt="Green Construction Logo" width={80} height={30} />   
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li><a href="#" className="hover:text-green-300">Accueil</a></li>
          <li><a href="#solutions" className="hover:text-green-300">Solutions</a></li>
          <li><a href="#realisations" className="hover:text-green-300">Réalisations</a></li>
          <li><a href="#actualites" className="hover:text-green-300">Actualités</a></li>
          <li><a href="#about" className="hover:text-green-300">À Propos</a></li>
        </ul>
      </div>
      <div className="flex gap-2">
        <a href="#contact" className="hidden md:inline-block bg-green-700 text-white px-5 py-2 rounded font-semibold hover:bg-green-800 transition">Demander un devis</a>
      </div>
    </nav>
  </header>
);

export default Header;
