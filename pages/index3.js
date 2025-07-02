// Home Page (Revamped with Full UX + Visual Polish)
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MessageSquare,
  Smartphone,
  Bell,
  Star,
  ArrowRight,
  Timer,
  CheckCircle,
  Gift,
  Sparkles,
} from "lucide-react";
import Confetti from "react-confetti";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import CountUp from "react-countup";
import HeroEnhanced from "./heroboy";

const Home = () => {
  const [seatsLeft, setSeatsLeft] = useState(87);
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30,
  });
  const [showCTA, setShowCTA] = useState(false);

  const RotatingCube = () => {
    return (
      <mesh rotation={[0.4, 0.4, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="orange" wireframe />
      </mesh>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowCTA(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const testimonials = [
    {
      name: "Koshank Jayant",
      quote:
        "CampusConnect completely transformed how I discover and join events. The early bird offer was a steal!",
    },
    {
      name: "Shubham Sinhmar",
      quote:
        "The discussion boards have helped me connect with amazing peers and land internships. Can’t wait for more!",
    },
    {
      name: "Kanwar Singh",
      quote:
        "I’ve never seen a more beautiful, useful platform for college students. Absolute game changer.",
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Discovery Queue",
      description:
        "Discover amazing events both inside and outside your campus. Never miss out on opportunities that matter to you.",
      color: "indigo",
      highlight: "Smart AI-powered recommendations",
    },
    {
      icon: MessageSquare,
      title: "Discussion Boards",
      description:
        "Connect with peers through dedicated boards for jobs, hackathons, internships, and much more. Share knowledge and grow together.",
      color: "cyan",
      highlight: "Topic-specific communities",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Access CampusConnect on-the-go with our native Android and iOS apps. Stay connected wherever you are.",
      color: "yellow",
      highlight: "Coming to App Store & Play Store",
    },
    {
      icon: Bell,
      title: "Regular Updates",
      description:
        "Get the latest features, improvements, and campus news delivered straight to you. We're constantly evolving.",
      color: "green",
      highlight: "Weekly feature releases",
    },
  ];

  const universities = [
    { name: "IIT Delhi", logo: "/colleges/iitDel.png" },
    { name: "BITS Pilani", logo: "/colleges/BitsPilani.png" },
    { name: "NSUT", logo: "/colleges/nsut.png" },
  ];

  const events = [
    {
      name: "HackTIET 2025",
      image: "/hackathon/saturnalia.png",
      date: "August 20, 2025",
      location: "Patiala",
    },
    {
      name: "IITB TechFest",
      image: "/hackathon/iit-delhi.png",
      date: "August 30, 2025",
      location: "Mumbai",
    },
  ];

  const colorMap = {
    indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
    cyan: "bg-cyan-100 text-cyan-600 border-cyan-200",
    yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
    green: "bg-green-100 text-green-600 border-green-200",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-cyan-900 to-indigo-800 relative overflow-hidden text-white font-sans">
      {showCTA && (
        <motion.div
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-3 hover:scale-105 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Gift className="w-5 h-5" />
          <Link href="/signup" className="font-bold">
            Join Now for ₹250 – Limited Seats!
          </Link>
        </motion.div>
      )}
      {/* Floating Lights */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-400/20 blur-3xl rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-cyan-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-16 left-10 w-24 h-24 bg-white/20 rounded-full animate-bounce delay-200"></div>
      </div>

      <main className="relative z-10">
        {/* <HeroEnhanced /> */}

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-white font-semibold">
              Pre-Launch Early Access
            </span>
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-gradient">
              Campus Life
            </span>
            <span className="block">is Coming Soon</span>
          </h1>

          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-12 animate-slide-up">
            Join thousands of students already on the waitlist for the most
            comprehensive campus platform ever built.
          </p>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl max-w-2xl mx-auto mb-10 animate-slide-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Timer className="w-6 h-6 text-yellow-300" />
              <h3 className="text-xl font-bold">Early Bird Offer Ends In</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
                <div key={i} className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-bold">
                    {Object.values(timeLeft)[i].toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-cyan-100">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border border-yellow-300/20 p-8 rounded-3xl max-w-lg mx-auto animate-slide-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="w-6 h-6 text-yellow-300" />
              <span className="text-yellow-200 font-semibold">
                EARLY BIRD SPECIAL
              </span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-xl text-white/60 line-through">
                  ₹2,500
                </span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  90% OFF
                </span>
              </div>
              <div className="text-4xl font-bold text-white mb-1">₹250</div>
              <div className="text-yellow-100 text-sm">
                For 4 years of unlimited access
              </div>
            </div>
            <div className="mt-6 text-white/80 text-sm mb-3">
              Only {seatsLeft} seats left!
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-green-400 rounded-full transition-all duration-300"
                style={{ width: `${100 - seatsLeft}%` }}
              ></div>
            </div>
            <Link
              href="/signup"
              className="block mt-6 bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white font-bold py-4 rounded-xl transition-transform hover:scale-105 shadow-xl"
            >
              Secure Your Spot Now
            </Link>
          </div>
          {/* Join Notification */}
          <div className="mt-6 text-sm text-yellow-200 bg-white/10 rounded-full px-4 py-2 inline-flex items-center justify-center gap-2 animate-pulse">
            <Star className="w-4 h-4 text-yellow-300" />
            <span>Shubham just joined CampusConnect!</span>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              What's Coming in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                CampusConnect 2.0
              </span>
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-12">
              We're building the most comprehensive platform for campus life.
              Here's what you can expect.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {features.map(
                (
                  { icon: Icon, title, description, highlight, color },
                  index
                ) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-2"
                  >
                    <div
                      className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 ${
                        colorMap[color].split(" ")[0]
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${colorMap[color].split(" ")[1]}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-cyan-100 leading-relaxed mb-4">
                      {description}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colorMap[color]}`}
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>{highlight}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Partnering Universities */}
        <section className="py-15 px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Our University Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {universities.map((u, idx) => (
              <div key={idx} className="transition hover:scale-110">
                <img
                  src={u.logo}
                  alt={u.name}
                  className="h-28 sm:h-40 grayscale hover:grayscale-0 transition rounded-md"
                />
                <p className="mt-2 text-cyan-100 font-medium">{u.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
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

        {/* Waitlist Section */}
        <section className="py-20 px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-10">Join the Waitlist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-3xl font-bold mb-1">2,847</div>
              <div className="text-cyan-200">Students Waiting</div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-cyan-200">Societies Interested</div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-cyan-200">Universities Partnered</div>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl max-w-2xl mx-auto backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
            <p className="text-cyan-100 mb-6">
              Get exclusive updates, early access, and special offers. No spam,
              just the good stuff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-xl placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:scale-105 transition-transform flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-cyan-900 to-cyan-800 text-white text-center">
          <h2 className="text-4xl font-bold mb-12">
            Upcoming Hackathons & Events
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 rounded-3xl overflow-hidden shadow-xl border border-white/20"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                  <p className="text-cyan-200 mb-1 font-semibold">
                    📍 {event.location}
                  </p>
                  <p className="text-yellow-200 font-semibold">
                    📅 {event.date}
                  </p>
                  <Link
                    href="/events"
                    className="inline-block mt-4 text-yellow-400 font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-t from-cyan-900 to-cyan-800 backdrop-blur-sm text-center">
          <h2 className="text-4xl font-bold mb-4">
            Don't Miss Out on the Revolution
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-xl mx-auto">
            This early bird pricing is only available for the first 100
            students. Once we launch, the price goes back to ₹2,500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Star className="w-5 h-5" /> Get Early Access - ₹250
            </Link>
            <Link
              href="/events"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Partnering Universities
        <section className="py-20 px-6 lg:px-12 text-center bg-gradient-to-t from-cyan-900 to-green-600/20">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Our University Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {universities.map((u, idx) => (
              <div key={idx} className="transition hover:scale-110">
                <img
                  src={u.logo}
                  alt={u.name}
                  className="h-28 sm:h-40 grayscale hover:grayscale-0 transition rounded-sm"
                />
                <p className="mt-2 text-cyan-100 font-medium">{u.name}</p>
              </div>
            ))}
          </div>
        </section> */}
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
