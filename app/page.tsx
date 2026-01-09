

import dynamic from "next/dynamic";
import Head from "next/head";

const Header = dynamic(() => import("./components/Header"));
const Hero = dynamic(() => import("./components/Hero"));
const Expertise = dynamic(() => import("./components/Expertise"));
const Stats = dynamic(() => import("./components/Stats"));
const Products = dynamic(() => import("./components/Products"));
const Projects = dynamic(() => import("./components/Projects"));
const Footer = dynamic(() => import("./components/Footer"));
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
      </Head>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Expertise />
        <Stats />
        <Products />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
