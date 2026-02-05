import Image from "next/image";
import { FaCheckCircle, FaShieldAlt, FaTrophy, FaUsers } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

export default function WhyChooseUs() {
  return (
<>
  {/* POURQUOI NOUS CHOISIR - AMÉLIORÉ */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaTrophy className="text-green-600" />
                </div>
                <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">
                  Notre Excellence
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                L'expertise solaire au service de vos projets
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Forts de notre expertise et de notre engagement envers l'excellence,
                nous avons gagné la confiance de centaines d'entreprises à travers
                le monde. Découvrez nos engagements.
              </p>

              {/* CEO BLOCK AMÉLIORÉ */}
              <div className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-sm max-w-md border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  PM
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    Pierre Martin <span className="text-sm text-gray-500 font-normal">, CEO & Fondateur</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    "Une vision claire et un leadership axé sur la qualité et l'innovation depuis 15 ans."
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {/* Logo certifications */}
              <div className="mb-10">
                <h3 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">
                  Certifications & Labels
                </h3>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaShieldAlt className="text-green-600 text-2xl" />
                    </div>
                    <div className="text-xs font-medium text-gray-700">TÜV Rheinland</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaCheckCircle className="text-green-600 text-2xl" />
                    </div>
                    <div className="text-xs font-medium text-gray-700">QualiPV</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FiZap className="text-green-600 text-2xl" />
                    </div>
                    <div className="text-xs font-medium text-gray-700">IRVE</div>
                  </div>
                </div>
              </div>

              {/* FEATURES AMÉLIORÉES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 hover:bg-green-50 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <FaShieldAlt className="text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Certifications
                  </h3>
                  <p className="text-sm text-gray-600">
                    TÜV Rheinland, QualiPV, IRVE & label ADEME
                  </p>
                </div>

                <div className="text-center p-4 hover:bg-green-50 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <FaTrophy className="text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Expérience
                  </h3>
                  <p className="text-sm text-gray-600">
                    +500 projets réalisés à travers le monde
                  </p>
                </div>

                <div className="text-center p-4 hover:bg-green-50 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <FaUsers className="text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experts
                  </h3>
                  <p className="text-sm text-gray-600">
                    Équipe qualifiée et spécialisée
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
  );
}
