"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "max-md:glass-nav max-md:py-3 md:bg-transparent md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-black tracking-tighter">
              <span className="text-indigo-600">JG</span>
              <span className={isScrolled ? "text-slate-900" : "max-md:text-slate-900 md:text-white"}>UNI</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "About", "Programs", "Campus", "Admissions"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold transition-colors hover:text-indigo-500 ${
                  isScrolled ? "text-slate-600" : "text-white/90"
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-indigo-600 to-rose-500 hover:from-indigo-500 hover:to-rose-400 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-1">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? "text-slate-900" : "max-md:text-slate-900 md:text-white"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
          {["Home", "About", "Programs", "Campus", "Admissions"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-800 font-medium px-4 py-2 hover:bg-indigo-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-gradient-to-r from-indigo-600 to-rose-500 hover:from-indigo-500 hover:to-rose-400 text-white px-4 py-3 rounded-xl font-bold w-full mt-4 transition-all duration-300 shadow-lg shadow-indigo-500/30">
            Apply Now
          </button>
        </div>
      )}
    </motion.nav>
  );
}
