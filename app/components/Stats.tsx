import React from 'react'
import { FaBolt, FaGlobeEurope, FaCheckCircle, FaTrophy } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

const Stats = () => (
<>

      {/* STATISTIQUES - AMÉLIORÉ */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <FiTrendingUp className="text-white" />
              </div>
              <span className="font-semibold text-green-100 uppercase tracking-wide text-xs">
                Notre Impact
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Des chiffres qui <span className="text-amber-300">parlent</span>
            </h2>
            
            <p className="text-green-100 max-w-3xl mx-auto text-lg">
              Plus d'une décennie d'expertise solaire au service des entreprises et collectivités.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { 
                value: '+150', 
                label: 'MW Installés', 
                description: 'Puissance totale installée',
                icon: <FaBolt />
              },
              { 
                value: '20+', 
                label: 'Pays Intervenus', 
                description: 'À travers le monde',
                icon: <FaGlobeEurope />
              },
              { 
                value: '500+', 
                label: 'Projets Réalisés', 
                description: 'Depuis notre création',
                icon: <FaCheckCircle />
              },
              { 
                value: '15+', 
                label: 'Années d\'Expertise', 
                description: 'Depuis 2009',
                icon: <FaTrophy />
              }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="text-center group"
              >
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-green-200">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</>
);

export default Stats;
