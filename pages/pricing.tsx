import Head from "next/head"
import Footer from "../components/landing/footer"
import Header from "../components/landing/header"
import FeaturesTable from "../components/pricing/features-table"
import PricingTables from "../components/pricing/pricing-tables"

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Pricing | Fleeting Notes</title>
      </Head>
      <Header />
      <main className="grow">
        <PricingTables />
        <FeaturesTable />
      </main>
      <Footer />
    </div>
  )
}