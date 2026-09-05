import React from 'react';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { InteractiveTerminal } from './InteractiveTerminal';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full max-w-[76rem] mx-auto px-4 lg:px-6 pt-8 lg:pt-16 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Hero Left: Content & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272a32] shadow-sm border border-[#3d494c]/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
            </span>
            <span className="font-mono text-[11px] text-[#bcc9cd] uppercase tracking-wider font-semibold">
              Available for internships &amp; projects
            </span>
          </div>

          {/* Name & Title Intro Tag (Above the Fold) */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[15px] sm:text-[16px] text-[#4edea3] font-semibold">
              <span>Hi, I'm Mohammed Ihsan</span>
              <span className="text-[#3d494c] hidden sm:inline">•</span>
              <span className="text-[#4cd7f6] font-normal flex items-center gap-1 text-[13px] sm:text-[14px]">
                <MapPin className="w-3.5 h-3.5 text-[#4cd7f6]" />
                Malappuram, Kerala
              </span>
            </div>
            <div className="font-mono text-[12px] sm:text-[13px] text-[#869397] uppercase tracking-wider">
              Python Developer &amp; Aspiring Machine Learning Engineer
            </div>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-[#e1e2ec] tracking-tight leading-[1.14] max-w-2xl">
            Engineering robust <span className="text-[#4cd7f6]">backend systems</span> &amp; intelligent AI solutions.
          </h1>

          {/* Bio Summary */}
          <p className="text-[16px] sm:text-[17px] text-[#bcc9cd] max-w-xl leading-relaxed">
            Motivated BCA student with practical experience in backend development and a strong foundation in Python, HTML, and CSS. Experienced in delivering client solutions and actively expanding practical knowledge across AI and software development.
          </p>

          {/* CTA Buttons Row: 2 Focused Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4cd7f6] text-[#003640] font-bold text-[15px] transition-all hover:bg-[#06b6d4] hover:shadow-[0_0_24px_rgba(76,215,246,0.45)] hover:-translate-y-0.5 cursor-pointer"
              id="cta-explore-projects"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#272a32] text-[#e1e2ec] hover:bg-[#363941] text-[15px] font-medium transition-all hover:-translate-y-0.5 border border-[#3d494c]/50 cursor-pointer"
              id="cta-get-in-touch"
            >
              <Mail className="w-4 h-4 text-[#4cd7f6]" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Micro Highlights Bar */}
          <div className="grid grid-cols-3 gap-3 w-full pt-4 mt-2">
            <div className="flex flex-col gap-1 p-3 sm:p-3.5 rounded-xl bg-[#191b23] border border-[#272a32] shadow-sm">
              <span className="text-[28px] sm:text-[32px] font-extrabold text-[#4cd7f6] leading-none">3+</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#bcc9cd] uppercase tracking-wider font-semibold">Active Clients</span>
            </div>

            <div className="flex flex-col gap-1 p-3 sm:p-3.5 rounded-xl bg-[#191b23] border border-[#272a32] shadow-sm">
              <span className="text-[28px] sm:text-[32px] font-extrabold text-[#4edea3] leading-none">BCA</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#bcc9cd] uppercase tracking-wider font-semibold">Calicut Univ.</span>
            </div>

            <div className="flex flex-col gap-1 p-3 sm:p-3.5 rounded-xl bg-[#191b23] border border-[#272a32] shadow-sm">
              <span className="text-[28px] sm:text-[32px] font-extrabold text-[#adc6ff] leading-none">AI/ML</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#bcc9cd] uppercase tracking-wider font-semibold">Internship Exp</span>
            </div>
          </div>
        </div>

        {/* Hero Right: Interactive Python IDE Terminal Window */}
        <div className="lg:col-span-5 flex flex-col w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
};
