/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Ibrahim H.",
    role: "Small Business Owner",
    text: "abumDATA has revolutionized how I manage my business payments. I can pay all my bills in one place and track everything seamlessly. It's saved me hours every week!",
    avatar: "/images/logo.png?height=80&width=80",
    rating: 5,
    location: "Lagos, Nigeria",
  },
  {
    name: "Abdulhamid J.",
    role: "Parent & Teacher",
    text: "The school payment feature is absolutely brilliant! No more long queues at the bank or worrying about payment deadlines. My children's school fees are always paid on time now.",
    avatar: "/images/logo.png?height=80&width=80",
    rating: 5,
    location: "Abuja, Nigeria",
  },
  {
    name: "Tunde J.",
    role: "Tech Professional",
    text: "I love how I can quickly top up my data whenever I need it. The app is incredibly fast and reliable. It's become an essential part of my daily routine!",
    avatar: "/images/logo.png?height=80&width=80",
    rating: 5,
    location: "Ibadan, Nigeria",
  },
  {
    name: "Fatima A.",
    role: "University Student",
    text: "As a student, managing my expenses is crucial. abumDATA makes it so easy to pay for data, electricity, and even my cable subscription. The interface is super user-friendly!",
    avatar: "/images/logo.png?height=80&width=80",
    rating: 5,
    location: "Kano, Nigeria",
  },
  {
    name: "Michael O.",
    role: "Entrepreneur",
    text: "The security features give me complete peace of mind. I've been using abumDATA for over a year now, and every transaction has been smooth and secure. Highly recommended!",
    avatar: "/images/logo.png?height=80&width=80",
    rating: 5,
    location: "Port Harcourt, Nigeria",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
    hidden: { opacity: 0, y: 30 },
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
      id="testimonials"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4070F4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            50,000+ Happy Users
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            What Our Users
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4070F4] to-[#60A5FA]"> Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real users have to say about their experience with Abum DATA.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#4070F4]/20" />

            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-4 border-[#4070F4]/20"
                />
                <div className="text-left">
                  <p className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-[#4070F4] font-medium">{testimonials[currentIndex].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-gray-100 hover:bg-[#4070F4] hover:text-white rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#4070F4] w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-gray-100 hover:bg-[#4070F4] hover:text-white rounded-full transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</blockquote>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-[#4070F4]/20"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-[#4070F4]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50K+", label: "Happy Users" },
            { number: "1M+", label: "Transactions" },
            { number: "99.9%", label: "Uptime" },
            { number: "4.9/5", label: "App Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#4070F4] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
