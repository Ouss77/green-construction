import Header from "../components/Header";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
  FaLeaf,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <Header />

        <div className="max-w-5xl mx-auto px-6 py-18 text-center">
          <div className="flex justify-center mb-3">
            <FaLeaf className="text-5xl text-green-300 animate-pulse" />
          </div>
          <h1 className="text-5xl font-extrabold mb-4">
            Parlons de votre projet
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-lg">
            Une idée, une vision, un besoin ?  
            Notre équipe vous accompagne pour construire un avenir durable.
          </p>
        </div>

        {/* vague décorative */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-20 fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C120,80 360,0 720,30 1080,60 1320,40 1440,20 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* CONTENU */}
      <main className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-16">

          {/* INFOS */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Adresse",
                content: "123 Avenue de la Construction Verte, Paris",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Téléphone",
                content: "01 23 45 67 89",
                link: "tel:+33123456789",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                content: "contact@greenconstruction.fr",
                link: "mailto:contact@greenconstruction.fr",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-green-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
              >
                <div className="text-4xl text-green-700 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-green-700 font-medium hover:underline"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-700">{item.content}</p>
                )}
              </div>
            ))}
          </section>

          {/* FORMULAIRE + MAP */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* FORM */}
            <form className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
              <h2 className="text-2xl font-extrabold text-green-800 mb-2 flex items-center gap-2">
                <FaUserTie /> Écrivez-nous
              </h2>
              <p className="text-gray-600 mb-6">
                Nous répondons généralement sous 24h.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <textarea
                placeholder="Votre message"
                required
                className="border rounded-lg px-4 py-3 min-h-[140px] w-full mb-6 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow-lg"
              >
                Envoyer le message
              </button>
            </form>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-green-100">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.292292315674!3d48.8583730792876"
                width="100%"
                height="100%"
                className="min-h-[400px]"
                loading="lazy"
              />
            </div>
          </section>

          {/* ÉQUIPE */}
          <section className="text-center">
            <h2 className="text-3xl font-extrabold text-green-800 mb-10">
              Notre équipe
            </h2>

            <div className="flex flex-wrap justify-center gap-10">
              {[
                { name: "Sophie Martin", role: "Responsable projet", img: "/team1.jpg" },
                { name: "Ali Benyamina", role: "Architecte", img: "/team2.jpg" },
                { name: "Julie Dubois", role: "Support client", img: "/team3.jpg" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition w-60"
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-green-300 mb-4"
                  />
                  <span className="font-bold">{m.name}</span>
                  <span className="text-sm text-gray-500">{m.role}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
