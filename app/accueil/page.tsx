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
        <Header />
        <Hero />
      </div>
      <main>
        <WhyChooseUs />
        {/* <Expertise /> */}
        <Stats />
        {/* <Products /> */}
        <Projects />
      </main>
      <PartnerLogos />
      <Footer />
    </div>
  );
}
