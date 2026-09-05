import React, { useState } from 'react';
import { Check, Code2, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="w-full bg-[#0b0e15] py-16 border-b border-[#1d1f27]" id="projects">
      <div className="max-w-[76rem] mx-auto px-4 lg:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-[13px] text-[#4cd7f6]">
              <span className="text-[#4edea3]">03.</span>
              <span className="font-semibold uppercase tracking-wider">PORTFOLIO / ARCHITECTURES</span>
            </div>
            <h2 className="text-[32px] sm:text-[36px] font-bold text-[#e1e2ec] tracking-tight">
              Featured Projects &amp; Experience
            </h2>
            <p className="text-[15px] text-[#bcc9cd] max-w-xl">
              Tangible software implementations, client production deliverables, and empirical AI/ML research.
            </p>
          </div>

          <div className="font-mono text-[11px] text-[#bcc9cd] uppercase tracking-wider bg-[#1d1f27] px-3.5 py-1.5 rounded-lg border border-[#272a32] w-fit">
            Verified Implementations: 04 Artifacts
          </div>
        </div>

        {/* Project Cards Grid (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-8 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-xl flex flex-col justify-between gap-6 transition-all hover:border-[#4cd7f6]/40 hover:-translate-y-1 group"
            >
              <div className="flex flex-col gap-4">
                {/* Card Header Meta */}
                <div className="flex items-center justify-between">
                  {proj.badgeType === 'production' && (
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] font-mono text-[11px] uppercase font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                      {proj.badge}
                    </div>
                  )}
                  {proj.badgeType === 'research' && (
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 text-[#4cd7f6] font-mono text-[11px] uppercase font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
                      {proj.badge}
                    </div>
                  )}
                  {proj.badgeType === 'oop' && (
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#272a32] border border-[#3d494c]/40 text-[#e1e2ec] font-mono text-[11px] uppercase font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#adc6ff]"></span>
                      {proj.badge}
                    </div>
                  )}
                  {proj.badgeType === 'algorithms' && (
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#272a32] border border-[#3d494c]/40 text-[#e1e2ec] font-mono text-[11px] uppercase font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
                      {proj.badge}
                    </div>
                  )}

                  <span className="font-mono text-[12px] text-[#bcc9cd] font-semibold">
                    {proj.number}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-[#e1e2ec] group-hover:text-[#4cd7f6] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-[14px] text-[#bcc9cd] leading-relaxed">
                  {proj.description}
                </p>

                {/* Technical Detail Box */}
                <div className="p-4 rounded-xl bg-[#191b23] border border-[#272a32] flex flex-col gap-2">
                  <span className="font-mono text-[11px] text-[#4cd7f6] uppercase font-semibold">
                    {proj.highlightsTitle}
                  </span>
                  <ul className="text-[13px] text-[#bcc9cd] flex flex-col gap-2 list-none">
                    {proj.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags & Action Footer */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded bg-[#272a32] border border-[#3d494c]/30 font-mono text-[11px] font-semibold ${tag.colorClass}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="mt-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] text-[12px] font-mono transition-colors border border-[#3d494c]/40 cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>Inspect Code &amp; Deep Dive →</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
