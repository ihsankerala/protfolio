import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Briefcase, Terminal, AtSign } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'ihsankerala@gmail.com';

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      const temp = document.createElement('textarea');
      temp.value = emailAddress;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Sender: ${name} (${email})\n\nMessage:\n${message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section className="w-full bg-[#191b23] py-16 border-t border-[#1d1f27]" id="contact">
      <div className="max-w-[76rem] mx-auto px-4 lg:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-[13px] text-[#4cd7f6]">
            <span className="text-[#4edea3]">05.</span>
            <span className="font-semibold uppercase tracking-wider">COMMUNICATION / CONNECT</span>
          </div>
          <h2 className="text-[32px] sm:text-[36px] font-bold text-[#e1e2ec] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[15px] text-[#bcc9cd] max-w-2xl">
            Interested in collaborating on Python backends, machine learning explorations, or internships? Send a direct dispatch below.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase text-[#4edea3] flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span> Verified Inbox
                </span>
                <AtSign className="w-5 h-5 text-[#4cd7f6]" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] text-[#bcc9cd] uppercase tracking-wider">
                  Email Address
                </span>
                <div
                  className="font-mono text-[16px] text-[#e1e2ec] font-semibold select-all break-all"
                  id="email-text"
                >
                  {emailAddress}
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[13px] transition-all hover:bg-[#06b6d4] hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose Mail</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] font-mono text-[12px] uppercase transition-all border border-[#3d494c]/40 cursor-pointer"
                  id="copy-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#4edea3]" />
                      <span className="text-[#4edea3]">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#bcc9cd]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0b0e15] border border-[#272a32] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#4cd7f6]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#bcc9cd] uppercase tracking-wider">
                    Current Location
                  </span>
                  <span className="text-[14px] text-[#e1e2ec] font-medium">
                    Malappuram, Kerala, India
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#272a32]">
                <div className="w-10 h-10 rounded-xl bg-[#0b0e15] border border-[#272a32] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-[#4edea3]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#bcc9cd] uppercase tracking-wider">
                    Engagement Status
                  </span>
                  <span className="text-[14px] text-[#4edea3] font-medium">
                    Available for Internships &amp; Client Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Developer Note Prompt */}
            <div className="p-4 rounded-xl bg-[#0b0e15] border border-[#272a32] flex items-start gap-3">
              <span className="font-mono text-[14px] text-[#4edea3] font-bold">&gt;</span>
              <p className="font-mono text-[12px] text-[#bcc9cd] leading-relaxed">
                Open to collaborative development across Python backend services, Flask APIs, and Machine Learning prototypes.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form Dispatcher */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-xl flex flex-col gap-6">
            <div className="flex items-center justify-between pb-2 border-b border-[#272a32]">
              <h3 className="text-[20px] font-bold text-[#e1e2ec]">
                Send Direct Message
              </h3>
              <span className="font-mono text-[11px] text-[#869397] uppercase tracking-wider">
                Interactive Dispatch
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4" id="portfolio-contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="font-mono text-[11px] text-[#bcc9cd] uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#191b23] border border-[#272a32] text-[#e1e2ec] placeholder:text-[#869397] text-[14px] outline-none focus:border-[#4cd7f6] transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="font-mono text-[11px] text-[#bcc9cd] uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#191b23] border border-[#272a32] text-[#e1e2ec] placeholder:text-[#869397] text-[14px] outline-none focus:border-[#4cd7f6] transition-colors"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-subject" className="font-mono text-[11px] text-[#bcc9cd] uppercase tracking-wider">
                  Inquiry Topic
                </label>
                <input
                  id="form-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Python Development / Internship Opportunity / Client Project"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#191b23] border border-[#272a32] text-[#e1e2ec] placeholder:text-[#869397] text-[14px] outline-none focus:border-[#4cd7f6] transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="font-mono text-[11px] text-[#bcc9cd] uppercase tracking-wider">
                  Message Context
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, timeline, or engineering opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#191b23] border border-[#272a32] text-[#e1e2ec] placeholder:text-[#869397] text-[14px] outline-none focus:border-[#4cd7f6] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button & Feedback Status */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#4cd7f6] text-[#003640] font-bold text-[14px] shadow-md transition-all hover:bg-[#06b6d4] hover:shadow-[0_0_20px_rgba(76,215,246,0.35)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>

                {formSubmitted && (
                  <div className="font-mono text-[11px] text-[#4edea3] flex items-center gap-1.5 animate-fade-in">
                    <Check className="w-4 h-4 text-[#4edea3]" />
                    <span>Opening mail client with pre-filled message...</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
