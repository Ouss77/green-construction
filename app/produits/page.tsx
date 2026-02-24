"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";
import { FaCheckCircle, FaLeaf, FaShieldAlt, FaSolarPanel, FaStar, FaTools } from "react-icons/fa";
import { FiBatteryCharging } from "react-icons/fi";

const solutions = [
  {
    category: "Énergie Solaire",
    icon: <FaSolarPanel className="text-2xl" />,
    color: "from-amber-500 to-orange-500",
    products: [
      {
        name: "Panneaux Solaires Photovoltaïques",
        description: "Modules haute performance pour production d'électricité propre",
        power: "300W à 550W",
        warranty: "25 ans",
        features: ["Haute efficacité", "Résistance aux intempéries", "Garantie produit"]
      },
      {
        name: "Onduleurs Solaires",
        description: "Conversion DC/AC optimisée avec monitoring intelligent",
        power: "3kW à 20kW",
        warranty: "10 ans",
        features: ["Monitoring à distance", "Protection intégrée", "Compatibilité batterie"]
      }
    ]
  },
  {
    category: "Stockage Énergétique",
    icon: <FiBatteryCharging className="text-2xl" />,
    color: "from-green-500 to-emerald-500",
    products: [
      {
        name: "Batteries Lithium-ion",
        description: "Stockage haute capacité pour autoconsommation",
        power: "5kWh à 20kWh",
        warranty: "10 ans",
        features: ["Haute densité", "Management intelligent", "Modulaire"]
      },
      {
        name: "Systèmes de Gestion",
        description: "Optimisation de la production et consommation",
        power: "WiFi / 4G",
        warranty: "5 ans",
        features: ["Prédiction énergétique", "Pilotage intelligent", "Reporting détaillé"]
      }
    ]
  }
];

export default function ProduitsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [search, setSearch] = useState("");

  const categories = ["Toutes", ...solutions.map((item) => item.category)];

  const allProducts = useMemo(
    () =>
      solutions.flatMap((category) =>
        category.products.map((product) => ({
          ...product,
          category: category.category,
        }))
      ),
    []
  );

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return allProducts.filter((product) => {
      const matchesCategory = selectedCategory === "Toutes" || product.category === selectedCategory;

      const matchesSearch =
        term.length === 0 ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.features.some((feature) => feature.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, search]);

  return (
    <>
      <Header />
      <main className="bg-gray-50 pt-28">
        <section className="max-w-7xl mx-auto px-6 pb-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <FaTools className="text-green-600" />
            </div>
            <span className="font-semibold text-green-600 uppercase tracking-wide text-xs">Nos Produits</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Solutions matérielles pour votre projet</h1>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-14 space-y-10">
          <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Rechercher un produit, une caractéristique..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-sm text-gray-500">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé
              {filteredProducts.length > 1 ? "s" : ""}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center text-gray-600">
              Aucun produit ne correspond à votre recherche.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <div key={`${product.category}-${product.name}`} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-3">
                    {product.category}
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                  <div className="space-y-1 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Capacité / Puissance</span>
                      <span className="font-semibold">{product.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Garantie</span>
                      <span className="font-semibold text-green-600">{product.warranty}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
