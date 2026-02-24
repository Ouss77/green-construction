import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Étude Essentielle",
    price: "390€",
    delay: "5 jours ouvrés",
    features: [
      "Analyse du besoin",
      "Pré-dimensionnement",
      "Estimation budgétaire",
      "Compte-rendu PDF"
    ],
    highlight: false
  },
  {
    title: "Étude Pro",
    price: "890€",
    delay: "7 jours ouvrés",
    features: [
      "Tout le pack Essentielle",
      "Scénarios comparatifs",
      "Analyse de rentabilité",
      "Plan d'actions priorisé",
      "Restitution visio 60 min"
    ],
    highlight: true
  },
  {
    title: "Étude Premium",
    price: "1 490€",
    delay: "10 jours ouvrés",
    features: [
      "Tout le pack Pro",
      "Visite technique sur site",
      "Cahier de consultation",
      "Accompagnement au choix prestataires"
    ],
    highlight: false
  }
];

export default function DemandeEtudePage() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 pt-24">
        <section className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Demande d’étude</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choisissez votre formule puis remplissez le questionnaire pour qualifier votre projet.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className={`bg-white rounded-2xl border p-6 shadow-sm ${plan.highlight ? "border-green-500 ring-1 ring-green-500" : "border-gray-200"}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-green-600 mb-1">{plan.price}</div>
                <p className="text-sm text-gray-500 mb-5">Délai estimé : {plan.delay}</p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Choisir cette formule
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Questionnaire projet</h2>
            <p className="text-gray-600 mb-8">Merci de compléter les informations ci-dessous pour qualifier votre besoin.</p>

            <form className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">1) Informations entreprise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Raison sociale" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <input type="text" placeholder="Nom du contact" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <input type="email" placeholder="Email professionnel" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <input type="tel" placeholder="Téléphone" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <input type="text" placeholder="Secteur d’activité" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <input type="text" placeholder="Ville / Pays" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">2) Contexte du projet</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                    <option>Type de site</option>
                    <option>Toiture industrielle</option>
                    <option>Bâtiment tertiaire</option>
                    <option>Terrain au sol</option>
                    <option>Parking / ombrières</option>
                  </select>
                  <input type="text" placeholder="Surface disponible (m²)" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <input type="text" placeholder="Consommation annuelle (kWh)" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                    <option>Niveau d’avancement</option>
                    <option>Idée initiale</option>
                    <option>Étude en cours</option>
                    <option>Consultation lancée</option>
                    <option>Décision imminente</option>
                  </select>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">3) Objectifs & contraintes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                    <option>Objectif principal</option>
                    <option>Réduction des coûts</option>
                    <option>Autonomie énergétique</option>
                    <option>Décarbonation</option>
                    <option>Valorisation du site</option>
                  </select>
                  <input type="text" placeholder="Budget estimatif (€)" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <input type="text" placeholder="Échéance souhaitée" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                    <option>Mode de financement</option>
                    <option>Fonds propres</option>
                    <option>Crédit / leasing</option>
                    <option>Tiers-investissement</option>
                    <option>À définir</option>
                  </select>
                </div>

                <div className="mt-4">
                  <textarea
                    rows={4}
                    placeholder="Contraintes techniques ou réglementaires connues"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">4) Besoins attendus de l’étude</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                  {[
                    "Pré-dimensionnement technique",
                    "Étude de productible",
                    "Analyse économique (CAPEX/OPEX)",
                    "Plan de mise en œuvre",
                    "Comparatif scénarios",
                    "Aide au choix des prestataires",
                    "Planning projet",
                    "Dossier de consultation"
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      <input type="checkbox" className="accent-green-600" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">5) Message complémentaire</h3>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre contexte et vos attentes en détail"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-4 text-sm text-gray-700">
                <input id="consentement" type="checkbox" className="mt-1 accent-green-600" />
                <label htmlFor="consentement">
                  J’accepte que mes données soient utilisées pour traiter ma demande d’étude.
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
