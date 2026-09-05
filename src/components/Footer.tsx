import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-[#0b0e15]/90 backdrop-blur-md border-t border-[#1d1f27] shadow-[0_-1px_8px_rgba(0,0,0,0.3)] mt-16">
      <div className="max-w-[76rem] mx-auto px-4 lg:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Identity */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-1.5 font-mono text-[16px] text-[#4cd7f6] font-semibold">
              <span className="text-[#4edea3]">&lt;</span>
              <span>MI</span>
              <span className="text-[#4edea3]">/&gt;</span>
              <span className="text-[14px] text-[#bcc9cd] font-normal font-sans ml-2">
                Mohammed Ihsan
              </span>
            </div>
            <p className="text-[13px] text-[#bcc9cd] text-center md:text-left">
              Python Developer &amp; Aspiring Machine Learning Engineer
            </p>
            <div className="flex items-center gap-1.5 text-[#bcc9cd] font-mono text-[11px] pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#4cd7f6]" />
              <span>Malappuram, Kerala, India</span>
            </div>
          </div>

          {/* Right: Quick Links & Meta */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollTo('about')}
                className="font-mono text-[11px] text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollTo('skills')}
                className="font-mono text-[11px] text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                SKILLS
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="font-mono text-[11px] text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="font-mono text-[11px] text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              >
                CONTACT
              </button>
            </div>
            <p className="font-mono text-[11px] text-[#bcc9cd] text-center md:text-right">
              Engineered with Python, ML Ecosystems &amp; Tailwind CSS
            </p>
            <p className="text-[12px] text-[#869397]">
              © 2025 Mohammed Ihsan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
