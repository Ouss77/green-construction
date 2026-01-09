import React from 'react';

const Header = () => (
  <header className="w-full bg-white shadow-sm sticky top-0 z-50">
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-8">
        <a href="#" className="text-2xl font-bold tracking-tight text-gray-900">LOGO</a>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-green-700">Accueil</a></li>
          <li><a href="#solutions" className="hover:text-green-700">Solutions</a></li>
          <li><a href="#realisations" className="hover:text-green-700">Réalisations</a></li>
          <li><a href="#actualites" className="hover:text-green-700">Actualités</a></li>
          <li><a href="#about" className="hover:text-green-700">À Propos</a></li>
        </ul>
      </div>
      <div className="flex gap-2">
        <a href="#contact" className="hidden md:inline-block bg-green-700 text-white px-5 py-2 rounded font-semibold hover:bg-green-800 transition">Demander un devis</a>
      </div>
    </nav>
  </header>
);

export default Header;
