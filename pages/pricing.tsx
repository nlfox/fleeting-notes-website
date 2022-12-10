import Head from "next/head"
import Footer from "../components/landing/footer"
import Header from "../components/landing/header"
import Layout from "../components/misc/layout"
import FeaturesTable from "../components/pricing/features-table"
import PricingTables from "../components/pricing/pricing-tables"

export default function Pricing() {
  return (
    <Layout>
      <Head>
        <title>Pricing | Fleeting Notes</title>
      </Head>
      <PricingTables />
      <FeaturesTable />
    </Layout>
  )
}