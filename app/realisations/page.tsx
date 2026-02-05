import Header from "../components/Header";
import { 
  FaLeaf, 
  FaMapMarkerAlt, 
  FaTools, 
  FaArrowRight, 
  FaBuilding,
  FaHome,
  FaCity,
  FaIndustry,
  FaUsers,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";
import { FiClock, FiTrendingUp } from "react-icons/fi";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Éco-Résidence Lumière",
    location: "Lyon, France",
    category: "Résidentiel",
    categoryIcon: <FaHome />,
    image: "/real1.jpg",
    description: "Construction d'une résidence basse consommation intégrant des matériaux biosourcés et des panneaux solaires.",
    size: "3 200 m²",
    duration: "18 mois",
    clients: "24 familles",
    impact: "Réduction de 65% de la consommation énergétique",
    features: ["Matériaux biosourcés", "Panneaux solaires", "Récupération eaux pluies", "Toiture végétalisée"],
    completed: "2024"
  },
  {
    title: "Bureaux GreenTech Campus",
    location: "Paris La Défense",
    category: "Tertiaire",
    categoryIcon: <FaBuilding />,
    image: "/real2.jpg",
    description: "Rénovation complète de bureaux avec optimisation énergétique et espaces végétalisés.",
    size: "8 500 m²",
    duration: "24 mois",
    clients: "GreenTech Corporation",
    impact: "Certification BREEAM Excellence",
    features: ["Façade végétale", "Géothermie", "Éclairage intelligent", "Mobilité douce"],
    completed: "2023"
  },
  {
    title: "Maison Passive Bois Horizon",
    location: "Annecy, Haute-Savoie",
    category: "Maison individuelle",
    categoryIcon: <FaHome />,
    image: "/real3.jpg",
    description: "Maison passive en structure bois, isolation naturelle et autonomie énergétique.",
    size: "180 m²",
    duration: "10 mois",
    clients: "Famille Martin",
    impact: "Autonomie énergétique à 85%",
    features: ["Structure bois", "Triple vitrage", "VMC double flux", "Puits canadien"],
    completed: "2024"
  },
  {
    title: "Centre Commercial Éco-Responsable",
    location: "Nantes",
    category: "Commercial",
    categoryIcon: <FaCity />,
    image: "/real4.jpg",
    description: "Premier centre commercial français à bilan carbone positif.",
    size: "15 000 m²",
    duration: "36 mois",
    clients: "Groupe Horizon",
    impact: "Bilan carbone positif",
    features: ["Toiture photovoltaïque", "Recyclage des eaux", "Charte éco-commerces", "Bornes électriques"],
    completed: "2023"
  },
  {
    title: "Usine BioMateriaux",
    location: "Toulouse",
    category: "Industriel",
    categoryIcon: <FaIndustry />,
    image: "/real5.jpg",
    description: "Construction d'une usine de production de matériaux écologiques.",
    size: "12 000 m²",
    duration: "20 mois",
    clients: "BioMateriaux SAS",
    impact: "Production zéro déchet",
    features: ["Isolation paille", "Chauffage biomasse", "Circuit fermé eau", "Éclairage naturel"],
    completed: "2024"
  },
  {
    title: "École Verte du Futur",
    location: "Bordeaux",
    category: "Public",
    categoryIcon: <FaUsers />,
    image: "/real6.jpg",
    description: "École maternelle et primaire conçue pour l'apprentissage en symbiose avec la nature.",
    size: "2 800 m²",
    duration: "14 mois",
    clients: "Ville de Bordeaux",
    impact: "Réduction de 70% des coûts énergétiques",
    features: ["Classes extérieures", "Potager pédagogique", "Filtrage naturel air", "Bois local"],
    completed: "2023"
  }
];

const categories = [
  { name: "Tous", count: 12, icon: <FaBuilding />, active: true },
  { name: "Résidentiel", count: 5, icon: <FaHome /> },
  { name: "Tertiaire", count: 3, icon: <FaBuilding /> },
  { name: "Commercial", count: 2, icon: <FaCity /> },
  { name: "Industriel", count: 1, icon: <FaIndustry /> },
  { name: "Public", count: 1, icon: <FaUsers /> }
];

const stats = [
  { value: "45+", label: "Projets réalisés", icon: <FaCheckCircle /> },
  { value: "12", label: "Villes françaises", icon: <FaMapMarkerAlt /> },
  { value: "85%", label: "Économie énergétique moyenne", icon: <FiTrendingUp /> },
  { value: "98%", label: "Clients satisfaits", icon: <FaUsers /> }
];

