"use client"

import React from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Security from "../components/Security"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-gray-50"
    >
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features /> 
        <HowItWorks />
        <Security />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  )
}

