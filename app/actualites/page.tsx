import Header from "../components/Header";
import { FaLeaf, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";

const articles = [
  {
    title: "Construire durablement : les tendances 2025",
    date: "12 janvier 2025",
    image: "/actu1.jpg",
    excerpt:
      "Matériaux biosourcés, bâtiments à énergie positive et nouvelles normes environnementales redéfinissent la construction.",
  },
  {
    title: "Pourquoi choisir une maison passive ?",
    date: "5 décembre 2024",
    image: "/actu2.jpg",
    excerpt:
      "La maison passive permet de réduire drastiquement les consommations énergétiques tout en améliorant le confort.",
  },
  {
    title: "Rénovation énergétique : aides et subventions",
    date: "20 novembre 2024",
    image: "/actu3.jpg",
    excerpt:
      "Tour d’horizon des dispositifs disponibles pour financer vos travaux de rénovation durable.",
  },
];

export default function Actualites() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <Header />

        <div className="max-w-5xl mx-auto px-6 pb-20 py-5 text-center">
          <div className="flex justify-center mb-6">
            <FaLeaf className="text-5xl text-green-300 animate-pulse" />
          </div>
          <h1 className="text-5xl font-extrabold mb-4">
            Actualités & Conseils
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-lg">
            Suivez les dernières tendances, réglementations et innovations
            autour de la construction durable.
          </p>
        </div>

        {/* vague décorative */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-20 fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C120,80 360,0 720,30 1080,60 1320,40 1440,20 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* CONTENU */}
      <main className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* INTRO */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-green-800 mb-4">
              L’actualité de la construction responsable
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Analyses, conseils pratiques et nouveautés pour mieux comprendre
              les enjeux de la construction écologique.
            </p>
          </div>

          {/* GRID ARTICLES */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FaCalendarAlt />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-green-800 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">
                    {article.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-green-700 font-semibold hover:underline"
                  >
                    Lire l’article
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </section>

          {/* CTA */}
          <section className="mt-24 text-center bg-green-50 rounded-3xl p-12">
            <h3 className="text-3xl font-extrabold text-green-800 mb-4">
              Un projet en tête ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nos experts sont là pour vous accompagner dans vos choix
              techniques et écologiques.
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800 transition shadow-lg"
            >
              Nous contacter
            </a>
          </section>

        </div>
      </main>
        <Footer />
    </>
  );
}
