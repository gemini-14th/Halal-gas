import React from 'react'
import { FaFire, FaPhone, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Branches', href: '#branches' },
  { name: 'Contact', href: '#contact' },
]

const branchContacts = [
  { name: 'Ngong', phone: '0703 943 840' },
  { name: 'Matasia', phone: '0790 224 076' },
  { name: 'Zambia', phone: '0790 901 052' },
  { name: 'Bul Bul', phone: '0710 302 469' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal text-white relative">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaFire className="text-accent text-2xl" />
              <div>
                <h3 className="font-poppins font-bold text-xl">Hilal Distributors</h3>
                <p className="text-gray-500 text-xs font-inter">Authorised Dealers in L.P.G Gas Products</p>
              </div>
            </div>
            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-5">
              Your trusted LPG partner in Kenya. Delivering clean, affordable gas products 
              with free delivery and professional service since day one.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm">
                <FaFacebook />
              </a>
              <a href="https://wa.me/254722466566" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-600 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent font-inter text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Contacts */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-4 text-white">Our Branches</h4>
            <ul className="space-y-3">
              {branchContacts.map((b) => (
                <li key={b.name} className="flex items-center gap-2">
                  <FaPhone className="text-primary text-xs" />
                  <div>
                    <span className="text-gray-300 font-inter text-sm font-medium">{b.name}:</span>
                    <a href={`tel:${b.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-accent font-inter text-sm ml-1 transition-colors">
                      {b.phone}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-4 text-white">Customer Care</h4>
            <a
              href="tel:0722466566"
              className="inline-flex items-center gap-2 bg-primary/15 hover:bg-primary/25 text-primary-light px-4 py-3 rounded-xl font-inter font-semibold text-sm transition-all mb-4"
            >
              <FaPhone className="text-xs" />
              0722 466 566
            </a>
            <p className="text-gray-500 font-inter text-xs leading-relaxed">
              Available Mon - Sat, 7:00 AM – 8:00 PM.
              Reach out for orders, inquiries, and support.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-inter text-sm text-center sm:text-left">
            © 2025 Hilal Distributors. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-accent font-inter text-sm transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all">
              <HiArrowUp className="text-sm" />
            </span>
          </button>
        </div>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="h-16 sm:h-0" />
    </footer>
  )
}
