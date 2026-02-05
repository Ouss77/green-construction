
import Accueil from "./accueil/page";
import Head from 'next/head';

export default function Home() {
  // Données SEO
  const seoData = {
    title: "GreenTech Solutions | Experts en Énergie Solaire Photovoltaïque B2B & Collectivités",
    description: "Fourniture de matériel solaire certifié, conseil stratégique, et mise en relation avec installateurs agréés. +150 MW installés, 20+ pays, 500+ projets réalisés.",
    keywords: "panneaux solaires photovoltaïques, énergie solaire B2B, kits solaires entreprises, fourniture matériel photovoltaïque, installation solaire industrielle",
    canonical: "https://greentech-solutions.fr"
  };
  return (
    <>
        <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content="https://greentech-solutions.fr/og-image.jpg" />
        <link rel="canonical" href={seoData.canonical} />
        <meta name="robots" content="index, follow" />
      </Head>
  <Accueil/>
    </>
  );
}
