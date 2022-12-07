import Head from "next/head";
import Cta from "../components/landing/cta";
import FeaturesBlocks from "../components/landing/features-blocks";
import FeaturesHome from "../components/landing/features-home";
import HeroHome from "../components/landing/hero-home";
import TestimonialsHome from "../components/landing/testimoninals-home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Fleeting Notes</title>
      </Head>
      {/* <Header /> */}
      <main className="grow">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <TestimonialsHome />
        <Cta />
      </main>
    </div>
  )
}
