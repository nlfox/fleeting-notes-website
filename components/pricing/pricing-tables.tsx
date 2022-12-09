import React, { useState } from 'react';

function PricingTables() {
  const [plans] = useState([
    {
      name: "Starter",
      blurb: "For people that only capture on one device",
      price: ['$', '0', '/month'],
      featured: false,
      features: [
        <span>Unlimited Notes</span>,
        <span>10 MB Attachment Limit</span>,
        <span>Blazing fast full-text search</span>,
        <span>Access to apps on all platforms</span>,
        <span>Plugin for Obsidian MD sync</span>,
      ],
      url: "https://my.fleetingnotes.app/",
      ctaText: "Get Started",
    },
    {
      name: "Basic",
      blurb: "For people who capture across multiple devices",
      price: ['$', '3', '/month'],
      featured: true,
      features: [
        <b>Everything on the free plan</b>,
        <span>Unlimited logged in devices</span>,
        <span>25 MB Attachment Limit</span>,
      ],
      url: "https://payments.fleetingnotes.app/?price=basic",
      ctaText: "Start free trial"
    },
    {
      name: "Believer",
      blurb: "For people who believe in the future of Fleeting Notes",
      price: ['$', '6', '/month'],
      featured: false,
      features: [
        <b>Everything on the Basic plan</b>,
        <span>AI powered link suggestions</span>,
        <span>And more to come...</span>,
      ],
      url: "https://payments.fleetingnotes.app/?price=premium",
      ctaText: "Start free trial"
    },
  ]);

  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="zoom-y-out">A powerful free plan</h1>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">All offline features will always be 100% free. </p>
          </div>

          {/* Pricing tables */}
          <div>
            <div className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-6 items-start">

              {plans.map((plan => (
                <div className={`relative flex flex-col h-full py-5 px-6 rounded shadow-xl ${plan.featured ? "bg-blue-100 border-2 border-blue-500" : "bg-white"}`} data-aos="zoom-y-out" data-aos-delay="450">
                  {(plan.featured) && (
                    <div className="absolute top-0 right-0 mr-5 p-3 -mt-5 bg-yellow-500 rounded-full">
                      <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z" />
                      </svg>
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="text-lg font-bold mb-1">{plan.name}</div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-3xl font-bold">{plan.price[0]}</span>
                      <span className="text-4xl font-bold">{plan.price[1]}</span>
                      <span className="text-gray-600 pl-2">{plan.price[2]}</span>
                    </div>
                    <div className="text-lg text-gray-800">{plan.blurb}</div>
                  </div>
                  <ul className="text-gray-600 -mb-2 grow">
                    {plan.features.map((feature) => (
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="#0">{plan.ctaText}</a>
                  </div>
                </div>
              )))}
            </div>

          </div>

        </div >
      </div >
    </section >
  );
}

export default PricingTables;