export default function Realisations() {
  return (
    <>
      {/* EN-TÊTE AMÉLIORÉE */}
      <div className="relative min-h-[70vh] bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <Header />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <FaLeaf className="text-emerald-300 animate-pulse" />
              <span className="text-sm font-medium text-emerald-100">
                Notre Portfolio
              </span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Nos <span className="text-emerald-300">Réalisations</span>
            </h1>
            
            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-emerald-100/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Découvrez des projets durables conçus pour allier performance,
              esthétique et respect de l'environnement.
            </p>
            
            {/* Statistiques en-tête */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-2xl text-emerald-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </div>
                  <div className="text-sm text-emerald-200 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicateur de défilement */}
            <div className="animate-bounce mt-8">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vague décorative améliorée */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20 md:h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            />
          </svg>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          
          {/* FILTRES PAR CATÉGORIES */}
          <section className="mb-16">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className={`px-5 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    cat.active 
                      ? 'bg-green-600 text-white shadow-lg transform scale-105' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow hover:shadow-md'
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  {cat.name}
                  <span className={`text-sm px-2 py-0.5 rounded-full ${
                    cat.active 
                      ? 'bg-white/20' 
                      : 'bg-gray-100'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* INTRODUCTION */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Des projets concrets, <span className="text-green-600">un impact réel</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chaque réalisation est pensée pour réduire l'empreinte carbone,
              améliorer le confort et créer de la valeur durable pour nos clients.
            </p>
          </div>

          {/* GRILLE DE PROJETS */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image avec overlay et informations */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Badge de catégorie */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                      {project.categoryIcon}
                      {project.category}
                    </span>
                    <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">
                      {project.completed}
                    </span>
                  </div>
                  
                  {/* Localisation */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm">
                    <FaMapMarkerAlt className="text-emerald-300" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Contenu du projet */}
                <div className="p-6">
                  {/* Titre */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Caractéristiques principales */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Superficie</span>
                      <span className="font-semibold">{project.size}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Durée</span>
                      <div className="flex items-center gap-1 font-semibold">
                        <FiClock className="text-green-500" />
                        {project.duration}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Impact</span>
                      <span className="font-semibold text-green-600">{project.impact}</span>
                    </div>
                  </div>

                  {/* Features sous forme de badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bouton Voir le projet */}
                  <a
                    href={`/realisations/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center justify-between w-full group/btn"
                  >
                    <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      Voir le projet
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover/btn:bg-green-200 transition-colors">
                        <FaArrowRight className="text-green-600 group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </section>

          {/* TEMOIGNAGES CLIENTS */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-12 shadow-lg">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Ils nous ont fait confiance
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Découvrez ce que nos clients disent de nos réalisations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sophie Martin",
                    role: "Directrice GreenTech",
                    project: "Bureaux GreenTech Campus",
                    quote: "Une transformation spectaculaire de nos bureaux. Notre équipe est ravie des nouveaux espaces de travail.",
                    avatar: "/client1.jpg"
                  },
                  {
                    name: "Pierre Lambert",
                    role: "Propriétaire",
                    project: "Maison Passive Bois",
                    quote: "Notre maison passive nous fait économiser 80% sur nos factures énergétiques. Un investissement rentable et écologique.",
                    avatar: "/client2.jpg"
                  },
                  {
                    name: "Marie Dubois",
                    role: "Maire adjointe",
                    project: "École Verte du Futur",
                    quote: "Une école qui inspire nos enfants à respecter l'environnement. Les parents et enseignants sont conquis.",
                    avatar: "/client3.jpg"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <FaUsers className="text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                    <div className="text-sm font-medium text-green-600">
                      {testimonial.project}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA AVANTAGES */}
          <section className="mb-20">
            <div className="relative bg-white rounded-3xl p-12 shadow-xl overflow-hidden">
              {/* Éléments décoratifs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="p-3 bg-green-100 rounded-full">
                    <FaChartLine className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Pourquoi choisir nos réalisations ?
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {[
                    { title: "Expertise certifiée", desc: "Équipe certifiée HQE, BREEAM, BBC" },
                    { title: "Matériaux durables", desc: "Biosourcés, recyclés et locaux" },
                    { title: "Suivi personnalisé", desc: "Accompagnement de A à Z" },
                    { title: "Garanties étendues", desc: "Garantie décennale et performance" },
                    { title: "Innovation continue", desc: "Veille technologique permanente" },
                    { title: "Rentabilité assurée", desc: "Économies énergétiques garanties" }
                  ].map((advantage, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaCheckCircle className="text-green-600 text-xl" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">{advantage.title}</h4>
                      <p className="text-sm text-gray-600">{advantage.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaTools />
                    Nous parler de votre projet
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="/methodologie"
                    className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border hover:border-gray-300"
                  >
                    Découvrir notre méthodologie
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Vous avez un projet similaire ?
              </h3>
              
              <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Parlons ensemble de votre future construction ou rénovation durable.
                Nos experts vous accompagnent de la conception à la réalisation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Demander un devis gratuit
                </a>
                
                <a
                  href="tel:+33123456789"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <FaMapMarkerAlt />
                  Nous rencontrer
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </>
  );
}