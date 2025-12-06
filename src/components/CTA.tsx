"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Smartphone, CheckCircle, Star } from "lucide-react"

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FE9701] via-[#5B8DEF] to-[#FE9701] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              {/* Main Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="w-80 h-80 border-4 border-dashed border-white/30 rounded-full flex items-center justify-center"
              >
                <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <CheckCircle size={120} className="text-white" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[
                { icon: Download, position: "top-8 left-8", delay: 0 },
                { icon: Smartphone, position: "top-8 right-8", delay: 0.5 },
                { icon: Star, position: "bottom-8 left-8", delay: 1 },
                { icon: ArrowRight, position: "bottom-8 right-8", delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    y: { duration: 3 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotate: { duration: 8 + index * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2 + index * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className={`absolute ${item.position} w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Join 50,000+ Users
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Simplify Your
                <span className="block text-white/90">Digital Payments?</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Join thousands of satisfied users who have made DIKKODATA their go-to payment app. Experience the
                future of digital transactions today.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "Instant bill payments and airtime top-ups",
                "Bank-level security for all transactions",
                "24/7 customer support and assistance",
                "No hidden fees or surprise charges",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://app.dikkodata.com.ng" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-[#FE9701] rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg w-full sm:w-auto justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Started Now
                </motion.button>
              </Link>
              <Link href="https://app.dikkodata.com.ng" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30 w-full sm:w-auto justify-center"
                >
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-white/90 text-sm">4.9/5 Rating</span>
              </div>
              <div className="text-white/90 text-sm">50K+ Downloads</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
