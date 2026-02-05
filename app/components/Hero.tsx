import { FaSun, FaBuilding, FaLightbulb, FaCheckCircle, FaArrowRight, FaChartLine } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

const Hero = () => (
      <section className="relative min-h-[90vh] bg-transparent text-white overflow-hidden pt-24">
        {/* Background overlay avec effet de grille solaire */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-linear-to-br from-green-900/40 via-emerald-900/30 to-teal-900/20"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-8 gap-2 p-4">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="aspect-square border border-emerald-500/30 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
         
        {/* Contenu Hero */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge d'expertise */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <div className="p-1.5 bg-green-500/20 rounded-full">
                <FaSun className="text-amber-300 text-sm" />
              </div>
              <span className="text-xs font-medium text-green-100 tracking-wide">
                Expert Solaire Photovoltaïque B2B
              </span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-amber-300 via-green-300 to-emerald-300 bg-clip-text text-transparent">
                Solutions Solaires
              </span>
              <br />
              <span className="text-white text-2xl md:text-4xl">
                pour <span className="font-bold">entreprises & collectivités</span>
              </span>
            </h1>
            
            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Fourniture de matériel certifié, conseil stratégique, et mise en relation 
              avec notre réseau d'installateurs agréés pour vos projets photovoltaïques.
            </p>
            
            {/* Badges d'expertise */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                <FaBuilding className="inline mr-2" />
                B2B & Collectivités
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                <FaLightbulb className="inline mr-2" />
                Expertise & Conseil
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                <FaCheckCircle className="inline mr-2" />
                Installateurs Certifiés
              </span>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30"
              >
                <FiTarget />
                <span>Demander une étude gratuite</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#realisations"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                <FaChartLine />
                <span>Voir nos réalisations</span>
              </a>
            </div>
            
            {/* Stats rapides */}
            <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "+150 MW", label: "Installés" },
                { value: "20+", label: "Pays" },
                { value: "500+", label: "Projets" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold text-green-300">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Indicateur de scroll */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>
);

export default Hero;
