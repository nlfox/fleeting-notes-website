import Head from "next/head";
import Cta from "../components/landing/cta";
import FeaturesBlocks from "../components/landing/features-blocks";
import FeaturesHome from "../components/landing/features-home";
import HeroHome from "../components/landing/hero-home";
import TestimonialsHome from "../components/landing/testimoninals-home";
import Layout from "../components/misc/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Fleeting Notes</title>
      </Head>
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
      <TestimonialsHome />
      <Cta />
    </Layout>
  )
}
