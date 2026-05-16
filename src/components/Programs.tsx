"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Briefcase, Calculator, Microscope, Scale, Database } from "lucide-react";

const categories = ["Computing", "Management", "Commerce", "Engineering", "Science", "Law"];

const programs = [
  { name: "B.Tech - Artificial Intelligence & Machine Learning", category: "Engineering", duration: "4 years", type: "Undergraduate" },
  { name: "B.Tech - Computer Science & Engineering", category: "Engineering", duration: "4 years", type: "Undergraduate" },
  { name: "BCA / BCA (Hons)", category: "Computing", duration: "3-4 years", type: "Undergraduate" },
  { name: "MCA - AI & Full Stack Development", category: "Computing", duration: "2 years", type: "Postgraduate" },
  { name: "BBA / BBA (Hons)", category: "Management", duration: "3-4 years", type: "Undergraduate" },
  { name: "iMBA", category: "Management", duration: "5 years", type: "Integrated" },
  { name: "B.Com / B.Com (Hons) with ACCA", category: "Commerce", duration: "3-4 years", type: "Undergraduate" },
  { name: "B.Sc.(Hons) - Cyber & Digital Forensic", category: "Science", duration: "3-5 years", type: "Undergraduate" },
  { name: "LL.B.", category: "Law", duration: "3 years", type: "Undergraduate" },
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("Computing");

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">Our Programs</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Future-Ready Academic Programs
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from a wide range of undergraduate, postgraduate, and integrated programs designed to align with industry requirements and NEP 2020 guidelines.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {programs
              .filter((p) => p.category === activeCategory)
              .map((program, idx) => (
                <motion.div
                  key={program.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full">
                      {program.type}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">{program.duration}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {program.name}
                  </h4>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a href="#" className="text-indigo-600 font-semibold text-sm flex items-center group-hover:underline">
                      View Details
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
