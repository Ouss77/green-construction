import Header from "../components/Header";
import { 
  FaLeaf, 
  FaCalendarAlt, 
  FaArrowRight, 
  FaTag, 
  FaUser,
  FaBookOpen,
  FaShareAlt,
  FaBookmark
} from "react-icons/fa";
import { FiClock, FiEye } from "react-icons/fi";
import Footer from "../components/Footer";

const articles = [
  {
    title: "Construire durablement : les tendances 2025",
    date: "12 janvier 2025",
    image: "/actu1.jpg",
    excerpt: "Matériaux biosourcés, bâtiments à énergie positive et nouvelles normes environnementales redéfinissent la construction.",
    category: "Tendances",
    readTime: "5 min",
    views: "1.2k",
    author: "Marie Dubois",
    tags: ["Innovation", "Écologie", "Normes"]
  },
  {
    title: "Pourquoi choisir une maison passive ?",
    date: "5 décembre 2024",
    image: "/actu2.jpg",
    excerpt: "La maison passive permet de réduire drastiquement les consommations énergétiques tout en améliorant le confort.",
    category: "Conseils",
    readTime: "4 min",
    views: "2.8k",
    author: "Pierre Lambert",
    tags: ["Économie d'énergie", "Confort", "Isolation"]
  },
  {
    title: "Rénovation énergétique : aides et subventions",
    date: "20 novembre 2024",
    image: "/actu3.jpg",
    excerpt: "Tour d'horizon des dispositifs disponibles pour financer vos travaux de rénovation durable.",
    category: "Financement",
    readTime: "6 min",
    views: "3.5k",
    author: "Sophie Martin",
    tags: ["Aides", "Subventions", "Rénovation"]
  },
  {
    title: "Béton bas carbone : la révolution en marche",
    date: "15 novembre 2024",
    image: "/actu4.jpg",
    excerpt: "Les nouvelles formulations de béton réduisent de 40% l'empreinte carbone des constructions.",
    category: "Innovation",
    readTime: "7 min",
    views: "1.8k",
    author: "Thomas Renault",
    tags: ["Matériaux", "Carbone", "Innovation"]
  },
  {
    title: "Toitures végétalisées : avantages et installation",
    date: "8 novembre 2024",
    image: "/actu5.jpg",
    excerpt: "Isolation naturelle, biodiversité et gestion des eaux pluviales : découvrez tous les bénéfices.",
    category: "Écologie",
    readTime: "5 min",
    views: "2.3k",
    author: "Julie Lefevre",
    tags: ["Végétalisation", "Isolation", "Biodiversité"]
  },
  {
    title: "Smart Home et écologie : compatibles ?",
    date: "1 novembre 2024",
    image: "/actu6.jpg",
    excerpt: "Comment la domotique peut optimiser la consommation énergétique de votre habitat.",
    category: "Technologie",
    readTime: "4 min",
    views: "1.6k",
    author: "Alexandre Moreau",
    tags: ["Domotique", "Énergie", "Connecté"]
  }
];

const categories = [
  { name: "Toutes", count: 12, active: true },
  { name: "Tendances", count: 3 },
  { name: "Conseils", count: 4 },
  { name: "Financement", count: 2 },
  { name: "Innovation", count: 2 },
  { name: "Écologie", count: 1 }
];

export default function Actualites() {
  return (
    <>
      {/* EN-TÊTE AMÉLIORÉE */}
      <div className="relative min-h-[70vh] bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <Header />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <FaLeaf className="text-green-300 animate-pulse" />
              <span className="text-sm font-medium text-green-100">
                Ressources & Actualités
              </span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Actualités <span className="text-green-300">&</span> Conseils
            </h1>
            
            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-green-100/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Découvrez les dernières innovations, tendances et bonnes pratiques 
              pour construire et rénover durablement.
            </p>
            
            {/* Statistiques */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold">45+</div>
                <div className="text-sm text-green-200">Articles experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-green-200">Catégories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50k+</div>
                <div className="text-sm text-green-200">Lecteurs mensuels</div>
              </div>
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
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
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

          {/* INTRO */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              L'actualité de la <span className="text-green-600">construction responsable</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Analyses approfondies, conseils pratiques et innovations majeures 
              pour vous accompagner dans vos projets de construction écologique.
            </p>
          </div>

          {/* GRILLE D'ARTICLES AMÉLIORÉE */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image avec overlay et catégorie */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Badge de catégorie */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Actions sur l'image */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                      <FaBookmark className="text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                      <FaShareAlt className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Contenu de l'article */}
                <div className="p-6">
                  {/* Métadonnées */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-green-500" />
                      <span>{article.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      <FiClock className="text-green-500" />
                      <span>{article.readTime} de lecture</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      <FiEye className="text-green-500" />
                      <span>{article.views}</span>
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>

                  {/* Auteur */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <FaUser className="text-green-600 text-sm" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {article.author}
                    </span>
                  </div>

                  {/* Extrait */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bouton Lire l'article */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-between w-full group/btn"
                  >
                    <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      Lire l'article
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

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-2 mb-20">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border text-gray-600 hover:bg-gray-50">
              ←
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-600 text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border text-gray-600 hover:bg-gray-50">
              3
            </button>
            <span className="px-2 text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border text-gray-600 hover:bg-gray-50">
              5
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border text-gray-600 hover:bg-gray-50">
              →
            </button>
          </div>

          {/* NEWSLETTER ET CTA */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-12 md:p-16 text-center text-white">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                      <FaBookOpen className="text-2xl" />
                    </div>
                    <h3 className="text-3xl font-bold">
                      Ne manquez aucun article
                    </h3>
                  </div>
                  
                  <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
                    Inscrivez-vous à notre newsletter pour recevoir nos dernières 
                    actualités et conseils directement dans votre boîte mail.
                  </p>
                  
                  <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-gray-800"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      S'inscrire
                    </button>
                  </form>
                  
                  <p className="text-sm text-green-200 mt-4">
                    Nous respectons votre vie privée. Désinscription à tout moment.
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
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Un projet en tête ?
                </h3>
                
                <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Nos experts sont à votre disposition pour vous accompagner 
                  dans vos choix techniques, écologiques et financiers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Nous contacter
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border hover:border-gray-300"
                  >
                    Découvrir nos services
                  </a>
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