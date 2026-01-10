import React from 'react';

const stats = [
  { value: '+150', label: 'MW Installés' },
  { value: '20+', label: 'Pays Intervenus' },
  { value: '500+', label: 'Projets Réalisés' },
];

const Stats = () => (
  <section className="bg-white py-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-700">Nos Chiffres</h2>
      <div className="flex flex-wrap justify-center gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-green-700 mb-1">{stat.value}</span>
            <span className="text-lg text-gray-700 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
