import dynamic from "next/dynamic";
import Header from "../components/Header";
const Hero = dynamic(() => import("../components/Hero"));
const Expertise = dynamic(() => import("../components/Expertise"));
const Stats = dynamic(() => import("../components/Stats"));
const Products = dynamic(() => import("../components/Products"));
const Projects = dynamic(() => import("../components/Projects"));
const Footer = dynamic(() => import("../components/Footer"));
const PartnerLogos = dynamic(() => import("../components/PartnerLogos"));
const WhyChooseUs = dynamic(() => import("../components/WhyChooseUs"));
export default function Accueil() {
  return (
    <div>
      <div className="relative w-full" style={{ minHeight: "680px" }}>
        <img
          src="/hero.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ minHeight: "680px" }}
        />
        <div  className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10"  aria-hidden="true"
        ></div>
        <Header />
        <Hero />
      </div>
      <main>
        <WhyChooseUs />
        <Expertise />
        <Stats />
        <Products />
        <Projects />
      </main>
      <PartnerLogos />
      <Footer />
    </div>
  );
}
