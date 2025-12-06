"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Wifi,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">

      {/* Background Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10 py-24">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="px-4 py-2 bg-blue-600/10 text-blue-600 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            <Zap size={16} /> Fast • Secure • Reliable
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            DIKKO  
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              {" "}DATA
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Manage data, airtime, bills and digital payments seamlessly with 
            <span className="font-bold text-blue-600"> DIKKODATA</span>.  
            Built for speed, security and convenience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="https://app.dikkodata.com.ng">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-[#FE9701] to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Get Started  
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <Link href="https://app.dikkodata.com.ng">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-white border border-gray-300 text-gray-900 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
              >
                Sign In
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE — ANIMATED SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          {/* Floating Glowing Panel */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-80 h-80 bg-gradient-to-br from-blue-600/20 to-indigo-500/20 rounded-3xl blur-3xl"
          ></motion.div>

          {/* Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-xl shadow-xl border border-white/40 rounded-3xl p-10 w-96"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Digital Hub
            </h3>

            <ul className="space-y-4 text-gray-700 font-medium">
              <li className="flex items-center gap-3">
                <Smartphone size={22} className="text-blue-600" />
                Instant Airtime & Data
              </li>

              <li className="flex items-center gap-3">
                <Wifi size={22} className="text-indigo-600" />
                Fast Internet Subscriptions
              </li>

              <li className="flex items-center gap-3">
                <CreditCard size={22} className="text-green-600" />
                Bill Payments
              </li>

              <li className="flex items-center gap-3">
                <ShieldCheck size={22} className="text-purple-600" />
                Secure Transactions
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
