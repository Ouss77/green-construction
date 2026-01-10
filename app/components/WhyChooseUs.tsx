import Image from "next/image";
import { FaShieldAlt, FaTrophy, FaUsers } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi nous choisir ?
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Grâce à notre expertise et à notre engagement envers l’excellence,
            nous avons gagné la confiance de centaines d’entreprises à travers
            le monde. Découvrez nos engagements.
          </p>

          {/* CEO BLOCK */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm max-w-md">
            <Image
              src="/ceo.jpg"
              alt="Pierre Martin CEO"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />

            <div>
              <p className="font-semibold text-gray-900">
                Pierre Martin <span className="text-sm text-gray-500">, CEO</span>
              </p>
              <p className="text-sm text-gray-500">
                Une vision claire et un leadership axé sur la qualité et l’innovation.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          {/* CERTIFICATION LOGOS */}
          {/* <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Image src="/logos/tuv.png" alt="TÜV Rheinland" width={90} height={40} />
            <Image src="/logos/qualipv.png" alt="QualiPV" width={90} height={40} />
            <Image src="/logos/irve.png" alt="IRVE" width={70} height={40} />
            <Image src="/logos/ademe.png" alt="ADEME" width={90} height={40} />
          </div> */}

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

            <div className="p-4">
              <FaShieldAlt className="mx-auto text-3xl text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Certifications & Qualité
              </h3>
              <p className="text-sm text-gray-500">
                TÜV Rheinland, QualiPV, IRVE & label ADEME
              </p>
            </div>

            <div className="p-4">
              <FaTrophy className="mx-auto text-3xl text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Expérience reconnue
              </h3>
              <p className="text-sm text-gray-500">
                +500 projets réalisés à travers le monde
              </p>
            </div>

            <div className="p-4">
              <FaUsers className="mx-auto text-3xl text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Experts solaires
              </h3>
              <p className="text-sm text-gray-500">
                Équipe qualifiée et spécialisée
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
