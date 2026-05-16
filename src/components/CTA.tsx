"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-slate-900 z-0" />
      <div className="absolute inset-0 opacity-20 z-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-slate-900/90 z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Take the first step towards a successful career. Applications are now open for the upcoming academic session.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl flex items-center justify-center group">
              Apply Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
