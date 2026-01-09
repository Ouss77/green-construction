import React from 'react';

const products = [
  {
    img: '/product-pv.jpg',
    title: 'Panneaux Photovoltaïques',
    desc: 'Connaissance du produit, offre selon cahiers des charges. Prêts-pour-montage, contrats terminaux.',
    link: '#',
  },
  {
    img: '/product-onduleur.jpg',
    title: 'Onduleurs',
    desc: 'Conducteur clé du produit. Délai rapides. Prêts-pour-montage, contrats terminaux.',
    link: '#',
  },
  {
    img: '/product-batterie.jpg',
    title: 'Batteries de Stockage',
    desc: 'Conducteur clé des grilles d’équipements. Prêts-pour-montage, contrats terminaux.',
    link: '#',
  },
  {
    img: '/product-kit.jpg',
    title: 'Kit Solaire Clé en Main',
    desc: 'Conducteur clé, “clés en main” d’achats. Prêts-pour-montage, contrats terminaux.',
    link: '#',
  },
];

const Products = () => (
  <section className="bg-white py-10">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-0 border border-gray-100 flex flex-col">
            <img src={item.img} alt={item.title} className="rounded-t-lg h-36 w-full object-cover" loading="lazy" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <a href={item.link} className="mt-auto inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded font-medium border hover:bg-green-700 hover:text-white hover:border-green-700 transition">Voir la fiche technique</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
