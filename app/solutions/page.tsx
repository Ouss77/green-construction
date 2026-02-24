import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaArrowRight, FaBoxOpen, FaLightbulb } from "react-icons/fa";

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen pt-28">
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Nos solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Choisissez le parcours qui correspond à votre besoin : sélection de produits ou accompagnement conseil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/produits" className="bg-white rounded-2xl shadow-sm p-8 text-left hover:shadow-md transition-shadow">
              <div className="inline-flex p-3 rounded-lg bg-green-100 text-green-600 mb-4">
                <FaBoxOpen />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Produits</h2>
              <p className="text-sm text-gray-600 mb-5">Matériel, solutions techniques et kits préconfigurés pour votre installation.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-green-700">
                Voir les produits
                <FaArrowRight />
              </span>
            </Link>

            <Link href="/conseils" className="bg-white rounded-2xl shadow-sm p-8 text-left hover:shadow-md transition-shadow">
              <div className="inline-flex p-3 rounded-lg bg-green-100 text-green-600 mb-4">
                <FaLightbulb />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Conseils</h2>
              <p className="text-sm text-gray-600 mb-5">Études, simulation d'économies et accompagnement stratégique personnalisé.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-green-700">
                Voir les conseils
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
