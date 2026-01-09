import React from 'react';


const Footer = () => (
  <footer className="bg-neutral-900 text-white pt-10 pb-4 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8 border-b border-white/10 pb-6">
      <div className="flex-1 mb-4 md:mb-0">
        <span className="font-bold text-lg">Contact</span>
        <div className="mt-2 text-sm">
          <div>Adresse</div>
          <div>+33 1 25 45 69 89</div>
        </div>
      </div>
      <div className="flex-1 flex flex-wrap gap-4 items-center justify-center md:justify-start">
        <span className="bg-green-700 px-3 py-1 rounded text-xs font-semibold">24/7</span>
        <a href="#solutions" className="hover:underline text-sm">Solutions</a>
        <a href="#blog" className="hover:underline text-sm">Blog</a>
        <a href="#privacy" className="hover:underline text-sm">Politique de confidentialité</a>
      </div>
      <div className="flex-1 flex items-center justify-center md:justify-end gap-4">
        <a href="#" aria-label="Twitter" className="hover:text-green-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 2c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 7.89 4.1 5.92 1.671 2.905c-.423.724-.666 1.562-.666 2.475 0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 0 1 .964 8.1v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.377 4.6 3.417A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-green-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
        <a href="#" aria-label="YouTube" className="hover:text-green-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.993 2.993 0 0 0-2.107-2.117C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.391.569A2.993 2.993 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.993 2.993 0 0 0 2.107 2.117C4.5 20.5 12 20.5 12 20.5s7.5 0 9.391-.569a2.993 2.993 0 0 0 2.107-2.117C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg></a>
        <a href="#" aria-label="Instagram" className="hover:text-green-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.33 2.45 1.297 3.417.967.967 2.14 1.239 3.417 1.297C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.33 3.417-1.297.967-.967 1.239-2.14 1.297-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.33-2.45-1.297-3.417-.967-.967-2.14-1.239-3.417-1.297C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-6">© 2317. Nom de l’entreprise - Tous droits réservés.</div>
  </footer>
);

export default Footer;
