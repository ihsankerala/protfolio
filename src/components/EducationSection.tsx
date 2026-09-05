import React from 'react';
import { School, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="w-full max-w-[76rem] mx-auto px-4 lg:px-6 py-16" id="education">
      <div className="flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-[13px] text-[#4cd7f6]">
            <span className="text-[#4edea3]">04.</span>
            <span className="font-semibold uppercase tracking-wider">CHRONOLOGY / CREDENTIALS</span>
          </div>
          <h2 className="text-[32px] sm:text-[36px] font-bold text-[#e1e2ec] tracking-tight">
            Education &amp; Learning Timeline
          </h2>
          <p className="text-[15px] text-[#bcc9cd] max-w-2xl">
            Formal academic coursework combined with focused professional coursework in Python development.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative flex flex-col gap-6">
          {/* Timeline Item 1: Degree */}
          <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6 p-6 lg:p-8 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md hover:border-[#4edea3]/40 transition-all">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#4edea3] font-mono text-[11px] uppercase font-semibold">
                <School className="w-4 h-4 text-[#4edea3]" />
                <span>Degree Program • Enrolled</span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#e1e2ec]">
                Bachelor of Computer Applications (BCA)
              </h3>
              <div className="text-[15px] text-[#4cd7f6] font-medium">
                Priyadarshani Arts and Science College • Calicut University
              </div>
              <p className="text-[14px] text-[#bcc9cd] max-w-2xl pt-2 leading-relaxed">
                Comprehensive undergraduate computing curriculum covering core programming paradigms, discrete computational mathematics, relational databases, operating systems, and algorithmic reasoning. Active student contributing to applied software solutions.
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-1.5 shrink-0">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-[#3d494c]/40 text-[#4edea3] font-mono text-[13px] font-semibold">
                2024 – Present
              </span>
              <span className="font-mono text-[11px] text-[#bcc9cd]">
                Expected Graduation: 2027
              </span>
            </div>
          </div>

          {/* Timeline Item 2: Additional Specialized Learning */}
          <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6 p-6 lg:p-8 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md hover:border-[#4cd7f6]/40 transition-all">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-[11px] uppercase font-semibold">
                <Award className="w-4 h-4 text-[#4cd7f6]" />
                <span>Additional Specialized Coursework</span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#e1e2ec]">
                Python Programming Course
              </h3>
              <div className="text-[15px] text-[#4cd7f6] font-medium">
                Udemy
              </div>
              <p className="text-[14px] text-[#bcc9cd] max-w-2xl pt-2 leading-relaxed">
                Intensive self-paced technical mastery covering advanced Python syntax, object-oriented concepts, functional constructs (lambda, list comprehensions), data handling routines, and software engineering best practices.
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-1.5 shrink-0">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-[#3d494c]/40 text-[#4cd7f6] font-mono text-[13px] font-semibold">
                Udemy Certified
              </span>
              <span className="font-mono text-[11px] text-[#bcc9cd]">
                Self-Directed Mastery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
