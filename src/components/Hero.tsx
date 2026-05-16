"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="University Campus"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 pt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-6">
              New Age Tech-Driven University
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Shape Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">Future</span> With Excellence
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Experience an experiential learning ecosystem where knowledge meets innovation. Join the community of global change leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center group">
                Explore Programs
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
                Virtual Tour
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { icon: BookOpen, label: "NEP 2020", sub: "Compliant" },
              { icon: Users, label: "Top Faculty", sub: "Global Experts" },
              { icon: GraduationCap, label: "High Placement", sub: "OJT Opportunities" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 mb-3">
                  <stat.icon className="text-indigo-400" size={24} />
                </div>
                <span className="text-white font-bold">{stat.label}</span>
                <span className="text-slate-400 text-xs">{stat.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
