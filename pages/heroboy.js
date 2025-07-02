// Parallax + Glassmorphism + Mascot + Progress Ring
import React, { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Lottie from 'react-lottie-player';


const HeroEnhanced = () => {
  const [progress, setProgress] = useState(87); // 87 of 100 seats
  const [studentBotAnim, setStudentBotAnim] = useState(null);

  useEffect(() => {
    fetch("./animations/student-bot.json")
      .then((res) => res.json())
      .then(setStudentBotAnim);
  }, []);

  // Progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <ParallaxProvider>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-cyan-900 to-indigo-800 text-white">
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 p-10 max-w-2xl w-full rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
        >
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome to CampusConnect</h1>
          <p className="text-cyan-100 text-center text-lg mb-8">
            Secure your early bird access today and join a community of changemakers.
          </p>

          {/* Progress Ring */}
          <div className="w-40 mx-auto">
            <CircularProgressbarWithChildren
              value={progress}
              maxValue={100}
              styles={buildStyles({
                pathColor: '#facc15',
                trailColor: '#334155',
                strokeLinecap: 'round',
              })}
            >
              <div className="text-yellow-300 font-bold text-xl">{100 - progress} Seats Left</div>
            </CircularProgressbarWithChildren>
          </div>
        </motion.div>

        {/* Mascot Animation */}
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 opacity-80">
          <Lottie loop animationData={studentBotAnim} play />
        </div>

        {/* Parallax Lights */}
        <Parallax speed={-20}>
          <div className="absolute top-20 right-40 w-60 h-60 bg-yellow-400/20 blur-3xl rounded-full animate-pulse" />
        </Parallax>
        <Parallax speed={10}>
          <div className="absolute bottom-32 left-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full animate-ping" />
        </Parallax>
      </section>
    </ParallaxProvider>
  );
};

export default HeroEnhanced;
