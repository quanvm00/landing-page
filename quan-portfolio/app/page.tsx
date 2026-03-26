"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30 blur-3xl"></div>

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6"
        >
          Quan
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            AI Systems Builder
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-xl text-lg"
        >
          I design backend systems, AI workflows, and automation that reduce cost,
          eliminate manual work, and scale businesses.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black font-semibold">
            View Work
          </a>
          <a href="#contact" className="px-6 py-3 rounded-xl border border-white/30">
            Contact
          </a>
        </motion.div>
      </section>

      {/* VALUE PROPS */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Automation",
            desc: "Replace manual workflows with intelligent systems",
          },
          {
            title: "AI Integration",
            desc: "Connect GPT + internal data for smarter decisions",
          },
          {
            title: "Scalable Backend",
            desc: "Robust APIs, microservices, and ERP integration",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg">
          I'm an Engineer & AI Systems Builder specializing in backend systems,
          ERP, SQL Server, and intelligent automation.  
          My goal is simple: build systems that save time, reduce cost, and scale operations.
        </p>
      </section>

      {/* CASE STUDY */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Case Studies</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-800/30 to-black border border-white/10">
            <h3 className="text-xl font-bold">ERP Automation System</h3>
            <p className="text-gray-400 mt-3">
              Built an automation pipeline that reduced manual operations by 70%.
              Integrated SQL Server + workflow engine.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-800/30 to-black border border-white/10">
            <h3 className="text-xl font-bold">AI Workflow Engine</h3>
            <p className="text-gray-400 mt-3">
              Designed AI pipelines using GPT + internal data to automate decision-making.
            </p>
          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4 text-gray-300">
          {[
            "SQL Server",
            "Python",
            "Next.js",
            "ERP",
            "Power BI",
            "Mendix",
            "AI / LLM"
          ].map((tech, i) => (
            <span key={i} className="px-4 py-2 border border-white/20 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Smart</h2>
        <p className="text-gray-400 mb-8">
          Available for AI systems, backend architecture, and automation projects.
        </p>

        <a
          href="mailto:your@email.com"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold"
        >
          Contact Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © 2026 Quan — AI Systems Builder
      </footer>
    </main>
  );
}