import React from 'react'
import { HiPhone } from 'react-icons/hi'

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <a
        href="tel:0722466566"
        className="flex items-center justify-center gap-2 bg-primary text-white py-3.5 font-inter font-semibold text-sm shadow-xl shadow-primary/30"
      >
        <HiPhone className="text-lg animate-pulse" />
        Call Now — 0722 466 566
      </a>
    </div>
  )
}
