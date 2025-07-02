// Features.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MessageSquare,
  Smartphone,
  Bell,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Discovery Queue',
    description:
      'Discover amazing events both inside and outside your campus. Never miss out on opportunities that matter to you.',
    highlight: 'Smart AI-powered recommendations',
    color: 'from-indigo-500 to-indigo-300'
  },
  {
    icon: MessageSquare,
    title: 'Discussion Boards',
    description:
      'Connect with peers through dedicated boards for jobs, hackathons, internships, and much more. Share knowledge and grow together.',
    highlight: 'Topic-specific communities',
    color: 'from-cyan-500 to-cyan-300'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Access CampusConnect on-the-go with our native Android and iOS apps. Stay connected wherever you are.',
    highlight: 'Coming to App Store & Play Store',
    color: 'from-yellow-500 to-yellow-300'
  },
  {
    icon: Bell,
    title: 'Regular Updates',
    description:
      "Get the latest features, improvements, and campus news delivered straight to you. We're constantly evolving.",
    highlight: 'Weekly feature releases',
    color: 'from-green-500 to-green-300'
  }
];

const Features = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          What's Coming in
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            CampusConnect 2.0
          </span>
        </motion.h2>

        <motion.p 
          className="text-xl text-cyan-100 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          We're building the most comprehensive platform for campus life. Here's what you can expect.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map(({ icon: Icon, title, description, highlight, color }, index) => (
            <motion.div
              key={index}
              className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 bg-gradient-to-br ${color}`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
              <p className="text-cyan-100 leading-relaxed mb-4">{description}</p>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20`}>
                <CheckCircle className="w-4 h-4" />
                <span>{highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
