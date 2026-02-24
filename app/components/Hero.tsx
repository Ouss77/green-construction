import { FaSun, FaBuilding, FaLightbulb, FaCheckCircle, FaArrowRight, FaChartLine } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

const Hero = () => (
      <section className="relative min-h-[90vh] bg-transparent text-white overflow-hidden pt-24">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/heroo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/35 to-black/45" />
          <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/20 to-black/55" />
        </div>
         
        {/* Contenu Hero */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-5 leading-tight">
              <span className="bg-linear-to-r from-amber-200 via-orange-200 to-yellow-100 bg-clip-text text-transparent">
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
                Administration
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                <FaLightbulb className="inline mr-2" />
                Entreprise
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                <FaCheckCircle className="inline mr-2" />
                Collectivité
              </span>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  <div className="text-xl font-bold text-amber-200">{stat.value}</div>
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
