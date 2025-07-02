// Waitlist.js
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Students Waiting', value: 2847 },
  { label: 'Societies Interested', value: 150 },
  { label: 'Universities Partnered', value: 25 }
];

const Waitlist = () => {
  return (
    <section className="py-20 px-6 lg:px-12 text-center">
      <motion.h2 
        className="text-4xl font-bold mb-10 text-white"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Join the Waitlist
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {stats.map(({ label, value }, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-md transform transition-transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="text-3xl font-bold text-white mb-1">
              {value.toLocaleString()}
            </div>
            <div className="text-cyan-200">{label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white/10 p-8 rounded-3xl max-w-2xl mx-auto backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">Be the First to Know</h3>
        <p className="text-cyan-100 mb-6">
          Get exclusive updates, early access, and special offers. No spam, just the good stuff.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-xl placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:scale-105 transition-transform">
            Join Waitlist
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
