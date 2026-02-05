import Header from "../components/Header";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
  FaLeaf,
  FaPaperPlane,
  FaBuilding,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      {/* HERO SECTION WITH NAVBAR INSIDE */}
      <section className="relative h-[65vh] min-h-[200px] w-full overflow-hidden">
        {/* Background image */}
        <img
          src="/herocont.png"
          alt="Bâtiment écologique moderne"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />

        {/* Header on top of image */}
        <Header />

        {/* Hero content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-6xl px-6 py-12 text-white">
            <div className="max-w-5xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg backdrop-blur-sm">
                  <FaLeaf className="text-2xl text-green-300" />
                </div>
                <span className="font-medium text-green-300 tracking-wide">
                  Contactez-nous
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Parlons de votre <span className="text-green-300">projet durable</span>
              </h1>

              <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
                Une idée, une vision, un besoin ? Notre équipe d'experts vous accompagne
                pour concrétiser votre projet de construction écologique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 space-y-20">
          
          {/* INFOS DE CONTACT */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Comment nous contacter
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Nous sommes disponibles pour répondre à toutes vos questions 
                concernant vos projets de construction durable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaMapMarkerAlt className="text-2xl" />,
                  title: "Adresse",
                  content: "123 Avenue de la Construction Verte, 75000 Paris",
                  description: "Venez nous rencontrer dans nos bureaux",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <FaPhoneAlt className="text-2xl" />,
                  title: "Téléphone",
                  content: "01 23 45 67 89",
                  description: "Lun-Ven: 9h-18h",
                  link: "tel:+33123456789",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: <FaEnvelope className="text-2xl" />,
                  title: "Email",
                  content: "contact@greenconstruction.fr",
                  description: "Réponse sous 24h",
                  link: "mailto:contact@greenconstruction.fr",
                  color: "from-amber-500 to-orange-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Fond décoratif */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color} rounded-t-2xl`}></div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-4">
                      {item.description}
                    </p>
                    
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200 text-lg"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-800 text-lg">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FORMULAIRE + MAP */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* FORMULAIRE */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaUserTie className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Écrivez-nous
                </h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Remplissez ce formulaire et notre équipe vous répondra dans les plus brefs délais.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      id="nom"
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="votre@email.com"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    id="sujet"
                    type="text"
                    placeholder="Nature de votre demande"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows="6"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-none"
                  />
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                  <FiCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    En soumettant ce formulaire, vous acceptez que vos données soient traitées 
                    conformément à notre politique de confidentialité.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Envoyer le message
                </button>
              </form>
            </div>

            {/* MAP ET INFOS SUPPLEMENTAIRES */}
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                <iframe
                  title="Localisation Green Construction"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.292292315674!3d48.8583730792876"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              {/* Infos pratiques */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaBuilding className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Informations pratiques
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Horaires d'ouverture</span>
                    <span className="font-medium">Lun-Ven: 9h-18h</span>
                  </div>
                  
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Visites sur rendez-vous</span>
                    <span className="font-medium text-green-600">Oui</span>
                  </div>
                  
                  <div className="flex justify-between py-3">
                    <span className="text-gray-600">Parking disponible</span>
                    <span className="font-medium text-green-600">20 places</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ÉQUIPE */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Notre équipe d'experts
              </h2>
              <p className="text-gray-600 text-lg">
                Rencontrez les spécialistes qui transformeront votre vision en réalité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Sophie Martin", 
                  role: "Responsable projet", 
                  img: "/team1.jpg",
                  expertise: "Gestion de projets durables",
                  color: "bg-gradient-to-br from-blue-500 to-cyan-500"
                },
                { 
                  name: "Ali Benyamina", 
                  role: "Architecte", 
                  img: "/team2.jpg",
                  expertise: "Design écologique",
                  color: "bg-gradient-to-br from-green-500 to-emerald-500"
                },
                { 
                  name: "Julie Dubois", 
                  role: "Support client", 
                  img: "/team3.jpg",
                  expertise: "Accompagnement personnalisé",
                  color: "bg-gradient-to-br from-amber-500 to-orange-500"
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 ${m.color} opacity-20`}></div>
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge de rôle */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-800">{m.role}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">
                      {m.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {m.expertise}
                    </p>
                    
                    <a
                      href={`mailto:${m.name.toLowerCase().replace(' ', '.')}@greenconstruction.fr`}
                      className="inline-block text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      Contacter {m.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
