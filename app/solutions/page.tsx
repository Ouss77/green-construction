import Header from "../components/Header";
import { 
  FaLeaf, 
  FaSun, 
  FaSolarPanel, 
  FaWind, 
  FaBolt, 
  FaHome,
  FaWater,
  FaThermometerHalf,
  FaRecycle,
  FaArrowRight,
  FaShieldAlt,
  FaCheckCircle,
  FaChartLine,
  FaCalculator,
  FaCalendarAlt,
  FaStar,
  FaTools
} from "react-icons/fa";
import { FiZap, FiThermometer, FiBatteryCharging } from "react-icons/fi";
import Footer from "../components/Footer";

const solutions = [
  {
    category: "Énergie Solaire",
    icon: <FaSolarPanel className="text-3xl" />,
    color: "from-amber-500 to-orange-500",
    products: [
      {
        name: "Panels Solaires Photovoltaïques",
        description: "Modules haute performance pour production d'électricité propre",
        power: "300W à 550W",
        efficiency: "21.5%",
        warranty: "25 ans",
        image: "/solar-panel.jpg",
        features: ["Haute efficacité", "Résistance aux intempéries", "Garantie produit"]
      },
      {
        name: "Onduleurs Solaires",
        description: "Conversion DC/AC optimisée avec monitoring intelligent",
        power: "3kW à 20kW",
        efficiency: "98.5%",
        warranty: "10 ans",
        image: "/inverter.jpg",
        features: ["Monitoring à distance", "Protection intégrée", "Compatibilité batterie"]
      },
      {
        name: "Systèmes de Montage",
        description: "Structures robustes pour toitures et terrains",
        material: "Aluminium anodisé",
        warranty: "20 ans",
        image: "/mounting.jpg",
        features: ["Ajustable", "Anti-corrosion", "Installation rapide"]
      }
    ]
  },
  {
    category: "Stockage Énergétique",
    icon: <FiBatteryCharging className="text-3xl" />,
    color: "from-green-500 to-emerald-500",
    products: [
      {
        name: "Batteries Lithium-ion",
        description: "Stockage haute capacité pour autoconsommation",
        capacity: "5kWh à 20kWh",
        cycles: "6000+",
        warranty: "10 ans",
        image: "/battery.jpg",
        features: ["Haute densité", "Management intelligent", "Modulaire"]
      },
      {
        name: "Systèmes de Gestion",
        description: "Optimisation de la production et consommation",
        connectivity: "WiFi/4G",
        monitoring: "Temps réel",
        warranty: "5 ans",
        image: "/energy-manager.jpg",
        features: ["Prédiction énergétique", "Pilotage intelligent", "Reporting détaillé"]
      }
    ]
  },
  {
    category: "Chauffage Écologique",
    icon: <FaThermometerHalf className="text-3xl" />,
    color: "from-red-500 to-pink-500",
    products: [
      {
        name: "Pompes à Chaleur Air/Eau",
        description: "Chauffage et eau chaude haute performance",
        cop: "4.5",
        power: "5kW à 16kW",
        warranty: "5 ans",
        image: "/heat-pump.jpg",
        features: ["Inverter", "Silencieux", "Classe A++"]
      },
      {
        name: "Chauffe-Eau Solaire",
        description: "Production d'eau chaude par énergie solaire",
        capacity: "200L à 500L",
        efficiency: "75%",
        warranty: "10 ans",
        image: "/solar-water.jpg",
        features: ["Capteurs vitrés", "Régulation électronique", "Anti-gel"]
      }
    ]
  },
  {
    category: "Gestion de l'Eau",
    icon: <FaWater className="text-3xl" />,
    color: "from-blue-500 to-cyan-500",
    products: [
      {
        name: "Récupérateurs d'Eau Pluviale",
        description: "Systèmes complets pour utilisation eau non potable",
        capacity: "1000L à 10000L",
        material: "Polyéthylène",
        warranty: "15 ans",
        image: "/water-tank.jpg",
        features: ["Filtre intégré", "Pompe immergée", "Anti-UV"]
      },
      {
        name: "Systèmes de Filtration",
        description: "Traitement et purification de l'eau",
        filtration: "0.5 microns",
        flow: "2000L/h",
        warranty: "3 ans",
        image: "/water-filter.jpg",
        features: ["Multi-filtration", "Entretien facile", "Économique"]
      }
    ]
  },
  {
    category: "Isolation & Ventilation",
    icon: <FaHome className="text-3xl" />,
    color: "from-purple-500 to-indigo-500",
    products: [
      {
        name: "Isolation Écologique",
        description: "Matériaux naturels pour une isolation performante",
        materials: ["Ouate cellulose", "Laine de bois", "Liège"],
        rValue: "R-5.0 par pouce",
        warranty: "30 ans",
        image: "/insulation.jpg",
        features: ["Respirant", "Anti-feu", "Régulation hygro"]
      },
      {
        name: "VMC Double Flux",
        description: "Ventilation avec récupération de chaleur",
        efficiency: "90%",
        consumption: "15W",
        warranty: "5 ans",
        image: "/ventilation.jpg",
        features: ["Échangeur haute perf", "Filtre pollen", "Silencieux"]
      }
    ]
  }
];

