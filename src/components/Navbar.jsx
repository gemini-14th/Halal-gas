import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import { FaFire } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Branches', href: '#branches' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent text-2xl"
            >
              <FaFire />
            </motion.div>
            <div>
              <h1 className="text-white font-poppins font-bold text-lg sm:text-xl leading-tight group-hover:text-accent transition-colors">
                Hilal Distributors
              </h1>
              <p className={`text-gray-400 text-[10px] sm:text-xs font-inter transition-all duration-300 ${
                scrolled ? 'opacity-0 h-0 -mt-1' : 'opacity-100'
              }`}>
                Authorised Dealers in L.P.G Gas Products
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent font-inter text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0722466566"
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-inter font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              <HiPhone className="text-base" />
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-charcoal z-50 lg:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2">
                    <FaFire className="text-accent text-xl" />
                    <span className="text-white font-poppins font-bold">Hilal</span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-white text-2xl p-1 hover:bg-white/10 rounded-lg"
                    aria-label="Close menu"
                  >
                    <HiX />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-300 hover:text-accent hover:bg-white/5 px-4 py-3 rounded-lg font-inter font-medium text-base transition-all"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                <a
                  href="tel:0722466566"
                  className="mt-8 flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-inter font-semibold w-full hover:bg-primary-dark transition-colors"
                >
                  <HiPhone />
                  Call 0722 466 566
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
