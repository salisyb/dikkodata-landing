"use client"
import { motion } from "framer-motion"
import { Download, UserPlus, CreditCard, ArrowRight, CheckCircle, Smartphone } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Download the App",
    description: "Get started by downloading the app from your preferred app store. It's quick, easy, and secure!",
    details: ["Available on iOS & Android", "Quick 30-second download", "No hidden fees"],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    number: "01",
  },
  {
    icon: UserPlus,
    title: "Create an Account",
    description: "Sign up in just a few steps to gain access to seamless bill payment services.",
    details: ["Simple registration", "Instant verification", "Secure profile setup"],
    color: "from-[#4070F4] to-[#5B8DEF]",
    bgColor: "bg-blue-50",
    number: "02",
  },
  {
    icon: CreditCard,
    title: "Start Transacting",
    description: "Purchase data, airtime, cable subscriptions, and electricity with ease—all in one place!",
    details: ["Multiple payment options", "Instant transactions", "24/7 availability"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    number: "03",
  },
]

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-72 h-72 bg-[#4070F4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-50/60 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#4070F4]/10 rounded-full text-[#4070F4] text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Get Started in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4070F4] to-[#60A5FA]">
              {" "}
              3 Easy Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied users who have simplified their bill payments with Abum DATA. It takes less
            than 5 minutes to get started.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-8">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-0.5 bg-gradient-to-r from-green-400 to-[#4070F4] flex-1 mx-8"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-0.5 bg-gradient-to-r from-[#4070F4] to-purple-400 flex-1 mx-8"
              />
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-3 relative">
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={itemVariants} whileHover={{ y: -8 }} className="group relative">
                <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative w-20 h-20 ${step.bgColor} rounded-3xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                    />
                    <step.icon
                      className={`h-10 w-10 text-gray-700 group-hover:text-[#4070F4] transition-colors duration-300`}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4070F4] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + detailIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-8">
                      <ArrowRight className="w-6 h-6 text-[#4070F4]" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Join over 50,000 users who trust Abum DATA for their daily transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(64, 112, 244, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4070F4] to-[#5B8DEF] text-white rounded-xl hover:from-[#3060E0] hover:to-[#4A7CDE] transition-all duration-300 font-semibold shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
