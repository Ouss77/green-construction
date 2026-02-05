import React from 'react';

import { FaChartLine, FaCog, FaHandshake, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import { FiZap } from 'react-icons/fi';
const Expertise = () => (
<>
{/* NOS EXPERTISES - AMÉLIORÉ */}
      <section className="bg-gray-50 py-16 md:py-24" id="expertise">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <FaLightbulb className="text-green-600" />
              </div>
              <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">
                Notre Savoir-Faire
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-green-600">Expertises</span> Solaires
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Un accompagnement complet, de l'étude initiale à la maintenance, 
              pour vos projets photovoltaïques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaChartLine className="text-2xl" />,
                title: 'Étude & Conseil',
                description: 'Analyse de faisabilité, dimensionnement optimisé et conseils stratégiques pour vos projets solaires.',
                features: ['Étude de rentabilité', 'Dimensionnement précis', 'Planification stratégique'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <FaCog className="text-2xl" />,
                title: 'Fourniture de Matériel',
                description: 'Matériel photovoltaïque certifié et kits prêts-à-installer pour tous types de projets.',
                features: ['Panneaux certifiés', 'Onduleurs performants', 'Accessoires complets'],
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: <FiZap className="text-2xl" />,
                title: 'Kits Solaires Sur Mesure',
                description: 'Solutions clé en main adaptées spécifiquement à vos besoins énergétiques.',
                features: ['Personnalisation totale', 'Intégration batterie', 'Monitoring inclus'],
                gradient: 'from-amber-500 to-orange-500'
              },
              {
                icon: <FaHandshake className="text-2xl" />,
                title: 'Suivi & Maintenance',
                description: 'Accompagnement post-installation et maintenance préventive pour une performance optimale.',
                features: ['Monitoring 24/7', 'Maintenance préventive', 'Support technique'],
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((expertise, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${expertise.gradient} rounded-t-xl`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${expertise.gradient} rounded-lg flex items-center justify-center text-white mb-6`}>
                    {expertise.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {expertise.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {expertise.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {expertise.features.map((feature, featIdx) => (
                      <li key={featIdx} className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full text-center text-green-600 hover:text-green-700 font-semibold text-sm py-3 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                    Découvrir cette expertise
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></>
);

export default Expertise;
