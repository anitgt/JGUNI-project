"use client";

import { motion } from "framer-motion";
import { Target, Award, Globe, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Interdisciplinary Approach",
      description: "Connect, ideate and solve problems with different conceptual structures and methods."
    },
    {
      icon: Zap,
      title: "Immersive Learning",
      description: "Exposure to real-life projects to develop hands-on expertise and practical skills."
    },
    {
      icon: Award,
      title: "Whole Brain Pedagogy",
      description: "Empowering learners to acquire future-proof skills and moulding creative thinkers."
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Partnerships with foreign universities for curriculum and student exchange."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">About JG University</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Knowledge is the power that no one can take away.
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Sponsored by the ASIA Charitable Trust, which has been in education since 1965. JG University is a New Age Tech-Driven institution offering programs that evolve as per future industry demands, ensuring seamless transitions into employment.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <feature.icon className="text-indigo-600" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 glass-card rounded-2xl p-6 border-white/20">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-indigo-600">58+</div>
                  <div className="text-slate-800 font-medium">
                    Years of Educational<br />Excellence (Since 1965)
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative pattern */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
