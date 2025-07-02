// CONTINUED: HeroSection.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Timer, Gift } from 'lucide-react';
import Link from 'next/link';
import Confetti from 'react-confetti';
import useWindowSize from '@/pages/hooks/useWindowSize';

const HeroSection = () => {
  const [seatsLeft, setSeatsLeft] = useState(87);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 8, minutes: 42, seconds: 30 });
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleJoinClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-12 text-center relative">
      {showConfetti && <Confetti width={width} height={height} />} 

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8"
      >
        <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
        <span className="text-white font-semibold">Pre-Launch Early Access</span>
        <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        The Future of
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-gradient">Campus Life</span>
        <span className="block">is Coming Soon</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Join thousands of students already on the waitlist for the most comprehensive campus platform ever built.
      </motion.p>

      <motion.div
        className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Timer className="w-6 h-6 text-yellow-300" />
          <h3 className="text-xl font-bold">Early Bird Offer Ends In</h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {['days', 'hours', 'minutes', 'seconds'].map((label, i) => (
            <motion.div key={i} className="bg-white/20 rounded-xl p-4" whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold">
                {String(timeLeft[label]).padStart(2, '0')}
              </div>
              <div className="text-sm text-cyan-100">{label.charAt(0).toUpperCase() + label.slice(1)}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border border-yellow-300/20 p-8 rounded-3xl max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Gift className="w-6 h-6 text-yellow-300" />
          <span className="text-yellow-200 font-semibold">EARLY BIRD SPECIAL</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-xl text-white/60 line-through">₹2,500</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">90% OFF</span>
          </div>
          <div className="text-4xl font-bold text-white mb-1">₹250</div>
          <div className="text-yellow-100 text-sm">For 4 years of unlimited access</div>
        </div>
        <div className="mt-6 text-white/80 text-sm mb-3">Only {seatsLeft} seats left!</div>
        <div className="h-3 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-400 to-green-400 rounded-full transition-all duration-300" style={{ width: `${(100 - seatsLeft)}%` }}></div>
        </div>
        <Link
          href="/signup"
          className="block mt-6 bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white font-bold py-4 rounded-xl transition-transform hover:scale-105 shadow-xl"
          onClick={handleJoinClick}
        >
          Secure Your Spot Now
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
