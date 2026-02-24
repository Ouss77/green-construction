"use client";

import { useMemo, useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const articles = [
  {
    title: "Construire durablement : les tendances 2025",
    date: "12 janvier 2025",
    image: "/actu1.jpg",
    excerpt: "Matériaux biosourcés, bâtiments à énergie positive et nouvelles normes environnementales redéfinissent la construction.",
    category: "Tendances"
  },
  {
    title: "Pourquoi choisir une maison passive ?",
    date: "5 décembre 2024",
    image: "/actu2.jpg",
    excerpt: "La maison passive permet de réduire drastiquement les consommations énergétiques tout en améliorant le confort.",
    category: "Conseils"
  },
  {
    title: "Rénovation énergétique : aides et subventions",
    date: "20 novembre 2024",
    image: "/actu3.jpg",
    excerpt: "Tour d'horizon des dispositifs disponibles pour financer vos travaux de rénovation durable.",
    category: "Financement"
  },
  {
    title: "Béton bas carbone : la révolution en marche",
    date: "15 novembre 2024",
    image: "/actu4.jpg",
    excerpt: "Les nouvelles formulations de béton réduisent de 40% l'empreinte carbone des constructions.",
    category: "Innovation"
  },
  {
    title: "Toitures végétalisées : avantages et installation",
    date: "8 novembre 2024",
    image: "/actu5.jpg",
    excerpt: "Isolation naturelle, biodiversité et gestion des eaux pluviales : découvrez tous les bénéfices.",
    category: "Écologie"
  },
  {
    title: "Smart Home et écologie : compatibles ?",
    date: "1 novembre 2024",
    image: "/actu6.jpg",
    excerpt: "Comment la domotique peut optimiser la consommation énergétique de votre habitat.",
    category: "Technologie"
  }
];

const categories = [
  "Toutes",
  "Tendances",
  "Conseils",
  "Financement",
  "Innovation",
  "Écologie",
  "Technologie"
];

export default function Actualites() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Toutes") {
      return articles;
    }

    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  const hasArticles = filteredArticles.length > 0;
  const activeArticle = hasArticles ? filteredArticles[currentSlide] : null;

  const handlePrevious = () => {
    if (!hasArticles) {
      return;
    }

    setCurrentSlide((prev) =>
      prev === 0 ? filteredArticles.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!hasArticles) {
      return;
    }

    setCurrentSlide((prev) =>
      prev === filteredArticles.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Header />

      <main className="bg-gray-50 pt-24">
        <section className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Actualités</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les dernières tendances et conseils pratiques autour de la construction durable.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentSlide(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-16">
          {filteredArticles.length === 0 ? (
            <div className="mt-6 bg-white rounded-xl border border-gray-100 p-6 text-center text-gray-600">
              Aucun article dans cette catégorie.
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={activeArticle?.image}
                  alt={activeArticle?.title}
                  className="w-full h-72 md:h-120 object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                <button
                  type="button"
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center"
                  aria-label="Article précédent"
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center"
                  aria-label="Article suivant"
                >
                  <FaChevronRight />
                </button>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-600 text-white text-xs font-semibold mb-3">
                    {activeArticle?.category}
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold mb-3 max-w-3xl">{activeArticle?.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-100 mb-2">
                    <FaCalendarAlt />
                    <span>{activeArticle?.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-600 mb-5 text-sm md:text-base">{activeArticle?.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700">
                  Lire l'article
                  <FaArrowRight className="text-sm" />
                </a>

                <div className="flex items-center justify-center gap-2 mt-6">
                  {filteredArticles.map((article, index) => (
                    <button
                      key={article.title}
                      type="button"
                      aria-label={`Aller à l'article ${index + 1}`}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentSlide === index ? "w-7 bg-green-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Besoin d'accompagnement ?</h3>
            <p className="text-gray-600 mb-6">
              Nos experts peuvent vous orienter dans vos choix techniques, écologiques et financiers.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Nous contacter
              <FaArrowRight />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
