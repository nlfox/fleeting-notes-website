import Head from "next/head";
import FeaturesBlocks from "../components/simple/features-blocks";
import FeaturesHome from "../components/simple/features-home";
import Header from "../components/simple/header";
import HeroHome from "../components/simple/hero-home";
import TestimonialsHome from "../components/simple/testimoninals-home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Fleeting Notes</title>
      </Head>
      <Header />
      <main className="grow">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <TestimonialsHome />
      </main>
    </div>
  )
}
