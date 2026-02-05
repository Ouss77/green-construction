import Header from "./app/components/Header";
import {   FaLeaf,   FaHandshake,   FaTools,   FaGlobeEurope,  FaUsers,  FaLightbulb,  FaChartLine,  FaAward,  FaShieldAlt,  FaHeart,  FaArrowRight,  FaBuilding,  FaSeedling,  FaRecycle,  FaRocket,  FaBullseye} from "react-icons/fa";
import { FiTarget, FiCheckCircle, FiStar, FiTrendingUp } from "react-icons/fi";
import Footer from "./app/components/Footer";

export default function About() {
  return (
    <>
      {/* HERO SECTION MODERNE */}
      <div className="relative min-h-[85vh] bg-gradient-to-br from-gray-900 via-emerald-950 to-teal-950 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-teal-900/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Geometric pattern */}
            <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-3xl rotate-12"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/5 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/10 rounded-lg -rotate-45"></div>
          </div>
        </div>
        
        <Header />
        
<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
  <div className="max-w-4xl mx-auto text-center">
    {/* Animated badge - plus compact */}
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
      <div className="p-1.5 bg-green-500/20 rounded-full">
        <FaLeaf className="text-green-300 text-sm" />
      </div>
      <span className="text-xs font-medium text-green-100 tracking-wide">
        Notre Vision Depuis 2015
      </span>
    </div>
    
    {/* Main title with gradient effect - taille réduite */}
    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
      <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
        Construire   avec conscience

      </span>
      <br />
      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-3xl md:text-5xl">
        innover avec passion
      </span>
    </h1>
    
    {/* Subtitle - plus court */}
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
      Des espaces durables alliant performance, esthétique et respect de l'environnement.
    </p>
    
    {/* Quick stats - compact */}
    <div className="flex justify-center gap-6 mb-8">
      {[
        { value: "10+", label: "Ans" },
        { value: "150+", label: "Projets" },
        { value: "100%", label: "Satisfaction" }
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-green-300">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
    
    {/* CTA buttons - plus compact */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href="#mission"
        className="group inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <FiTarget />
        <span>Notre mission</span>
      </a>
      
      <a
        href="/realisations"
        className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20"
      >
        <FaBuilding />
        <span>Nos réalisations</span>
      </a>
    </div>
  </div>
</div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20 md:h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,96C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            />
          </svg>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 space-y-32">

          {/* MISSION SECTION */}
          <section id="mission" className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full opacity-20"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Section header */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FaBullseye className="text-green-600 text-xl" />
                  </div>
                  <span className="font-semibold text-green-600 uppercase tracking-wide text-sm">
                    Notre Raison d'Être
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                  Redéfinir l'excellence
                  <br />
                  dans la <span className="text-green-600">construction durable</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Chez <strong className="text-green-700">Green Construction</strong>, nous 
                    accompagnons particuliers et professionnels dans la réalisation de 
                    projets responsables, alliant innovation, performance énergétique 
                    et esthétisme moderne.
                  </p>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Notre mission est ambitieuse : <strong>réduire de 50% l'empreinte 
                    carbone</strong> du secteur du bâtiment d'ici 2030, tout en améliorant 
                    significativement le confort, la durabilité et la valeur des constructions.
                  </p>
                </div>
                
                {/* Key achievements */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {[
                    { label: "Bâtiments certifiés", value: "98%", color: "bg-green-50 text-green-700" },
                    { label: "Énergies renouvelables", value: "85%", color: "bg-emerald-50 text-emerald-700" },
                    { label: "Matériaux biosourcés", value: "70%", color: "bg-teal-50 text-teal-700" },
                    { label: "Circularité", value: "90%", color: "bg-cyan-50 text-cyan-700" }
                  ].map((item, index) => (
                    <div key={index} className={`p-5 rounded-2xl ${item.color} text-center transition-transform hover:scale-105`}>
                      <div className="text-2xl font-bold mb-1">{item.value}</div>
                      <div className="text-sm font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 shadow-xl border border-green-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <FaRocket className="text-green-600 text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Notre ADN en 4 engagements
                    </h3>
                  </div>
                  
                  <ul className="space-y-8">
                    {[
                      {
                        icon: <FaSeedling className="text-2xl" />,
                        title: "Solutions écologiques innovantes",
                        description: "Matériaux biosourcés, énergies renouvelables et gestion responsable des ressources.",
                        color: "bg-green-100 text-green-600"
                      },
                      {
                        icon: <FaTools className="text-2xl" />,
                        title: "Expertise technique certifiée",
                        description: "Savoir-faire reconnu, innovation continue et excellence de réalisation.",
                        color: "bg-blue-100 text-blue-600"
                      },
                      {
                        icon: <FaHandshake className="text-2xl" />,
                        title: "Accompagnement personnalisé",
                        description: "Écoute active, transparence totale et relation de confiance durable.",
                        color: "bg-amber-100 text-amber-600"
                      },
                      {
                        icon: <FaRecycle className="text-2xl" />,
                        title: "Économie circulaire intégrée",
                        description: "Réduction des déchets, réutilisation et recyclage systématique.",
                        color: "bg-teal-100 text-teal-600"
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-5 group">
                        <div className={`p-4 rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* VALUES SECTION */}
          <section>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaHeart className="text-green-600" />
                </div>
                <span className="font-semibold text-green-600 uppercase tracking-wide text-sm">
                  Notre ADN
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Des valeurs qui nous <span className="text-green-600">définissent</span>
              </h2>
              
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Ces principes fondateurs guident chacune de nos décisions et 
                chaque projet que nous entreprenons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaGlobeEurope className="text-3xl" />,
                  title: "Engagement environnemental",
                  description: "Nous créons des bâtiments qui respectent et préservent l'environnement, en limitant au maximum leur impact écologique.",
                  color: "from-green-500 to-emerald-500",
                  metrics: ["-65% empreinte carbone", "100% énergies vertes", "0 déchet non recyclé"]
                },
                {
                  icon: <FaHandshake className="text-3xl" />,
                  title: "Confiance & transparence",
                  description: "Nous établissons des relations durables basées sur l'honnêteté, la clarté et le respect mutuel.",
                  color: "from-blue-500 to-cyan-500",
                  metrics: ["98% clients fidèles", "0 litige", "100% transparence financière"]
                },
                {
                  icon: <FaTools className="text-3xl" />,
                  title: "Excellence technique",
                  description: "Nous combinons savoir-faire traditionnel et innovations de pointe pour des résultats exceptionnels.",
                  color: "from-amber-500 to-orange-500",
                  metrics: ["15 certifications", "0 défaut majeur", "100% conformité"]
                },
                {
                  icon: <FaLightbulb className="text-3xl" />,
                  title: "Innovation permanente",
                  description: "Nous investissons continuellement dans la R&D pour anticiper et façonner l'avenir de la construction.",
                  color: "from-purple-500 to-pink-500",
                  metrics: ["5 brevets déposés", "12 innovations/an", "3 laboratoires R&D"]
                },
                {
                  icon: <FaUsers className="text-3xl" />,
                  title: "Collaboration constructive",
                  description: "Nous croyons en la force du collectif et travaillons main dans la main avec nos clients.",
                  color: "from-teal-500 to-green-500",
                  metrics: ["50+ partenaires", "100% satisfaction", "Co-construction"]
                },
                {
                  icon: <FaShieldAlt className="text-3xl" />,
                  title: "Responsabilité intégrale",
                  description: "Nous assumons l'entière responsabilité de nos réalisations, de la conception au suivi.",
                  color: "from-indigo-500 to-blue-500",
                  metrics: ["10 ans garantie", "24/7 support", "Suivi post-projet"]
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Icon with gradient */}
                  <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${value.color} text-white inline-flex shadow-lg`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="space-y-2">
                    {value.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2 text-sm">
                        <FiCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="font-medium text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* STATS SECTION */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl"></div>
            <div className="relative bg-gradient-to-r from-green-600/90 to-emerald-600/90 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
              
              <div className="relative text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    <FaChartLine className="text-2xl" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Notre impact en chiffres
                  </h2>
                </div>
                
                <p className="text-green-100 text-lg max-w-2xl mx-auto">
                  Des résultats concrets qui témoignent de notre engagement et de notre expertise.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { 
                    value: "10+", 
                    label: "années d'expérience", 
                    icon: <FaAward />,
                    detail: "Expertise accumulée depuis 2015"
                  },
                  { 
                    value: "200+", 
                    label: "projets réalisés", 
                    icon: <FaBuilding />,
                    detail: "À travers toute la France"
                  },
                  { 
                    value: "98%", 
                    label: "clients satisfaits", 
                    icon: <FiStar />,
                    detail: "Taux de recommandation"
                  },
                  { 
                    value: "45 000", 
                    label: "tonnes de CO₂ évitées", 
                    icon: <FaLeaf />,
                    detail: "Impact environnemental positif"
                  }
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="text-center group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-green-100 mb-1">{stat.label}</div>
                      <div className="text-sm text-green-200/80">{stat.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional stats bar */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-lg">35</div>
                    <div className="text-green-200">Experts techniques</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">12</div>
                    <div className="text-green-200">Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">15M€</div>
                    <div className="text-green-200">Chiffre d'affaires</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">100%</div>
                    <div className="text-green-200">Équipe formée RSE</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TEAM SECTION */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaUsers className="text-green-600" />
                </div>
                <span className="font-semibold text-green-600 uppercase tracking-wide text-sm">
                  Notre Équipe
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Une équipe de <span className="text-green-600">passionnés</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Fondée par trois ingénieurs visionnaires en 2015, Green Construction 
                  rassemble aujourd'hui une équipe pluridisciplinaire de <strong>35 experts</strong> 
                  dédiés à la construction durable.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Architectes, ingénieurs thermiciens, chefs de projet et experts 
                  environnementaux travaillent en synergie pour transformer vos 
                  visions en réalités concrètes.
                </p>
              </div>
              
              {/* Team badges */}
              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  { label: "🌱 100% engagés RSE", color: "bg-green-100 text-green-700" },
                  { label: "🎓 Formation continue", color: "bg-blue-100 text-blue-700" },
                  { label: "🤝 Partenariats locaux", color: "bg-amber-100 text-amber-700" },
                  { label: "🏆 Excellence reconnue", color: "bg-purple-100 text-purple-700" }
                ].map((badge, index) => (
                  <div key={index} className={`px-4 py-2 rounded-full font-medium ${badge.color}`}>
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Team composition */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Architectes & Designers", count: "8", color: "from-green-500 to-emerald-500" },
                  { title: "Ingénieurs Spécialisés", count: "12", color: "from-blue-500 to-cyan-500" },
                  { title: "Chefs de Projet", count: "7", color: "from-amber-500 to-orange-500" },
                  { title: "Experts Support", count: "8", color: "from-purple-500 to-pink-500" }
                ].map((team, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-2xl bg-white shadow-lg text-center hover:shadow-xl transition-shadow"
                  >
                    <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${team.color} bg-clip-text text-transparent`}>
                      {team.count}
                    </div>
                    <div className="font-medium text-gray-700">{team.title}</div>
                  </div>
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FaHeart className="text-white text-sm" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-green-300 leading-none">"</div>
                  <div>
                    <p className="text-gray-700 italic mb-4 leading-relaxed">
                      Chaque bâtiment que nous concevons est une promesse pour 
                      les générations futures. Notre mission va bien au-delà 
                      de la construction : nous créons des héritages durables.
                    </p>
                    <div>
                      <div className="font-bold text-green-600">Pierre Martin</div>
                      <div className="text-sm text-gray-500">Fondateur & CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="text-center">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full opacity-20 -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-100 rounded-full opacity-20 translate-y-20 -translate-x-20"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <FaLeaf className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Prêt à construire <span className="text-green-600">autrement</span> ?
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Ensemble, imaginons et réalisons des solutions innovantes 
                  qui respectent l'environnement tout en répondant parfaitement 
                  à vos besoins et aspirations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaHandshake />
                    Discutons de votre projet
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="/methodologie"
                    className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border hover:border-gray-300"
                  >
                    Découvrir notre approche
                  </a>
                </div>
                
                <div className="mt-10 text-sm text-gray-500 flex flex-wrap justify-center gap-6">
                  <span className="flex items-center gap-2">
                    <FiTrendingUp className="text-green-500" />
                    Devis personnalisé sous 48h
                  </span>
                  <span className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-500" />
                    Consultation gratuite
                  </span>
                  <span className="flex items-center gap-2">
                    <FiStar className="text-green-500" />
                    Accompagnement complet
                  </span>
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