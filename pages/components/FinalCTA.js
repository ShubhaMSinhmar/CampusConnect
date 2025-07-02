// FinalCTA.js
import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-600/20 to-green-600/20 backdrop-blur-sm text-center relative overflow-hidden">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-white">
          Don't Miss Out on the Revolution
        </h2>
        <p className="text-xl text-yellow-100 mb-8 max-w-xl mx-auto">
          This early bird pricing is only available for the first 100 students. Once we launch, the price goes back to ₹2,500.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="relative inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105 shadow-lg"
          >
            <Star className="w-5 h-5 mr-2" /> Get Early Access - ₹250
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition duration-300"></span>
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 transition-colors"
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </motion.div>

      {/* Ambient background circles */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-ping"></div>
    </section>
  );
};

export default FinalCTA;
