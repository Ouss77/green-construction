import { FaBuilding, FaSun, FaLeaf, FaArrowRight } from "react-icons/fa";

const Projects = () => (
  <>
    {/* RÉALISATIONS - AMÉLIORÉ */}
      <section className="bg-gray-50 py-16 md:py-24" id="realisations">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <FaBuilding className="text-green-600" />
              </div>
              <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">
                Notre Portfolio
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-green-600">Réalisations</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Des projets solaires réussis à travers le monde, de la toiture industrielle 
              au parc solaire à grande échelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Parc Solaire en Afrique',
                location: 'Sénégal - 25 MW',
                description: 'Installation d\'un parc solaire pour alimenter une zone industrielle',
                impact: '15 000 tonnes CO₂/an économisées',
                image: '/realisation.jpeg'
              },
              {
                title: 'Toit Industriel en France',
                location: 'Lyon - 2.5 MW',
                description: 'Toiture photovoltaïque pour une usine automobile',
                impact: '40% des besoins énergétiques couverts',
                image: '/realisation.jpeg'
              },
              {
                title: 'Installation Communale',
                location: 'Bordeaux - 1 MW',
                description: 'Équipement des bâtiments publics en panneaux solaires',
                impact: 'Économie de 80 000€/an pour la commune',
                image: '/realisation.jpeg'
              }
            ].map((project, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Image container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <FaSun className="text-2xl" />
                      </div>
                      <span className="text-sm text-white">Projet solaire</span>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                      {project.location}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-6">
                    <FaLeaf />
                    <span>{project.impact}</span>
                  </div>
                  
                  <button className="w-full text-center text-green-600 hover:text-green-700 font-semibold text-sm py-2 border border-green-200 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                    <span>En savoir plus</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Voir tous nos projets
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION SEO - Contenu Textuel Riche */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Expert en Solutions Solaires Photovoltaïques pour Entreprises
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                <strong>GreenTech Solutions</strong> est le partenaire privilégié des entreprises et collectivités 
                pour leurs projets d'<strong>énergie solaire photovoltaïque</strong>. Forts de 15 ans d'expérience, 
                nous accompagnons nos clients de la conception à la maintenance de leurs installations solaires.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Pourquoi opter pour le solaire photovoltaïque en entreprise ?
              </h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Réduction des coûts énergétiques</strong> : Jusqu'à 70% d'économies sur votre facture d'électricité</li>
                <li><strong>Rentabilité garantie</strong> : Retour sur investissement en 5 à 8 ans selon les installations</li>
                <li><strong>Indépendance énergétique</strong> : Réduction de votre dépendance aux fournisseurs d'énergie</li>
                <li><strong>Image écologique</strong> : Valorisation de votre engagement RSE (Responsabilité Sociétale des Entreprises)</li>
                <li><strong>Aides financières</strong> : Éligibilité à diverses subventions et crédits d'impôt</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Nos solutions pour tous types d'entreprises
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-green-700 mb-2">PME & Industries</h4>
                  <p className="text-gray-700">
                    Installation sur toitures industrielles, ombrières de parking, 
                    et solutions d'autoconsommation pour réduire vos coûts opérationnels.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-700 mb-2">Collectivités & Administrations</h4>
                  <p className="text-gray-700">
                    Équipement des bâtiments publics, écoles, hôpitaux et installations 
                    municipales en panneaux solaires photovoltaïques.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-green-500">
                <h4 className="font-bold text-gray-800 mb-2">📞 Besoin d'un conseil personnalisé ?</h4>
                <p className="text-gray-700">
                  Nos experts solaires sont disponibles pour étudier gratuitement la 
                  faisabilité de votre projet et vous proposer une solution sur mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
);

export default Projects;
