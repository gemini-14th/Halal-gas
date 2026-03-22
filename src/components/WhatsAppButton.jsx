import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/254722466566?text=Hi%20Hilal%20Distributors!%20I%27d%20like%20to%20make%20an%20order."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="whatsapp-pulse-ring" />
      <span className="whatsapp-pulse-ring" style={{ animationDelay: '0.5s' }} />
      <FaWhatsapp className="text-2xl relative z-10" />
    </motion.a>
  )
}