const kits = [
  {
    name: "Kit Autoconsommation Basique",
    price: "8 900€",
    power: "3kWc",
    production: "3 300 kWh/an",
    savings: "600€/an",
    products: ["6 panneaux 500W", "Onduleur 3kW", "Monitoring", "Installation"],
    bestFor: "Maison individuelle 100m²",
    popular: false
  },
  {
    name: "Kit Autoconsommation Avancé",
    price: "14 500€",
    power: "6kWc",
    production: "6 600 kWh/an",
    savings: "1 200€/an",
    products: ["12 panneaux 500W", "Onduleur 6kW", "Batterie 5kWh", "Monitoring", "Installation"],
    bestFor: "Maison familiale 150m²",
    popular: true
  },
  {
    name: "Kit Autonomie Énergétique",
    price: "24 900€",
    power: "9kWc",
    production: "10 000 kWh/an",
    savings: "1 800€/an",
    products: ["18 panneaux 500W", "Onduleur hybride", "Batterie 10kWh", "Gestionnaire", "Installation complète"],
    bestFor: "Autonomie totale 200m²+",
    popular: false
  }
];

const advantages = [
  {
    title: "Économies Garanties",
    description: "Réduction de 30% à 80% sur vos factures énergétiques",
    icon: <FaChartLine />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Durabilité",
    description: "Produits avec garanties de 10 à 25 ans",
    icon: <FaShieldAlt />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Écologique",
    description: "Réduction de votre empreinte carbone",
    icon: <FaLeaf />,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Autonomie",
    description: "Indépendance vis-à-vis des fournisseurs",
    icon: <FaBolt />,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Valorisation",
    description: "+15% de valeur pour votre bien",
    icon: <FaStar />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Subventions",
    description: "Jusqu'à 50% du coût éligible aux aides",
    icon: <FaCalculator />,
    color: "bg-cyan-100 text-cyan-600"
  }
];

