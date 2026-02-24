import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowRight, FaCalendarAlt, FaCalculator, FaCheckCircle, FaChartLine, FaLeaf, FaShieldAlt, FaStar } from "react-icons/fa";

const benefits = [
  {
    title: "Économies garanties",
    description: "Réduction de 30% à 80% sur vos factures",
    icon: <FaChartLine className="text-green-600" />
  },
  {
    title: "Durabilité",
    description: "Solutions avec garanties de 10 à 25 ans",
    icon: <FaShieldAlt className="text-blue-600" />
  },
  {
    title: "Accompagnement expert",
    description: "Étude, simulation et déploiement sur mesure",
    icon: <FaStar className="text-amber-600" />
  },
  {
    title: "Impact écologique",
    description: "Réduction de votre empreinte carbone",
    icon: <FaLeaf className="text-emerald-600" />
  }
];

export default function ConseilsPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 pt-28">
        <section className="max-w-7xl mx-auto px-6 pb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <FaCalculator className="text-green-600" />
            </div>
            <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">Conseils</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Conseil énergétique et accompagnement</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Nous vous aidons à choisir la bonne stratégie avant d'investir : étude personnalisée, estimation des gains et plan d'action.</p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="mb-3">{benefit.icon}</div>
                <h2 className="font-bold text-gray-800 mb-2">{benefit.title}</h2>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Simulation de vos économies</h2>
                <p className="text-gray-600 mb-6">Obtenez une estimation rapide de rentabilité selon votre surface et votre consommation.</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Surface habitable (m²)</label>
                    <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Ex: 120" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Consommation annuelle (kWh)</label>
                    <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Ex: 15000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de toiture</label>
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

              <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-xl">Exemple de retour sur investissement</h3>
                <div className="space-y-3">
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
                  <div className="p-4 bg-green-600 text-white rounded-lg text-center">
                    <div className="text-sm">Retour sur investissement</div>
                    <div className="text-2xl font-bold">8.5 ans</div>
                    <div className="text-sm text-green-200">Rentabilité estimée</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <FaCalendarAlt className="inline mr-2 text-green-500" />
                    Amortissement moyen : 7 à 10 ans selon configuration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Parlons de votre projet</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Nos experts vous accompagnent de l'étude jusqu'au déploiement pour une solution adaptée à votre besoin.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                <FaArrowRight />
                <span>Demander un devis gratuit</span>
              </a>
              <a href="tel:+33123456789" className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                <span>📞 01 23 45 67 89</span>
              </a>
            </div>
            <div className="mt-5 text-xs text-gray-500 flex flex-col sm:flex-row justify-center gap-4">
              <span>✅ Étude gratuite</span>
              <span>✅ Installation certifiée</span>
              <span>✅ Suivi personnalisé</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
