import React from 'react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "EcoEnergy Solutions",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      sector: "Énergie"
    },
    {
      id: 2,
      name: "BuildTech Industries",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      sector: "Construction"
    },
    {
      id: 3,
      name: "Solar Power France",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",
      sector: "Énergie Solaire"
    },
    {
      id: 4,
      name: "Green Materials Co",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      sector: "Matériaux"
    },
    {
      id: 5,
      name: "ThermoTech Systems",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      sector: "Thermique"
    },
    {
      id: 6,
      name: "Isolation Plus",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
      sector: "Isolation"
    },
    {
      id: 7,
      name: "WindPower Europe",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&h=300&fit=crop",
      sector: "Éolien"
    },
    {
      id: 8,
      name: "Smart Home Tech",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      sector: "Technologie"
    }
  ];

  // Dupliquer les partenaires pour un défilement infini
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-700">Nos Partenaires</h2>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ensemble pour un avenir durable
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les meilleurs acteurs du secteur pour vous offrir des solutions d'excellence
          </p>
        </div>

        {/* Carrousel de logos - Défilement automatique */}
        <div className="relative mb-16">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                style={{ width: '280px' }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {partner.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {partner.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays pour effet de fondu */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-green-100">Partenaires</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15</div>
            <div className="text-green-100">Années d'expertise</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-green-100">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-green-100">Satisfaction client</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Vous souhaitez devenir partenaire ?
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;