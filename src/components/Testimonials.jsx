import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Mary Wanjiku',
    location: 'Ngong',
    rating: 5,
    text: "I've been a loyal customer for over 3 years. The delivery is always prompt and the gas quality is excellent. Hilal Distributors is truly the best in the area!",
    avatar: 'MW',
  },
  {
    name: 'James Otieno',
    location: 'Matasia',
    rating: 5,
    text: 'What sets them apart is the free servicing for cookers. No one else offers that! Plus their prices are fair and transparent. Highly recommend Halal Gas.',
    avatar: 'JO',
  },
  {
    name: 'Fatima Hassan',
    location: 'Bul Bul',
    rating: 5,
    text: 'Free delivery right to my door — and they always come within the hour. The customer service is fantastic. My whole family uses Hilal Distributors now.',
    avatar: 'FH',
  },
  {
    name: 'David Kamau',
    location: 'Zambia',
    rating: 4,
    text: "Excellent service and affordable prices. The complete 13KG set is great value for money. They're very professional and reliable. Won't go anywhere else!",
    avatar: 'DK',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-inter font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-gray-500 font-inter max-w-2xl mx-auto text-base sm:text-lg">
            Don't just take our word for it — hear from our satisfied customers across all branches.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-gray-100 border border-gray-100 h-full flex flex-col">
                  {/* Quote */}
                  <FaQuoteLeft className="text-primary/15 text-3xl mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${i < t.rating ? 'text-accent' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 font-inter text-sm leading-relaxed flex-1 mb-6">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-poppins font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-poppins font-semibold text-sm text-charcoal">{t.name}</p>
                      <p className="font-inter text-xs text-gray-400">{t.location} Branch</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
