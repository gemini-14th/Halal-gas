import React from 'react'
import { motion } from 'framer-motion'
import { MdLocalGasStation, MdOutlineWhatsapp } from 'react-icons/md'
import { FaFire } from 'react-icons/fa'

const products = [
  {
    name: '6KG Gas Cylinder',
    desc: 'Ideal for small households and light cooking. Compact and easy to handle.',
    icon: '🔵',
    weight: '6KG',
    tag: 'Compact',
  },
  {
    name: '13KG Gas Cylinder',
    desc: 'Perfect for families and businesses. Long-lasting supply for everyday cooking needs.',
    icon: '🔴',
    weight: '13KG',
    tag: 'Popular',
  },
  {
    name: 'Gas Burner / Single Ring Stove',
    desc: 'Portable and efficient burner for quick cooking. Lightweight and durable.',
    icon: '🟠',
    weight: '',
    tag: 'Portable',
  },
  {
    name: 'Gas Regulator & Pipe Kit',
    desc: 'For safe and secure connections. High-quality regulators with durable piping.',
    icon: '🟢',
    weight: '',
    tag: 'Safety',
  },
]

function ProductCylinder({ weight, small }) {
  const h = small ? 100 : 140
  const w = small ? 60 : 80
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} fill="none">
      <defs>
        <linearGradient id={`prodGrad${weight}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B71C1C"/>
          <stop offset="50%" stopColor="#EF5350"/>
          <stop offset="100%" stopColor="#B71C1C"/>
        </linearGradient>
      </defs>
      <rect x={w*0.15} y={h*0.22} width={w*0.7} height={h*0.6} rx="8" fill={`url(#prodGrad${weight})`}/>
      <ellipse cx={w/2} cy={h*0.22} rx={w*0.35} ry={h*0.07} fill="#D32F2F"/>
      <ellipse cx={w/2} cy={h*0.82} rx={w*0.35} ry={h*0.06} fill="#8B0000"/>
      <rect x={w*0.33} y={h*0.1} width={w*0.34} height={h*0.14} rx="4" fill="#FDD835"/>
      {weight && (
        <>
          <rect x={w*0.22} y={h*0.42} width={w*0.56} height={h*0.2} rx="4" fill="white" opacity="0.9"/>
          <text x={w/2} y={h*0.55} textAnchor="middle" fontFamily="Poppins" fontWeight="700" fontSize={small ? 10 : 14} fill="#D32F2F">{weight}</text>
        </>
      )}
    </svg>
  )
}

function BurnerIcon() {
  return (
    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl">
      <FaFire className="text-4xl text-white" />
    </div>
  )
}

function RegulatorIcon() {
  return (
    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl">
      <MdLocalGasStation className="text-4xl text-white" />
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-gray-50 relative">
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
            Our Products
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            Our <span className="text-primary">LPG Products</span>
          </h2>
          <p className="text-gray-500 font-inter max-w-2xl mx-auto text-base sm:text-lg">
            Quality gas products for homes and businesses. All products are certified and sourced from trusted brands.
          </p>
          {/* Tosha Brand Badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm">
            <span className="text-sm font-inter text-gray-500">Authorised Dealer of</span>
            <span className="font-poppins font-bold text-primary text-lg">TOSHA</span>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Product Image Area */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center h-52 overflow-hidden">
                <div className="absolute top-3 right-3 bg-accent text-charcoal text-xs font-inter font-bold px-3 py-1 rounded-full">
                  {product.tag}
                </div>
                {product.weight ? (
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    <ProductCylinder weight={product.weight} small={product.weight === '6KG'} />
                  </div>
                ) : index === 2 ? (
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    <BurnerIcon />
                  </div>
                ) : (
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    <RegulatorIcon />
                  </div>
                )}
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6">
                <h3 className="font-poppins font-bold text-lg text-charcoal mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 font-inter text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <a
                  href={`https://wa.me/254722466566?text=${encodeURIComponent(`Hi, I'd like a quote for ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-charcoal hover:bg-primary text-white py-2.5 rounded-xl font-inter font-semibold text-sm transition-all duration-300 active:scale-95"
                >
                  <MdOutlineWhatsapp className="text-lg" />
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
