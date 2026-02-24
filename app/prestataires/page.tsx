import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaBook, FaFileAlt, FaUsers } from "react-icons/fa";

const partenaires = [
  {
    nom: "Solaris Industrie",
    specialite: "Panneaux photovoltaïques",
    zone: "France / Europe"
  },
  {
    nom: "EnerBat Solutions",
    specialite: "Onduleurs & stockage",
    zone: "Maroc / Afrique du Nord"
  },
  {
    nom: "EcoTherm Pro",
    specialite: "Pompes à chaleur",
    zone: "France"
  },
  {
    nom: "HydroGreen Systems",
    specialite: "Gestion de l'eau",
    zone: "International"
  }
];

const fichesTechniques = [
  { titre: "Fiche technique - Panneau 550W", reference: "FT-PV-550", version: "v2.1" },
  { titre: "Fiche technique - Onduleur Hybride", reference: "FT-OND-HYB", version: "v1.4" },
  { titre: "Fiche technique - Batterie 10kWh", reference: "FT-BAT-10", version: "v3.0" }
];

const catalogues = [
  { titre: "Catalogue Produits 2026", format: "PDF", taille: "12 MB" },
  { titre: "Catalogue Solutions Professionnelles", format: "PDF", taille: "9 MB" },
  { titre: "Catalogue Accessoires & Pièces", format: "PDF", taille: "7 MB" }
];

export default function PrestatairesPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 pt-28">
        <section className="max-w-7xl mx-auto px-6 pb-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <FaUsers className="text-green-600" />
            </div>
            <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">Prestataires</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Réseau de partenaires</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Consultez nos partenaires, accédez aux fiches techniques et téléchargez nos catalogues.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <FaUsers className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Liste des partenaires</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partenaires.map((partenaire) => (
              <div key={partenaire.nom} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partenaire.nom}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Spécialité :</span> {partenaire.specialite}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Zone :</span> {partenaire.zone}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <FaFileAlt className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Fiches techniques</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {fichesTechniques.map((fiche) => (
                <div key={fiche.reference} className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{fiche.titre}</h3>
                    <p className="text-sm text-gray-600">{fiche.reference} • {fiche.version}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                  >
                    Télécharger
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <FaBook className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Catalogues</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {catalogues.map((catalogue) => (
              <div key={catalogue.titre} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">{catalogue.titre}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Format :</span> {catalogue.format}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold text-gray-800">Taille :</span> {catalogue.taille}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                >
                  Ouvrir
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
