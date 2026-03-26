import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
<button className="px-6 py-3 rounded-2xl bg-white text-black">
  Contact Me
</button>

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="max-w-6xl mx-auto py-16">
    <h2 className="text-3xl font-semibold mb-8">{title}</h2>
    {children}
  </section>
);
<div className="bg-gray-800 p-6 rounded-2xl">
  <h3 className="text-xl font-bold mb-2">Title</h3>
  <p className="text-gray-400">Description</p>
</div>
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-lg">Quan.dev</div>
          <div className="space-x-6 text-sm">
            <a href="#about">About</a>
            <a href="#ai">AI Systems</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6"
        >
          Building AI-Powered Systems
        </motion.h1>
        <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          I design scalable data pipelines and integrate AI to automate business workflows.
          From SQL to LLMs — I turn data into intelligent systems.
        </p>
        <div className="space-x-4">
          <button  className="px-6 py-3 rounded-2xl">Hire Me</button>
          <button    className="px-6 py-3 rounded-2xl border border-white">View Projects</button>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          I'm a Data Engineer & AI Systems Builder specializing in backend systems,
          automation, and intelligent workflows. I work across SQL Server, Python,
          APIs, and LLM-based architectures to build systems that reduce manual work
          and improve decision-making.
        </p>
      </Section>

      {/* AI Systems */}
      <Section id="ai" title="AI Systems Builder">
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            title: "AI Agents & LLM",
            desc: "Design AI agents using APIs, MCP tools, and prompt workflows."
          }, {
            title: "Automation Pipelines",
            desc: "End-to-end automation combining AI + data + backend systems."
          }, {
            title: "Data + AI",
            desc: "Integrate ETL pipelines with AI models for analytics."
          }, {
            title: "System Integration",
            desc: "Connect Odoo, SQL Server, APIs into unified systems."
          }].map((item) => (
            <Card key={item.title} className="bg-gray-800 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section id="exp" title="Experience">
        <div className="space-y-6">
          {[{
            role: "Data Engineer",
            desc: "Built ETL pipelines, optimized SQL systems, handled large datasets."
          }, {
            role: "BI Developer",
            desc: "Developed dashboards and reporting systems using Power BI."
          }, {
            role: "AI Systems Builder",
            desc: "Developing AI-driven automation systems integrated with business workflows."
          }].map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="border-l-2 border-gray-700 pl-6"
            >
              <h4 className="font-semibold">{job.role}</h4>
              <p className="text-gray-400">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            name: "Odoo AI Assistant",
            desc: "AI assistant integrated with ERP for automation & query handling."
          }, {
            name: "Data Migration System",
            desc: "Automated migration with logging, rollback, and validation."
          }, {
            name: "BI Dashboard System",
            desc: "Business intelligence dashboards with real-time insights."
          }, {
            name: "AI Workflow Automation",
            desc: "LLM-powered workflows for business process automation."
          }].map((p) => (
            <Card key={p.name} className="bg-gray-800 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-gray-400">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-4">Let’s Build Something Smart</h2>
        <p className="text-gray-400 mb-6">Open for freelance & full-time opportunities.</p>
        <div className="space-x-4">
          <a href="mailto:yourmail@gmail.com">
            <button className="px-6 py-3 rounded-2xl border border-white">Email</button>
          </a>
          <a href="#">
            <button   className="px-6 py-3 rounded-2xl border border-white">GitHub</button>
          </a>
        </div>
      </section>
    </div>
  );
}
