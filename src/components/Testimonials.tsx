"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    content: "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers; they served as mentors. The values and principles that I imbibed at JG continue to serve as a guiding light for me.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Head at TCS",
    content: "My education at JG has played a pivotal role in shaping my career. The BCA program provided me with a strong foundation in IT, and the faculties focus on giving the best training gave me the opportunity to apply my knowledge in real-world scenarios.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Krishna Soni",
    role: "Management Professional",
    content: "The Management programme offers cutting-edge course design, top-notch industry teachers, and hands-on experience projects. The University places a strong emphasis on personality development in addition to academics.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">Alumni Stories</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Hear From Our Achievers
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-slate-50 rounded-3xl p-8 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 text-indigo-100 rotate-180" size={48} />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-indigo-600 font-medium">{t.role}</p>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed relative z-10 italic">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0" />
      </div>
    </section>
  );
}
