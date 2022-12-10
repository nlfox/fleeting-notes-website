import Head from "next/head"
import Footer from "../components/landing/footer"
import Header from "../components/landing/header"
import Layout from "../components/misc/layout"
import FeaturesTable from "../components/pricing/features-table"
import PricingTables from "../components/pricing/pricing-tables"

export default function Pricing() {
  const titleText = `Pricing | ${process.env.NEXT_PUBLIC_TITLE}`
  return (
    <Layout>
      <Head>
        <title>{titleText}</title>
      </Head>
      <PricingTables />
      <FeaturesTable />
    </Layout>
  )
}