export default function Solutions() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-emerald-950 to-teal-950 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-teal-900/10"></div>
          {/* Solar panel pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-6 gap-4 p-8">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="aspect-square border border-white/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
        
        <Header />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <div className="p-1.5 bg-green-500/20 rounded-full">
                <FaSun className="text-amber-300 text-sm" />
              </div>
              <span className="text-xs font-medium text-green-100 tracking-wide">
                Solutions Énergétiques Intelligentes
              </span>
            </div>
            
            {/* Main title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Votre transition énergétique
              </span>
              <br />
              <span className="text-white text-2xl md:text-4xl">sur mesure</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Découvrez nos solutions complètes pour produire, stocker et optimiser 
              votre énergie, tout en réduisant votre impact environnemental.
            </p>
            
            {/* Quick stats */}
            <div className="flex justify-center gap-8 mb-10">
              {[
                { value: "25 ans", label: "Garantie panneaux" },
                { value: "70%", label: "Économies moyennes" },
                { value: "0 CO₂", label: "Émissions" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-green-300">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaSolarPanel />
                <span>Découvrir nos solutions</span>
              </a>
              
              <a
                href="#simulation"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                <FaCalculator />
                <span>Simuler mes économies</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-16 md:h-20"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,74.7C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
            />
          </svg>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-24">
          
          {/* AVANTAGES */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaStar className="text-green-600" />
                </div>
                <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">
                  Pourquoi Choisir Nos Solutions
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Des bénéfices <span className="text-green-600">multiples</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`p-3 rounded-lg ${advantage.color} inline-flex mb-4`}>
                    {advantage.icon}
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SOLUTIONS PAR CATÉGORIE */}
          <section id="solutions">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaTools className="text-green-600" />
                </div>
                <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">
                  Nos Solutions
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Des produits <span className="text-green-600">haut de gamme</span>
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                Découvrez notre gamme complète de solutions énergétiques durables 
                et performantes.
              </p>
            </div>

            {/* Solutions by category */}
            <div className="space-y-16">
              {solutions.map((category, catIndex) => (
                <div key={catIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Category header */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">{category.category}</h3>
                        <p className="text-white/80 text-sm">Solutions complètes et intégrées</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Products grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.products.map((product, prodIndex) => (
                        <div 
                          key={prodIndex} 
                          className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          {/* Product image */}
                          <div className="h-48 bg-gray-100 flex items-center justify-center">
                            <div className="text-center">
                              <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} text-white inline-flex mb-3`}>
                                {category.icon}
                              </div>
                              <span className="text-gray-500 text-sm">Visualisation produit</span>
                            </div>
                          </div>
                          
                          {/* Product info */}
                          <div className="p-5">
                            <h4 className="font-bold text-gray-800 mb-2">{product.name}</h4>
                            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                            
                            {/* Specifications */}
                            <div className="space-y-2 mb-4">
                              {product.power && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Puissance</span>
                                  <span className="font-semibold">{product.power}</span>
                                </div>
                              )}
                              {product.efficiency && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Efficacité</span>
                                  <span className="font-semibold">{product.efficiency}</span>
                                </div>
                              )}
                              {product.warranty && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Garantie</span>
                                  <span className="font-semibold text-green-600">{product.warranty}</span>
                                </div>
                              )}
                            </div>
                            
                            {/* Features */}
                            <div className="mb-4">
                              <div className="text-xs text-gray-500 mb-2">Caractéristiques :</div>
                              <div className="flex flex-wrap gap-1">
                                {product.features.map((feature, featIndex) => (
                                  <span 
                                    key={featIndex} 
                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            {/* CTA */}
                            <button className="w-full text-center text-green-600 hover:text-green-700 font-semibold text-sm py-2 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                              En savoir plus
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* KITS PRÉCONFIGURÉS */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaCheckCircle className="text-green-600" />
                </div>
                <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">
                  Solutions Clés en Main
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Kits <span className="text-green-600">préconfigurés</span>
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                Des solutions complètes, optimisées et prêtes à installer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {kits.map((kit, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden ${kit.popular ? 'ring-2 ring-green-500 relative' : ''}`}
                >
                  {kit.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Plus Populaire
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Kit header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{kit.name}</h3>
                      <div className="text-3xl font-bold text-green-600 mb-1">{kit.price}</div>
                      <div className="text-sm text-gray-500">TTC avec installation</div>
                    </div>
                    
                    {/* Specifications */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Puissance</span>
                        <span className="font-semibold">{kit.power}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Production annuelle</span>
                        <span className="font-semibold">{kit.production}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Économies annuelles</span>
                        <span className="font-semibold text-green-600">{kit.savings}</span>
                      </div>
                    </div>
                    
                    {/* Products included */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Inclus dans le kit :</div>
                      <ul className="space-y-2">
                        {kit.products.map((product, prodIndex) => (
                          <li key={prodIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 text-xs" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Best for */}
                    <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Idéal pour :</div>
                      <div className="text-sm text-gray-600">{kit.bestFor}</div>
                    </div>
                    
                    {/* CTA */}
                    <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      kit.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                      {kit.popular ? 'Demander un devis' : 'Plus d\'informations'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SIMULATION & CTA */}
          <section id="simulation" className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FaCalculator className="text-green-600" />
                  </div>
                  <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">
                    Simulation Gratuite
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Calculez vos <span className="text-green-600">économies</span>
                </h2>
                
                <p className="text-gray-600 mb-6">
                  En 2 minutes, découvrez combien vous pourriez économiser avec 
                  nos solutions énergétiques.
                </p>
                
                {/* Simulation form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Surface habitable (m²)
                    </label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Ex: 120"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Consommation annuelle (kWh)
                    </label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Ex: 15000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type de toiture
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Tuiles</option>
                      <option>Ardoise</option>
                      <option>Métal</option>
                      <option>Terrasse</option>
                    </select>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Calculer mes économies
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="font-bold text-gray-800 mb-4 text-xl">
                  Exemple de retour sur investissement
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Investissement initial</span>
                    <span className="font-bold text-gray-800">14 500€</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Aides de l'État</span>
                    <span className="font-bold text-green-600">-4 350€</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Économies annuelles</span>
                    <span className="font-bold text-green-600">1 200€/an</span>
                  </div>
                  
                  <div className="p-4 bg-green-600 text-white rounded-lg">
                    <div className="text-center">
                      <div className="text-sm">Retour sur investissement</div>
                      <div className="text-2xl font-bold">8.5 ans</div>
                      <div className="text-sm text-green-200">Rentabilité garantie</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <FaCalendarAlt className="inline mr-2 text-green-500" />
                    Amortissement moyen : 7 à 10 ans selon configuration
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="text-center">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg overflow-hidden">
              <div className="relative">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-full">
                    <FaSun className="text-amber-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Prêt pour votre <span className="text-green-600">transition énergétique</span> ?
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm">
                  Nos experts vous accompagnent de l'étude à l'installation pour 
                  une solution parfaitement adaptée à vos besoins.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow"
                  >
                    <FaArrowRight />
                    <span>Demander un devis gratuit</span>
                  </a>
                  
                  <a
                    href="tel:+33123456789"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border"
                  >
                    <span>📞 01 23 45 67 89</span>
                  </a>
                </div>
                
                <div className="mt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-center gap-4">
                  <span>✅ Étude gratuite</span>
                  <span>✅ Installation certifiée</span>
                  <span>✅ Suivi personnalisé</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </>
  );
}