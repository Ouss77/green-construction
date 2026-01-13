import Header from "../components/Header";
import { FaLeaf, FaHandshake, FaTools, FaGlobeEurope } from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <Header />

        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-6">
            <FaLeaf className="text-5xl text-green-300 animate-pulse" />
          </div>
          <h1 className="text-5xl font-extrabold mb-4">
            Construire autrement
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-lg">
            Nous concevons des bâtiments durables, performants et respectueux
            de l’environnement, sans compromis sur la qualité.
          </p>
        </div>

        {/* vague */}
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
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* MISSION */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-green-800 mb-4">
                Notre mission
              </h2>
              <p className="text-gray-700 mb-4">
                Chez <strong>Green Construction</strong>, nous accompagnons
                particuliers et professionnels dans la réalisation de projets
                responsables, alliant innovation, performance énergétique et
                esthétisme.
              </p>
              <p className="text-gray-700">
                Notre objectif est simple : réduire l’empreinte carbone du
                bâtiment tout en améliorant le confort de vie et la durabilité
                des constructions.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-10 shadow-md">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <FaLeaf className="text-green-700 text-2xl" />
                  <span>
                    Solutions écologiques et matériaux durables
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <FaTools className="text-green-700 text-2xl" />
                  <span>
                    Expertise technique & savoir-faire terrain
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <FaHandshake className="text-green-700 text-2xl" />
                  <span>
                    Accompagnement humain et transparent
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* VALEURS */}
          <section className="text-center">
            <h2 className="text-3xl font-extrabold text-green-800 mb-12">
              Nos valeurs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <FaGlobeEurope />,
                  title: "Engagement environnemental",
                  text:
                    "Chaque projet vise à limiter son impact écologique et à favoriser la transition énergétique.",
                },
                {
                  icon: <FaHandshake />,
                  title: "Confiance & transparence",
                  text:
                    "Nous construisons des relations durables basées sur l’écoute et la clarté.",
                },
                {
                  icon: <FaTools />,
                  title: "Excellence technique",
                  text:
                    "Des solutions fiables, innovantes et conformes aux normes les plus exigeantes.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition"
                >
                  <div className="text-4xl text-green-700 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CHIFFRES */}
          <section className="bg-green-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-extrabold text-green-800 mb-10">
              Green Construction en chiffres
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { value: "10+", label: "années d’expérience" },
                { value: "150+", label: "projets réalisés" },
                { value: "100%", label: "clients satisfaits" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl font-extrabold text-green-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h3 className="text-3xl font-extrabold text-green-800 mb-4">
              Envie de construire durablement ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Parlons de votre projet et imaginons ensemble des solutions
              respectueuses de l’environnement.
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
    </>
  );
}
