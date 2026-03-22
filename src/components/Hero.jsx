import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdDeliveryDining } from 'react-icons/md'

function FlameParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + 10
        this.size = Math.random() * 4 + 1
        this.speedY = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.8
        this.opacity = Math.random() * 0.6 + 0.2
        this.life = 0
        this.maxLife = Math.random() * 200 + 100
        const colors = [
          'rgba(211, 47, 47,',
          'rgba(255, 111, 0,',
          'rgba(253, 216, 53,',
          'rgba(255, 152, 0,',
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }
      update() {
        this.y -= this.speedY
        this.x += this.speedX + Math.sin(this.life * 0.02) * 0.3
        this.life++
        this.opacity = Math.max(0, this.opacity - 0.002)
        this.size = Math.max(0.2, this.size - 0.005)
        if (this.life > this.maxLife || this.opacity <= 0) {
          this.reset()
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `${this.color}${this.opacity})`
        ctx.fill()
      }
    }

    const count = Math.min(60, Math.floor(canvas.width / 15))
    for (let i = 0; i < count; i++) {
      const p = new Particle()
      p.y = Math.random() * canvas.height
      p.life = Math.random() * 100
      particles.push(p)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

function GasCylinder() {
  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      <svg viewBox="0 0 200 320" className="w-48 sm:w-56 md:w-64 lg:w-72 drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cylinder body */}
        <defs>
          <linearGradient id="cylGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B71C1C"/>
            <stop offset="30%" stopColor="#D32F2F"/>
            <stop offset="50%" stopColor="#EF5350"/>
            <stop offset="70%" stopColor="#D32F2F"/>
            <stop offset="100%" stopColor="#B71C1C"/>
          </linearGradient>
          <linearGradient id="capGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDD835"/>
            <stop offset="100%" stopColor="#F9A825"/>
          </linearGradient>
          <linearGradient id="handleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9E9E9E"/>
            <stop offset="100%" stopColor="#616161"/>
          </linearGradient>
        </defs>
        {/* Base */}
        <ellipse cx="100" cy="290" rx="55" ry="12" fill="#8B0000" opacity="0.4"/>
        {/* Main body */}
        <rect x="45" y="80" width="110" height="200" rx="12" fill="url(#cylGrad)"/>
        {/* Top dome */}
        <ellipse cx="100" cy="80" rx="55" ry="18" fill="url(#cylGrad)"/>
        {/* Bottom curve */}
        <ellipse cx="100" cy="280" rx="55" ry="14" fill="#B71C1C"/>
        {/* Cap */}
        <rect x="70" y="48" width="60" height="35" rx="6" fill="url(#capGrad)"/>
        <ellipse cx="100" cy="48" rx="30" ry="8" fill="#FFEE58"/>
        {/* Handle */}
        <path d="M80 30 Q80 12 100 12 Q120 12 120 30" stroke="url(#handleGrad)" strokeWidth="6" fill="none" strokeLinecap="round"/>
        {/* Valve */}
        <circle cx="100" cy="52" r="4" fill="#757575"/>
        {/* Label area */}
        <rect x="58" y="130" width="84" height="60" rx="6" fill="white" opacity="0.95"/>
        <text x="100" y="152" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="14" fill="#D32F2F">HALAL</text>
        <text x="100" y="170" textAnchor="middle" fontFamily="Poppins" fontWeight="700" fontSize="11" fill="#1A1A1A">GAS</text>
        <text x="100" y="184" textAnchor="middle" fontFamily="Inter" fontWeight="400" fontSize="7" fill="#666">L.P.G Products</text>
        {/* Shine */}
        <rect x="55" y="90" width="8" height="120" rx="4" fill="white" opacity="0.15"/>
        {/* Weight badge */}
        <circle cx="100" cy="240" r="18" fill="#FDD835" opacity="0.9"/>
        <text x="100" y="244" textAnchor="middle" fontFamily="Poppins" fontWeight="700" fontSize="12" fill="#1A1A1A">13KG</text>
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      <FlameParticles />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-inter font-semibold mb-6 border border-accent/30">
                🔥 Kenya's Trusted LPG Partner
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Powering Kenyan Homes with{' '}
              <span className="gradient-text">Clean, Affordable Gas</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 font-inter text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Your trusted LPG partner — <strong className="text-white">Halal Gas</strong> by Hilal Distributors. 
              Quality gas products delivered right to your doorstep with unmatched service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-inter font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/40 text-center active:scale-95"
              >
                View Prices
              </a>
              <a
                href="#branches"
                className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/30 hover:border-accent text-white hover:text-accent font-inter font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                <HiOutlineLocationMarker className="text-lg" />
                Find a Branch
              </a>
            </motion.div>

            {/* Free Delivery Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10"
            >
              <div className="delivery-badge inline-flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-2xl px-5 py-3">
                <div className="bg-accent rounded-xl p-2">
                  <MdDeliveryDining className="text-charcoal text-2xl" />
                </div>
                <div className="text-left">
                  <p className="text-accent font-poppins font-bold text-sm">FREE DELIVERY</p>
                  <p className="text-gray-500 text-xs font-inter">Right to your doorstep</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Gas Cylinder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-shrink-0"
          >
            <GasCylinder />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
