import Header from "../components/Header";
import { 
  FaLeaf, 
  FaCalendarAlt, 
  FaArrowRight, 
  FaTag, 
  FaUser,
  FaBookOpen,
  FaShareAlt,
  FaBookmark,
  FaFire,
  FaRocket,
  FaChartLine,
  FaSearch,
  FaFilter
} from "react-icons/fa";
import { FiClock, FiEye, FiTrendingUp } from "react-icons/fi";
import Footer from "../components/Footer";

const articles = [
  {
    title: "Construire durablement : les tendances 2025",
    date: "12 janvier 2025",
    image: "/actu1.jpg",
    excerpt: "Matériaux biosourcés, bâtiments à énergie positive et nouvelles normes environnementales redéfinissent la construction.",
    category: "Tendances",
    categoryIcon: <FaFire className="text-sm" />,
    readTime: "5 min",
    views: "1.2k",
    author: "Marie Dubois",
    tags: ["Innovation", "Écologie", "Normes"],
    featured: true,
    hot: true
  },
  {
    title: "Pourquoi choisir une maison passive ?",
    date: "5 décembre 2024",
    image: "/actu2.jpg",
    excerpt: "La maison passive permet de réduire drastiquement les consommations énergétiques tout en améliorant le confort.",
    category: "Conseils",
    categoryIcon: <FaBookOpen className="text-sm" />,
    readTime: "4 min",
    views: "2.8k",
    author: "Pierre Lambert",
    tags: ["Économie d'énergie", "Confort", "Isolation"],
    featured: false,
    hot: true
  },
  {
    title: "Rénovation énergétique : aides et subventions 2024",
    date: "20 novembre 2024",
    image: "/actu3.jpg",
    excerpt: "Tour d'horizon des dispositifs disponibles pour financer vos travaux de rénovation durable.",
    category: "Financement",
    categoryIcon: <FaChartLine className="text-sm" />,
    readTime: "6 min",
    views: "3.5k",
    author: "Sophie Martin",
    tags: ["Aides", "Subventions", "Rénovation"],
    featured: true,
    hot: false
  },
  {
    title: "Béton bas carbone : la révolution en marche",
    date: "15 novembre 2024",
    image: "/actu4.jpg",
    excerpt: "Les nouvelles formulations de béton réduisent de 40% l'empreinte carbone des constructions.",
    category: "Innovation",
    categoryIcon: <FaRocket className="text-sm" />,
    readTime: "7 min",
    views: "1.8k",
    author: "Thomas Renault",
    tags: ["Matériaux", "Carbone", "Innovation"],
    featured: false,
    hot: false
  },
  {
    title: "Toitures végétalisées : avantages et installation",
    date: "8 novembre 2024",
    image: "/actu5.jpg",
    excerpt: "Isolation naturelle, biodiversité et gestion des eaux pluviales : découvrez tous les bénéfices.",
    category: "Écologie",
    categoryIcon: <FaLeaf className="text-sm" />,
    readTime: "5 min",
    views: "2.3k",
    author: "Julie Lefevre",
    tags: ["Végétalisation", "Isolation", "Biodiversité"],
    featured: false,
    hot: true
  },
  {
    title: "Smart Home et écologie : compatibles ?",
    date: "1 novembre 2024",
    image: "/actu6.jpg",
    excerpt: "Comment la domotique peut optimiser la consommation énergétique de votre habitat.",
    category: "Technologie",
    categoryIcon: <FaRocket className="text-sm" />,
    readTime: "4 min",
    views: "1.6k",
    author: "Alexandre Moreau",
    tags: ["Domotique", "Énergie", "Connecté"],
    featured: false,
    hot: false
  }
];

const categories = [
  { name: "Toutes", count: 12, active: true, icon: <FaTag /> },
  { name: "Tendances", count: 3, active: false, icon: <FaFire />, color: "from-orange-500 to-red-500" },
  { name: "Conseils", count: 4, active: false, icon: <FaBookOpen />, color: "from-blue-500 to-cyan-500" },
  { name: "Financement", count: 2, active: false, icon: <FaChartLine />, color: "from-green-500 to-emerald-500" },
  { name: "Innovation", count: 2, active: false, icon: <FaRocket />, color: "from-purple-500 to-pink-500" },
  { name: "Écologie", count: 1, active: false, icon: <FaLeaf />, color: "from-teal-500 to-green-500" }
];

const trendingTags = [
  { name: "Énergie verte", count: 24 },
  { name: "Rénovation", count: 18 },
  { name: "Bois", count: 15 },
  { name: "Isolation", count: 12 },
  { name: "Smart Home", count: 9 },
  { name: "Matériaux", count: 8 }
];

