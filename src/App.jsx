import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Branches from './components/Branches'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileCallBar from './components/MobileCallBar'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Pricing />
      <Branches />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </div>
  )
}

export default App
