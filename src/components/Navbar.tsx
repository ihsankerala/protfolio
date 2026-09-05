import React, { useState } from 'react';
import { Terminal, Menu, X, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0b0e15]/85 backdrop-blur-xl border-b border-[#1d1f27] shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
      <div className="h-16 max-w-[76rem] mx-auto px-4 lg:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-1 font-mono text-[16px] text-[#4cd7f6] font-medium tracking-tight transition-opacity hover:opacity-85"
            id="brand-logo"
          >
            <span className="text-[#4edea3]">&lt;</span>
            <span className="font-semibold text-[#e1e2ec]">ihsan</span>
            <span className="text-[#4cd7f6]">.dev</span>
            <span className="text-[#4edea3]">/&gt;</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[14px] text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-[14px] text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[14px] text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-[14px] text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[14px] text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06b6d4] text-[#003640] font-semibold text-[13px] transition-all hover:bg-[#4cd7f6] hover:-translate-y-0.5 shadow-[0_0_16px_rgba(6,182,212,0.35)] cursor-pointer"
            id="nav-get-in-touch"
          >
            <Terminal className="w-4 h-4" />
            <span className="font-mono uppercase tracking-wider">Get In Touch</span>
          </button>

          <div
            className="w-8 h-8 rounded-full bg-[#4cd7f6] flex items-center justify-center shrink-0 text-[#003640] font-bold"
            title="Mohammed Ihsan"
          >
            <User className="w-4 h-4 text-[#003640]" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#bcc9cd] hover:text-white bg-[#1d1f27] border border-[#3d494c]/40"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#10131a] border-b border-[#1d1f27] px-4 py-4 flex flex-col gap-3">
          <button
            onClick={() => scrollToSection('about')}
            className="text-left py-2 px-3 rounded-lg text-[#bcc9cd] hover:bg-[#1d1f27] hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-left py-2 px-3 rounded-lg text-[#bcc9cd] hover:bg-[#1d1f27] hover:text-white"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-left py-2 px-3 rounded-lg text-[#bcc9cd] hover:bg-[#1d1f27] hover:text-white"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-left py-2 px-3 rounded-lg text-[#bcc9cd] hover:bg-[#1d1f27] hover:text-white"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-left py-2 px-3 rounded-lg text-[#bcc9cd] hover:bg-[#1d1f27] hover:text-white"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#06b6d4] text-[#003640] font-semibold text-[13px]"
          >
            <Terminal className="w-4 h-4" />
            <span>Get In Touch</span>
          </button>
        </div>
      )}
    </header>
  );
};
