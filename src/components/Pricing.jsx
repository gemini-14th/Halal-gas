import React from 'react'
import { motion } from 'framer-motion'
import { FaFire, FaStar } from 'react-icons/fa'
import { HiPhone } from 'react-icons/hi'

const plans = [
  {
    name: '6KG Refill',
    price: '900',
    desc: 'Quick refill for your 6KG cylinder',
    features: ['Fast refill service', 'Quality tested gas', 'Free delivery'],
    best: false,
  },
  {
    name: '13KG Refill',
    price: '2,100',
    desc: 'Standard refill for 13KG cylinder',
    features: ['Full 13KG capacity', 'Quality certified', 'Free delivery', 'Free burner check'],
    best: false,
  },
  {
    name: 'Complete 6KG Set',
    price: '3,600',
    desc: 'Brand new cylinder + gas + accessories',
    features: ['New 6KG cylinder', 'Full gas refill', 'Regulator included', 'Pipe kit included', 'Free delivery'],
    best: true,
  },
  {
    name: 'Complete 13KG Set',
    price: '6,700',
    desc: 'Full setup for homes and businesses',
    features: ['New 13KG cylinder', 'Full gas refill', 'Regulator included', 'Pipe kit included', 'Free delivery', 'Free cooker service'],
    best: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-inter font-semibold mb-4">
            Pricing
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Current Refill & <span className="gradient-text">Package Prices</span>
          </h2>
          <p className="text-gray-400 font-inter max-w-2xl mx-auto text-base sm:text-lg">
            Transparent, affordable pricing — no hidden charges. What you see is what you pay.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                plan.best
                  ? 'bg-gradient-to-b from-primary to-primary-dark border-2 border-accent shadow-2xl shadow-primary/20 scale-[1.02] lg:scale-105'
                  : 'bg-charcoal-light border border-gray-700/50 hover:border-primary/40'
              }`}
            >
              {/* Best Value Badge */}
              {plan.best && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 best-value-badge">
                  <div className="flex items-center gap-1.5 bg-accent text-charcoal px-4 py-1.5 rounded-full font-poppins font-bold text-xs shadow-lg">
                    <FaStar className="text-sm" />
                    Best Value
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`font-poppins font-bold text-lg mb-1 ${plan.best ? 'text-white' : 'text-white'}`}>
                {plan.name}
              </h3>
              <p className={`font-inter text-sm mb-5 ${plan.best ? 'text-white/70' : 'text-gray-400'}`}>
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`font-poppins font-extrabold text-4xl ${plan.best ? 'text-accent' : 'text-white'}`}>
                  KES {plan.price}
                </span>
                <span className={`text-sm font-inter ${plan.best ? 'text-white/60' : 'text-gray-500'}`}>/=</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm font-inter ${plan.best ? 'text-white/90' : 'text-gray-300'}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.best ? 'text-accent' : 'text-green-400'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="tel:0722466566"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-inter font-semibold text-sm transition-all duration-300 active:scale-95 ${
                  plan.best
                    ? 'bg-accent text-charcoal hover:bg-accent-light shadow-lg'
                    : 'bg-white/10 text-white hover:bg-primary hover:text-white border border-white/10'
                }`}
              >
                <HiPhone className="text-base" />
                Order Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Price Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-500 font-inter text-sm mt-10 flex items-center justify-center gap-2"
        >
          <FaFire className="text-primary text-xs" />
          Prices subject to change. Call us for latest updates.
        </motion.p>
      </div>
    </section>
  )
}
