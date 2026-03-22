import React from 'react'
import { motion } from 'framer-motion'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaDirections } from 'react-icons/fa'

const branches = [
  {
    name: 'Ngong',
    phone: '0703 943 840',
    tel: '0703943840',
    mapQuery: 'Ngong+Town+Kajiado+Kenya',
    color: 'from-red-500 to-rose-600',
  },
  {
    name: 'Matasia',
    phone: '0790 224 076',
    tel: '0790224076',
    mapQuery: 'Matasia+Ngong+Kenya',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    name: 'Zambia',
    phone: '0790 901 052',
    tel: '0790901052',
    mapQuery: 'Zambia+Ngong+Kenya',
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Bul Bul',
    phone: '0710 302 469',
    tel: '0710302469',
    mapQuery: 'Bul+Bul+Ngong+Kenya',
    color: 'from-emerald-500 to-green-600',
  },
]

export default function Branches() {
  return (
    <section id="branches" className="py-20 sm:py-28 bg-white section-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-inter font-semibold mb-4">
            Branches
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            Find Us <span className="text-primary">Near You</span>
          </h2>
          <p className="text-gray-500 font-inter max-w-2xl mx-auto text-base sm:text-lg">
            Visit any of our 4 conveniently located branches for LPG refills, new cylinders, and accessories.
          </p>
        </motion.div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Top Strip */}
              <div className={`h-2 bg-gradient-to-r ${branch.color}`} />

              <div className="p-6 sm:p-7">
                {/* Location Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${branch.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <HiLocationMarker className="text-white text-xl" />
                </div>

                {/* Branch Name */}
                <h3 className="font-poppins font-bold text-2xl text-charcoal mb-1 group-hover:text-primary transition-colors">
                  {branch.name}
                </h3>
                <p className="text-gray-400 font-inter text-sm mb-5">Branch</p>

                {/* Phone Button */}
                <a
                  href={`tel:${branch.tel}`}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-inter font-semibold text-sm transition-all duration-300 mb-3 active:scale-95 shadow-md shadow-green-500/20"
                >
                  <HiPhone className="text-base" />
                  {branch.phone}
                </a>

                {/* Directions Button */}
                <a
                  href={`https://www.google.com/maps/search/${branch.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-gray-200 text-charcoal hover:bg-charcoal hover:text-white py-2.5 rounded-xl font-inter font-medium text-sm transition-all duration-300 active:scale-95"
                >
                  <FaDirections className="text-base" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