export default function Actualites() {
  return (
    <>
      {/* HERO SECTION AVEC IMAGE - DESIGN UNIFIÉ */}
      <div className="relative min-h-[80vh] bg-gray-900 text-white overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/news-hero.jpg" // Remplacez par votre image d'actualités
            alt="Équipe discutant autour de plans de construction durable"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
          {/* Overlay vert subtil */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/15 to-teal-900/10"></div>
        </div>
        
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {/* Cercles décoratifs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-white/5 rounded-full"></div>
          
          {/* Éléments de grille (représentant des articles) */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-8 h-8 bg-white/10 rounded-lg rotate-45"></div>
            <div className="absolute bottom-40 left-20 w-6 h-6 bg-white/5 rounded-lg"></div>
            <div className="absolute top-1/2 right-40 w-10 h-10 border border-white/10 rounded-lg"></div>
          </div>
        </div>
        
        <Header />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge d'accroche avec effet verre */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full mb-10 border border-white/20">
              <div className="p-1.5 bg-green-500/20 rounded-full">
                <FaBookOpen className="text-green-300 animate-pulse text-lg" />
              </div>
              <span className="text-sm font-medium text-green-100">
                Veille Écologique & Innovation
              </span>
            </div>
            
            {/* Titre principal avec effet */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Actualités</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent blur-sm">Actualités</span>
              </span>
              <br />
              <span className="text-3xl md:text-5xl font-normal text-gray-300">
                & <span className="font-bold text-white">Conseils</span> Experts
              </span>
            </h1>
            
            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Restez informé des dernières innovations, tendances et bonnes pratiques 
              pour construire et rénover durablement.
            </p>
            
            {/* Stats en bandeau */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { value: "45+", label: "Articles experts", icon: <FaBookOpen /> },
                { value: "50k+", label: "Lecteurs mensuels", icon: <FiEye /> },
                { value: "98%", label: "Satisfaction", icon: <FiTrendingUp /> }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un article, un conseil, une tendance..."
                  className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
                  <FaSearch className="text-white" />
                </button>
              </div>
            </div>
            
            {/* CTA d'introduction */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#articles"
                className="group relative inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30"
              >
                <span className="relative z-10">Explorer les articles</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/30">
                <FaFilter className="relative z-10" />
                <span className="relative z-10">Filtrer par catégorie</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
        
        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 w-full z-10">
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

      {/* CONTENU PRINCIPAL */}
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          
          {/* ARTICLES MIS EN AVANT */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FaFire className="text-green-600" />
                  </div>
                  <span className="font-semibold text-green-600 uppercase tracking-wide text-sm">
                    À la Une
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Articles <span className="text-green-600">Populaires</span>
                </h2>
              </div>
              <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2">
                Voir tout
                <FaArrowRight />
              </a>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles.filter(a => a.featured).map((article, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                        {article.categoryIcon}
                        {article.category}
                      </span>
                      {article.hot && (
                        <span className="px-3 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                          <FaFire /> Tendances
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <FaCalendarAlt className="text-green-500" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FiClock className="text-green-500" />
                          <span>{article.readTime} de lecture</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <FiEye className="text-green-500" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <FaUser className="text-green-600" />
                        </div>
                        <span className="font-medium text-gray-700">{article.author}</span>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
                      >
                        Lire l'article
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FILTRES ET TOUS LES ARTICLES */}
          <section id="articles" className="mb-20">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar avec filtres */}
              <div className="lg:w-1/4">
                <div className="sticky top-24">
                  {/* Filtres par catégories */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaFilter className="text-green-600" />
                      Catégories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((cat, index) => (
                        <button
                          key={index}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                            cat.active 
                              ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-l-4 border-green-500' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${cat.active ? 'bg-green-100' : 'bg-gray-100'}`}>
                              {cat.icon}
                            </div>
                            <span>{cat.name}</span>
                          </div>
                          <span className={`text-sm px-2 py-1 rounded-full ${cat.active ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                            {cat.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tags tendances */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaFire className="text-orange-600" />
                      Tags Tendances
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {trendingTags.map((tag, index) => (
                        <a
                          key={index}
                          href="#"
                          className="px-3 py-2 bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-700 text-sm rounded-lg transition-colors"
                        >
                          {tag.name}
                          <span className="text-xs text-gray-500 ml-1">({tag.count})</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Newsletter side */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white">
                    <div className="text-center">
                      <FaBookOpen className="text-3xl mx-auto mb-4" />
                      <h4 className="font-bold mb-2">Newsletter</h4>
                      <p className="text-sm text-green-100 mb-4">
                        Recevez nos derniers articles
                      </p>
                      <button className="w-full bg-white text-green-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                        S'abonner
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Articles grid */}
              <div className="lg:w-3/4">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Tous les articles <span className="text-green-600">({articles.length})</span>
                  </h3>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Plus récents</option>
                    <option>Plus populaires</option>
                    <option>Plus lus</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {articles.map((article, index) => (
                    <article
                      key={index}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                            {article.categoryIcon}
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                              <FaCalendarAlt className="text-green-500" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <FiClock className="text-green-500" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <FiEye className="text-green-500" />
                            <span>{article.views}</span>
                          </div>
                        </div>

                        <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                          {article.title}
                        </h4>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <FaUser className="text-green-600 text-xs" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{article.author}</span>
                          </div>
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1"
                          >
                            Lire
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                      ←
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-600 text-white font-medium">
                      1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                      2
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                      3
                    </button>
                    <span className="px-2 text-gray-400">...</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                      5
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                      →
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </section>

          {/* NEWSLETTER */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-12 md:p-16 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                      <FaBookOpen className="text-2xl" />
                    </div>
                    <h3 className="text-3xl font-bold">
                      Ne manquez aucun conseil
                    </h3>
                  </div>
                  
                  <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                    Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, 
                    conseils pratiques et innovations directement dans votre boîte mail.
                  </p>
                  
                  <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-gray-800"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      S'abonner
                    </button>
                  </form>
                  
                  <p className="text-sm text-green-200 mt-6">
                    📧 Pas de spam • 🔒 Données protégées • ✨ Unsubscribe à tout moment
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="text-center">
            <div className="relative bg-white rounded-3xl p-12 shadow-xl overflow-hidden">
              {/* Éléments décoratifs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-100 rounded-full opacity-50"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <FaLeaf className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Besoin de conseils personnalisés ?
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Nos experts sont disponibles pour vous accompagner dans vos choix 
                  techniques, écologiques et financiers pour votre projet.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Consulter un expert
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border hover:border-gray-300"
                  >
                    Nos services 
                  </a>
                </div>
                
                <div className="mt-8 text-sm text-gray-500">
                  ⚡ Réponse sous 24h • 📞 Consultation gratuite • 🎯 Solutions sur mesure
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