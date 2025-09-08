"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  CreditCard,
  Smartphone,
  Zap,
  Shield,
  Wifi,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4070F4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-50/80 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            {/* Hero Title */}
            <motion.div variants={titleVariants} className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#4070F4] via-[#5B8DEF] to-[#4070F4] bg-clip-text text-transparent mb-4 leading-tight">
                Welcome to
              </h1>
              <motion.h1
                variants={titleVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(64, 112, 244, 0)",
                    "0 0 20px rgba(64, 112, 244, 0.3)",
                    "0 0 0px rgba(64, 112, 244, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Abum Data
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Experience lightning-fast bill payments, instant airtime top-ups,
              and seamless data purchases.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://app.abumdata.com.ng/register"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4070F4] to-[#5B8DEF] text-white rounded-xl hover:from-[#3060E0] hover:to-[#4A7CDE] transition-all duration-300 font-semibold shadow-lg shadow-[#4070F4]/25"
                >
                  Get Started Free
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://app.abumdata.com.ng/login"
                  className="inline-flex items-center px-8 py-4 bg-gray-100 backdrop-blur-sm text-gray-900 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold border border-gray-300"
                >
                  Sign In
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated Hero Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-4xl mx-auto"
          >
            {/* Central Animated Circle */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="relative w-80 h-80 mx-auto bg-gradient-to-r from-[#4070F4]/10 to-[#5B8DEF]/10 rounded-full flex items-center justify-center border-2 border-[#4070F4]/20"
            >
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: {
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  scale: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                className="w-32 h-32 bg-gradient-to-r from-[#4070F4] to-[#5B8DEF] rounded-full flex items-center justify-center shadow-lg"
              >
                <Zap className="w-16 h-16 text-white" />
              </motion.div>
            </motion.div>

            {/* Floating Service Icons */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-0 left-1/4 w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
            >
              <CreditCard className="w-10 h-10 text-green-500" />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
              className="absolute top-1/4 right-0 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
            >
              <Smartphone className="w-8 h-8 text-blue-500" />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
              className="absolute bottom-1/4 left-0 w-18 h-18 bg-purple-500/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
            >
              <Shield className="w-9 h-9 text-purple-500" />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1.5 }}
              className="absolute bottom-0 right-1/4 w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
            >
              <Wifi className="w-8 h-8 text-yellow-500" />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
              className="absolute top-1/2 left-8 w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
            >
              <DollarSign className="w-7 h-7 text-red-500" />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2.5 }}
              className="absolute top-1/2 right-8 w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
            >
              <Clock className="w-7 h-7 text-indigo-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
