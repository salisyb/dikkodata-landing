"use client"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, CheckCircle, ArrowRight, Fingerprint, Key, Database } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "256-bit SSL Encryption",
    description: "Bank-grade encryption protects all your data",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Secure login with fingerprint and face ID",
  },
  {
    icon: Eye,
    title: "Real-time Monitoring",
    description: "24/7 fraud detection and prevention",
  },
  {
    icon: Database,
    title: "Secure Data Storage",
    description: "Your information is encrypted and protected",
  },
]

const Security = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#FE9701]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
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
            {/* Main Shield */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative w-80 h-80 bg-gradient-to-br from-[#FE9701] to-[#5B8DEF] rounded-full flex items-center justify-center shadow-2xl"
              >
                <Shield size={120} className="text-white" />

                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-[#FE9701]/20 animate-ping" />
                <div className="absolute inset-4 rounded-full bg-[#FE9701]/10 animate-ping animation-delay-1000" />
              </motion.div>

              {/* Floating Security Icons */}
              {[
                { icon: Lock, position: "top-8 left-8", delay: 0 },
                { icon: Key, position: "top-8 right-8", delay: 0.5 },
                { icon: Fingerprint, position: "bottom-8 left-8", delay: 1 },
                { icon: Database, position: "bottom-8 right-8", delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    y: { duration: 3 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotate: { duration: 8 + index * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2 + index * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className={`absolute ${item.position} w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center`}
                >
                  <item.icon className="w-8 h-8 text-[#FE9701]" />
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
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Bank-Level Security
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Your Security is Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9701] to-[#60A5FA]">
                  {" "}
                  Top Priority
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We employ military-grade security measures to ensure your data and transactions are always protected.
                Pay bills with complete confidence, knowing your information is safeguarded by industry-leading
                technology.
              </p>
            </div>

            {/* Security Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {securityFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#FE9701]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#FE9701]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Security Certifications</h3>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  PCI DSS Compliant
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ISO 27001 Certified
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  SOC 2 Type II
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  GDPR Compliant
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(64, 112, 244, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FE9701] to-[#5B8DEF] text-white rounded-xl hover:from-[#3060E0] hover:to-[#4A7CDE] transition-all duration-300 font-semibold shadow-lg"
              >
                Learn About Our Security
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                View Security Report
                <Eye className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Security
