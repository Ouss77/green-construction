
const Hero = () => (
  <section
    className="relative w-full h-[600px] flex items-center justify-center text-white"
    style={{ minHeight: '500px' }}
    aria-label="Hero section with solar panels background"
  >
    <img
      src="/hero.webp"
      alt="Solar panels at sunset"
      className="absolute w-full h-full object-cover object-center z-0"
    //   style={{ filter: 'brightness(0.99)' }}
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" aria-hidden="true"></div>
    <div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight">
        Solutions solaires photovoltaïques<br />
        <span className="text-green-300">pour entreprises & collectivités</span>
      </h1>
      <p className="text-lg md:text-2xl mb-6">
        Fourniture de matériel certifié, conseil stratégique, et mise en relation avec installateurs agréés.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <span className="bg-white/80 text-green-800 px-4 py-1 rounded-full text-sm font-medium">B2B & Collectivités</span>
        <span className="bg-white/80 text-green-800 px-4 py-1 rounded-full text-sm font-medium">Expertise & Conseil</span>
        <span className="bg-white/80 text-green-800 px-4 py-1 rounded-full text-sm font-medium">Installateurs Certifiés</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded font-semibold shadow transition">Demander une etude</a>
        <a href="#realisations" className="bg-white hover:bg-gray-100 text-green-700 px-8 py-3 rounded font-semibold shadow border border-green-700 transition">Voir nos réalisations</a>
      </div>
    </div>
  </section>
);

export default Hero;
