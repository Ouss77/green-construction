import React from 'react';

const projects = [
  {
    img: '/realisation.jpeg',
    title: 'Parc Solaire en Afrique',
    link: '#',
  },
  {
    img: '/realisation.jpeg',
    title: 'Toit Industriel en France',
    link: '#',
  },
  {
    img: '/realisation.jpeg',
    title: 'Installation Communale',
    link: '#',
  },
];

const Projects = () => (
  <section className="bg-gray-100 py-12" id="realisations">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-700">Nos Réalisations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden group">
            <img src={item.img} alt={item.title} className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="p-5 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <a href={item.link} className="mt-auto flex items-center text-green-700 font-medium hover:underline">En savoir plus <span className="ml-2">&rarr;</span></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
