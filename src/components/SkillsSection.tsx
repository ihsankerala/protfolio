import React from 'react';
import {
  Terminal,
  Layers,
  Brain,
  Globe,
  Boxes,
  CheckCircle2,
  Zap,
  Eye,
  Users,
  Clock,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section className="w-full max-w-[76rem] mx-auto px-4 lg:px-6 py-16" id="skills">
      <div className="flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-[13px] text-[#4cd7f6]">
            <span className="text-[#4edea3]">02.</span>
            <span className="font-semibold uppercase tracking-wider">CAPABILITIES / STACK</span>
          </div>
          <h2 className="text-[32px] sm:text-[36px] font-bold text-[#e1e2ec] tracking-tight">
            Technical Expertise &amp; Core Domains
          </h2>
          <p className="text-[15px] text-[#bcc9cd] max-w-2xl">
            Curated skillset spanning core programming languages, web engineering frameworks, object-oriented concepts, and collaborative execution.
          </p>
        </div>

        {/* Skills Matrix 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Technical Languages & Tools */}
          <div className="p-6 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md flex flex-col gap-4">
            <div className="flex items-center justify-between pb-1 border-b border-[#272a32]">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#4cd7f6]" />
                <h3 className="text-[18px] font-bold text-[#e1e2ec]">Languages &amp; Tools</h3>
              </div>
              <span className="font-mono text-[11px] text-[#4cd7f6] uppercase font-semibold">Code</span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Python */}
              <div className="p-3.5 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col gap-1.5 transition-all hover:border-[#4edea3]/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[15px] text-[#e1e2ec] font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span> Python
                  </span>
                  <span className="font-mono text-[11px] text-[#4edea3] font-medium">Primary Language</span>
                </div>
                <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
                  Core scripting, data structures, automation, OOP architecture, backend Flask logic.
                </p>
              </div>

              {/* Flask */}
              <div className="p-3.5 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col gap-1.5 transition-all hover:border-[#4cd7f6]/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[15px] text-[#e1e2ec] font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span> Flask
                  </span>
                  <span className="font-mono text-[11px] text-[#4cd7f6] font-medium">Backend Framework</span>
                </div>
                <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
                  REST APIs, microservice routing, template rendering, enterprise business logic.
                </p>
              </div>

              {/* C Language */}
              <div className="p-3.5 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col gap-1.5 transition-all hover:border-[#adc6ff]/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[15px] text-[#e1e2ec] font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#adc6ff]"></span> C
                  </span>
                  <span className="font-mono text-[11px] text-[#adc6ff] font-medium">Foundations</span>
                </div>
                <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
                  Memory fundamentals, procedural logic, pointer operations, low-level reasoning.
                </p>
              </div>

              {/* HTML & CSS */}
              <div className="p-3.5 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col gap-1.5 transition-all hover:border-[#869397]/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[15px] text-[#e1e2ec] font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#869397]"></span> HTML &amp; CSS
                  </span>
                  <span className="font-mono text-[11px] text-[#869397] font-medium">Markup &amp; Styling</span>
                </div>
                <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
                  Semantic web structuring, clean layouts, and presentation layer integration.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Core Engineering Domains */}
          <div className="p-6 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md flex flex-col gap-4">
            <div className="flex items-center justify-between pb-1 border-b border-[#272a32]">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#4edea3]" />
                <h3 className="text-[18px] font-bold text-[#e1e2ec]">Core Domains</h3>
              </div>
              <span className="font-mono text-[11px] text-[#4edea3] uppercase font-semibold">Systems</span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Web Development */}
              <div className="p-4 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col gap-1.5">
                <span className="text-[16px] font-bold text-[#e1e2ec] flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#4cd7f6]" /> Web Development
                </span>
                <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
                  Full-cycle web application delivery, request dispatching, authentication workflows, and client state orchestration.
                </p>
              </div>

              {/* AI / ML Concepts */}
              <div className="p-4 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col gap-1.5">
                <span className="text-[16px] font-bold text-[#e1e2ec] flex items-center gap-2">
                  <Brain className="w-4 h-4 text-[#4edea3]" /> AI &amp; ML Concepts
                </span>
                <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
                  Foundational machine learning models, statistical data analysis, training workflows, and applied intelligent logic.
                </p>
              </div>

              {/* Object-Oriented Programming (OOP) */}
              <div className="p-4 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col gap-1.5">
                <span className="text-[16px] font-bold text-[#e1e2ec] flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-[#adc6ff]" /> Object-Oriented (OOP)
                </span>
                <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
                  Deep command of classes, objects, strict data encapsulation, getters/setters, properties, and reusable domain models.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Soft Skills & Execution */}
          <div className="p-6 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md flex flex-col gap-4">
            <div className="flex items-center justify-between pb-1 border-b border-[#272a32]">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#adc6ff]" />
                <h3 className="text-[18px] font-bold text-[#e1e2ec]">Soft Skills</h3>
              </div>
              <span className="font-mono text-[11px] text-[#adc6ff] uppercase font-semibold">Execution</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Problem-Solving Ability */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#191b23] border border-[#272a32]">
                <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[14px] text-[#e1e2ec] font-semibold">Problem-Solving Ability</span>
                  <span className="text-[12px] text-[#bcc9cd] leading-relaxed">Decomposing complex edge cases into structured computational algorithms.</span>
                </div>
              </div>

              {/* Quick Learner */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#191b23] border border-[#272a32]">
                <Zap className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[14px] text-[#e1e2ec] font-semibold">Quick Learner</span>
                  <span className="text-[12px] text-[#bcc9cd] leading-relaxed">Rapid uptake of novel frameworks, system libraries, and paradigms.</span>
                </div>
              </div>

              {/* Attention to Detail */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#191b23] border border-[#272a32]">
                <Eye className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[14px] text-[#e1e2ec] font-semibold">Attention to Detail</span>
                  <span className="text-[12px] text-[#bcc9cd] leading-relaxed">Pixel and variable precision in calculation routines and UI layout consistency.</span>
                </div>
              </div>

              {/* Independent & Team Collaboration */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#191b23] border border-[#272a32]">
                <Users className="w-4 h-4 text-[#adc6ff] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[14px] text-[#e1e2ec] font-semibold">Independent &amp; Team Collaboration</span>
                  <span className="text-[12px] text-[#bcc9cd] leading-relaxed">Autonomous project ownership alongside communicative team synergy.</span>
                </div>
              </div>

              {/* Time Management */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#191b23] border border-[#272a32]">
                <Clock className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[14px] text-[#e1e2ec] font-semibold">Time Management</span>
                  <span className="text-[12px] text-[#bcc9cd] leading-relaxed">Reliable project cadence ensuring prompt delivery to commercial clients.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
