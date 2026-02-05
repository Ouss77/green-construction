import React from 'react';
import { FaSun, FaBolt } from "react-icons/fa";

const Products = () => (
<>
 {/* NOS PRODUITS - AMÉLIORÉ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <FaSun className="text-amber-600" />
              </div>
              <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">
                Notre Catalogue
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-green-600">Produits</span> Photovoltaïques
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Matériel certifié et performant pour toutes vos installations solaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: '/paneau.webp',
                title: 'Panneaux Photovoltaïques',
                description: 'Modules haute performance monocristallins avec garanties de production sur 25 ans.',
                specs: ['Efficacité: 21.5%', 'Garantie: 25 ans', 'Puissance: 400-550W'],
                gradient: 'from-amber-500 to-orange-500'
              },
              {
                img: '/paneau.webp',
                title: 'Onduleurs',
                description: 'Conversion DC/AC optimisée avec monitoring intelligent et haute fiabilité.',
                specs: ['Efficacité: 98.5%', 'Monitoring: WiFi/4G', 'Garantie: 10 ans'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                img: '/paneau.webp',
                title: 'Batteries de Stockage',
                description: 'Systèmes de stockage lithium-ion pour l\'autoconsommation et la continuité de service.',
                specs: ['Capacité: 5-20 kWh', 'Cycles: 6000+', 'Garantie: 10 ans'],
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                img: '/paneau.webp',
                title: 'Kit Solaire Complet',
                description: 'Solutions clé en main pour installations résidentielles et industrielles.',
                specs: ['Tout inclus', 'Installation facile', 'Documentation complète'],
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((product, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-10`}></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                        <FaBolt className="text-xl" />
                      </div>
                      <span className="text-sm text-gray-600">Produit photovoltaïque</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 mb-2">Caractéristiques :</div>
                    <div className="space-y-1">
                      {product.specs.map((spec, specIdx) => (
                        <div key={specIdx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full text-center text-green-600 hover:text-green-700 font-semibold text-sm py-2 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                    Voir la fiche technique
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></>
);

export default Products;
