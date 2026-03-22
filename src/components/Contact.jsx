import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPhone, HiMail } from 'react-icons/hi'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdDeliveryDining, MdSend } from 'react-icons/md'

const branchOptions = [
  { label: 'Select a branch...', value: '' },
  { label: 'Ngong — 0703 943 840', value: 'Ngong' },
  { label: 'Matasia — 0790 224 076', value: 'Matasia' },
  { label: 'Zambia — 0790 901 052', value: 'Zambia' },
  { label: 'Bul Bul — 0710 302 469', value: 'Bul Bul' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = `Hi Hilal Distributors!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nBranch: ${formData.branch}\nMessage: ${formData.message}`
    window.open(`https://wa.me/254722466566?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary via-primary-dark to-primary py-16 sm:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-inter font-semibold mb-6 backdrop-blur-sm">
              <MdDeliveryDining className="text-lg" />
              Free Delivery Available
            </div>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Ready to Order? We Deliver to You!
            </h2>
            <p className="text-white/80 font-inter text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Call our customer care number or fill out the form below to place your order.
            </p>
            <a
              href="tel:0722466566"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-charcoal px-8 py-4 rounded-full font-poppins font-bold text-lg sm:text-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 active:scale-95"
            >
              <HiPhone className="text-2xl" />
              0722 466 566
            </a>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-charcoal mb-2 text-center">
              Send Us a Message
            </h3>
            <p className="text-gray-500 font-inter text-center mb-10">
              Fill in your details and we'll get back to you immediately via WhatsApp
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-inter font-medium text-charcoal mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 font-inter text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-inter font-medium text-charcoal mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 font-inter text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-branch" className="block text-sm font-inter font-medium text-charcoal mb-1.5">
                  Preferred Branch
                </label>
                <select
                  id="contact-branch"
                  required
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 font-inter text-sm outline-none transition-all bg-white appearance-none cursor-pointer"
                >
                  {branchOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-inter font-medium text-charcoal mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you need — gas refill, new cylinder, accessories, etc."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 font-inter text-sm outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-inter font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]"
              >
                <MdSend className="text-lg" />
                {submitted ? '✓ Redirecting to WhatsApp...' : 'Send via WhatsApp'}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/254722466566"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-green-500 text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 text-xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
