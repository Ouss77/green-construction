import React from 'react';

const expertise = [
  {
    icon: (
      <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4l9 5-9 5-9-5 9-5z" /></svg>
    ),
    title: 'Étude & Conseil',
    desc: 'Formulation de produits. Délai rapides. Prêts-pour-montage, contrats terminaux.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: 'Fourniture de Matériel',
    desc: 'Constitution de kits prédéfinis. Délai rapides. Prêts-pour-montage, contrats terminaux.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: 'Kits Solaires Sur Mesure',
    desc: 'Constitution de kits spécifiques. Délai rapides. Prêts-pour-montage, contrats terminaux.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4-4-4M7 8l-4 4 4 4" /></svg>
    ),
    title: 'Suivi & Maintenance',
    desc: 'Suivi de projets. Délai rapides. Prêts-pour-montage, contrats terminaux.',
  },
];

const Expertise = () => (
  <section className="bg-white py-12" id="expertise">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Nos Expertises</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {expertise.map((item, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center border border-gray-100">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <a href="#" className="mt-auto inline-block bg-green-700 text-white px-5 py-2 rounded font-medium hover:bg-green-800 transition">En savoir plus</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
