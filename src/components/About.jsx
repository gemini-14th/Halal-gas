import React from 'react'
import { motion } from 'framer-motion'
import { MdDeliveryDining, MdBuild, MdVerified, MdLocationOn } from 'react-icons/md'

const features = [
  {
    icon: MdDeliveryDining,
    title: 'Free Delivery',
    desc: 'We deliver right to your doorstep — fast and hassle-free across all our branch locations.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: MdBuild,
    title: 'Free Service',
    desc: 'Free servicing for cookers and burners when you purchase from any of our branches.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: MdVerified,
    title: 'Authorised Dealer',
    desc: 'Certified LPG dealers you can trust. We supply only genuine, quality-tested gas products.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MdLocationOn,
    title: 'Multiple Branches',
    desc: 'Conveniently located near you — 4 branches across Ngong, Matasia, Zambia & Bul Bul.',
    color: 'from-blue-500 to-cyan-500',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white section-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-inter font-semibold mb-4">
            Why Us
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            Why Choose <span className="text-primary">Hilal Distributors?</span>
          </h2>
          <p className="text-gray-500 font-inter max-w-2xl mx-auto text-base sm:text-lg">
            With years of trusted service across Kenya, we provide reliable LPG solutions 
            backed by quality products, transparent pricing, and unmatched customer care.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white text-2xl" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-charcoal mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-inter text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
