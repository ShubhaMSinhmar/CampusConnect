// Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Koshank Jayant',
    quote:
      'CampusConnect completely transformed how I discover and join events. The early bird offer was a steal!'
  },
  {
    name: 'Shubham Sinhmar',
    quote:
      'The discussion boards have helped me connect with amazing peers and land internships. Can’t wait for more!'
  },
  {
    name: 'Kanwar Singh',
    quote:
      'I’ve never seen a more beautiful, useful platform for college students. Absolute game changer.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 lg:px-12 text-center">
      <motion.h2
        className="text-4xl font-bold text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Students Are Saying
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map(({ name, quote }, i) => (
          <motion.div
            key={i}
            className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-white/20 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <p className="text-cyan-100 italic mb-4">“{quote}”</p>
            <h4 className="text-white font-semibold text-lg">— {name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
