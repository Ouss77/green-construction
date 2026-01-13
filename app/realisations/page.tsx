import Header from "../components/Header";
import { FaLeaf, FaMapMarkerAlt, FaTools } from "react-icons/fa";
import Footer from "../components/Footer";
const projects = [
  {
    title: "Éco-Résidence Lumière",
    location: "Lyon",
    category: "Résidentiel",
    image: "/real1.jpg",
    description:
      "Construction d’une résidence basse consommation intégrant des matériaux biosourcés et des panneaux solaires.",
  },
  {
    title: "Bureaux GreenTech",
    location: "Paris",
    category: "Tertiaire",
    image: "/real2.jpg",
    description:
      "Rénovation complète de bureaux avec optimisation énergétique et espaces végétalisés.",
  },
  {
    title: "Maison Passive Bois",
    location: "Annecy",
    category: "Maison individuelle",
    image: "/real3.jpg",
    description:
      "Maison passive en structure bois, isolation naturelle et autonomie énergétique.",
  },
];

export default function Realisations() {
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
            Nos réalisations
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-lg">
            Découvrez des projets durables conçus pour allier performance,
            esthétique et respect de l’environnement.
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
              Des projets concrets, un impact réel
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Chaque réalisation est pensée pour réduire l’empreinte carbone,
              améliorer le confort et créer de la valeur durable.
            </p>
          </div>

          {/* GRID PROJETS */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-green-700 text-white text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaTools /> Projet durable
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </section>

          {/* CTA */}
          <section className="mt-24 text-center bg-green-50 rounded-3xl p-12">
            <h3 className="text-3xl font-extrabold text-green-800 mb-4">
              Vous avez un projet similaire ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Parlons ensemble de votre future construction ou rénovation
              durable.
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
