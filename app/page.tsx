

import dynamic from "next/dynamic";
import Head from "next/head";

import Header from "./components/Header";
const Hero = dynamic(() => import("./components/Hero"));
const Expertise = dynamic(() => import("./components/Expertise"));
const Stats = dynamic(() => import("./components/Stats"));
const Products = dynamic(() => import("./components/Products"));
const Projects = dynamic(() => import("./components/Projects"));
const Footer = dynamic(() => import("./components/Footer"));
const PartnerLogos = dynamic(() => import("./components/PartnerLogos"));
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"));
export default function Home() {
  return (
    <>
      <Head>
        <title>Solutions solaires photovoltaïques pour entreprises & collectivités</title>
        <meta name="description" content="Fourniture de matériel certifié, conseil stratégique, et mise en relation avec installateurs agréés. B2B, collectivités, expertise, installateurs certifiés." />
        <meta name="keywords" content="solaire, photovoltaïque, entreprise, collectivité, conseil, matériel, installateur, énergie renouvelable" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Solutions solaires photovoltaïques pour entreprises & collectivités" />
        <meta property="og:description" content="Fourniture de matériel certifié, conseil stratégique, et mise en relation avec installateurs agréés." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <div className="relative w-full" style={{ minHeight: '680px' }}>
        <img src="/hero.webp" alt="Background" className="absolute inset-0 w-full h-full object-cover object-center z-0" style={{ minHeight: '680px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10" aria-hidden="true"></div>
        <div className="relative z-20">
          <Header />
          <Hero />
        </div>
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
    </>
  );
}
