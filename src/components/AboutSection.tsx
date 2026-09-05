import React from 'react';
import { GraduationCap, Brain, Rocket, Network, Gamepad2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-[#191b23] py-16 border-y border-[#1d1f27]" id="about">
      <div className="max-w-[76rem] mx-auto px-4 lg:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-[13px] text-[#4cd7f6]">
            <span className="text-[#4edea3]">01.</span>
            <span className="font-semibold uppercase tracking-wider">DISCOVER / BACKGROUND</span>
          </div>
          <h2 className="text-[32px] sm:text-[36px] font-bold text-[#e1e2ec] tracking-tight">
            About Me &amp; Vision
          </h2>
          <p className="text-[15px] text-[#bcc9cd] max-w-2xl">
            Synthesizing academic rigor in computer applications with practical client-grade software engineering.
          </p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Card: Core Background & Academic Foundation */}
          <div className="md:col-span-8 p-6 lg:p-8 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#4cd7f6]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#4cd7f6] font-semibold">
                  Academic Journey
                </span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#e1e2ec]">
                BCA Scholar at Priyadarshani Arts and Science College
              </h3>
              <p className="text-[15px] text-[#bcc9cd] leading-relaxed">
                Currently pursuing a Bachelor of Computer Applications (BCA) affiliated with Calicut University (2024 – 2027). Grounded in foundational computational concepts, discrete data structures, and programming theory, I focus heavily on bridging academic principles into actionable, real-world software utilities.
              </p>
              <p className="text-[15px] text-[#bcc9cd] leading-relaxed">
                My technical evolution is defined by rapid self-directed exploration: translating algorithmic challenges into clean Python scripts, mastering backend logic with Flask, and architecting systems for real local enterprises.
              </p>
            </div>

            {/* Academic Meta Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#272a32] border border-[#3d494c]/50 text-[#e1e2ec] font-mono text-[12px]">
                Affiliation: Calicut University
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#272a32] border border-[#3d494c]/50 text-[#e1e2ec] font-mono text-[12px]">
                Session: 2024 – 2027
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#272a32] border border-[#3d494c]/50 text-[#4cd7f6] font-mono text-[12px]">
                Base: Malappuram, Kerala
              </span>
            </div>
          </div>

          {/* Side Card: Career Vision */}
          <div className="md:col-span-4 p-6 lg:p-8 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-[#4edea3]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#4edea3] font-semibold">
                  Aspirations
                </span>
              </div>
              <h3 className="text-[20px] font-bold text-[#e1e2ec]">
                Aspiring Machine Learning Engineer
              </h3>
              <p className="text-[14px] text-[#bcc9cd] leading-relaxed">
                Dedicated to mastering applied Artificial Intelligence, Machine Learning algorithms, predictive modeling, and data analysis pipelines. I aim to build self-learning intelligent architectures that optimize complex systems.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b0e15] border border-[#272a32] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#4edea3]/10 flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4 text-[#4edea3]" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#bcc9cd] uppercase tracking-wider">Target Focus</span>
                <span className="font-mono text-[12px] text-[#e1e2ec] font-semibold">Machine Learning • Data Analysis</span>
              </div>
            </div>
          </div>

          {/* Metric 1: Verified Client Delivery */}
          <div className="md:col-span-4 p-5 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Rocket className="w-5 h-5 text-[#4cd7f6]" />
              <span className="font-mono text-[11px] text-[#4edea3] uppercase font-semibold">Production Proven</span>
            </div>
            <div className="text-[28px] font-bold text-[#e1e2ec]">3+ Businesses</div>
            <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
              Delivered custom billing and inventory applications currently running in active daily commercial workflows.
            </p>
          </div>

          {/* Metric 2: AI/ML Internship */}
          <div className="md:col-span-4 p-5 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="w-5 h-5 rounded-full bg-[#adc6ff]/20 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#adc6ff]"></span>
              </div>
              <span className="font-mono text-[11px] text-[#adc6ff] uppercase font-semibold">Practical Trainee</span>
            </div>
            <div className="text-[28px] font-bold text-[#e1e2ec]">Hands-on AI/ML</div>
            <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
              Completed intensive internship focused on AI/ML foundations, data concepts, model training basics, and mathematical intuition.
            </p>
          </div>

          {/* Metric 3: Personal Passions & Tech Curiosity */}
          <div className="md:col-span-4 p-5 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Gamepad2 className="w-5 h-5 text-[#4edea3]" />
              <span className="font-mono text-[11px] text-[#bcc9cd] uppercase font-semibold">Personal Interests</span>
            </div>
            <div className="text-[28px] font-bold text-[#e1e2ec]">Gaming • Tech</div>
            <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
              Impassioned by video games and continually investigating emerging software paradigms, developer utilities, and modern toolchains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
