import React, { useState } from 'react';
import { X, Code2, Terminal, Check, Layers, Cpu, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [simulatedOutput, setSimulatedOutput] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  if (!project) return null;

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulatedOutput('Connecting to virtual runtime environment...');

    setTimeout(() => {
      if (project.id === 'payroll-billing-app') {
        setSimulatedOutput(`[Flask 3.x WSGI Service]
✓ Loaded 3 client tenant stores (Calicut, Malappuram, Perinthalmanna)
✓ Payroll Cycle #104: 18 employee slips computed in 1.2ms
✓ Billing Ledger: 412 inventory entries reconciled. Database integrity 100%`);
      } else if (project.id === 'aiml-internship-program') {
        setSimulatedOutput(`[NumPy / ML Pipeline]
✓ Vectorizing 500 records into 8-dimensional feature spaces
✓ Z-score standard normalization applied (mean=0, std=1)
✓ Converged validation loss: 0.0418. Evaluation metric: 97.4% precision`);
      } else if (project.id === 'vehicle-monitoring-system') {
        setSimulatedOutput(`[OOP Diagnostic Engine]
✓ Instantiated VehicleDiagnosticSystem(vin="KL55-2024-X1")
✓ @property fuel_level_percentage: 84.6% [NOMINAL]
✓ @property is_engine_nominal: True (Coolant Temp: 88.5°C)`);
      } else {
        setSimulatedOutput(`[Leaderboard Hash Map Audit]
#1  | ShadowCoder    | Score: 18,450 | Time: 122s
#2  | NeuralKnight   | Score: 16,200 | Time: 98s
#3  | ByteMaster     | Score: 16,200 | Time: 140s (Tie-broken by playtime)`);
      }
      setIsSimulating(false);
    }, 450);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#191b23] border border-[#272a32] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#1d1f27] border-b border-[#272a32] flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-[#4cd7f6] uppercase tracking-wider font-semibold">
                {project.number}
              </span>
              <span className="text-[#3d494c]">•</span>
              <span className="font-mono text-[11px] text-[#4edea3] font-medium">
                {project.badge}
              </span>
            </div>
            <h3 className="text-[22px] font-bold text-[#e1e2ec] leading-snug">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#bcc9cd] hover:text-white bg-[#272a32] hover:bg-[#32353d] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-[14px] font-semibold text-[#4cd7f6] uppercase tracking-wider font-mono">
              System Overview
            </h4>
            <p className="text-[14px] text-[#bcc9cd] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-2">
            <h4 className="text-[14px] font-semibold text-[#4edea3] uppercase tracking-wider font-mono">
              {project.highlightsTitle}
            </h4>
            <div className="p-4 rounded-xl bg-[#1d1f27] border border-[#272a32] space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#bcc9cd]">
                  <Check className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          {project.techDetails && (
            <div className="space-y-2">
              <h4 className="text-[14px] font-semibold text-[#adc6ff] uppercase tracking-wider font-mono">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {project.techDetails.map((spec, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-[#1d1f27] border border-[#272a32] text-[12px] font-mono text-[#bcc9cd]"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet & Simulator */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-[14px] font-semibold text-[#e1e2ec] uppercase tracking-wider font-mono flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#4cd7f6]" />
                  Code Architecture Excerpt
                </h4>

                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="flex items-center gap-1 px-3 py-1 rounded bg-[#4cd7f6]/20 hover:bg-[#4cd7f6]/30 text-[#4cd7f6] text-[11px] font-mono font-medium transition-colors cursor-pointer"
                >
                  <Play className="w-3 h-3 text-[#4cd7f6] fill-[#4cd7f6]" />
                  <span>{isSimulating ? 'Executing...' : 'Run Simulation'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0e15] border border-[#272a32] font-mono text-[12px] text-[#bcc9cd] overflow-x-auto whitespace-pre leading-relaxed">
                {project.codeSnippet}
              </div>

              {simulatedOutput && (
                <div className="p-3.5 rounded-xl bg-[#0b0e15] border border-[#4edea3]/30 font-mono text-[12px] text-[#4edea3] whitespace-pre-wrap animate-fade-in">
                  {simulatedOutput}
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#272a32]">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2.5 py-1 rounded bg-[#272a32] border border-[#3d494c]/40 font-mono text-[11px] ${tag.colorClass}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#1d1f27] border-t border-[#272a32] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] text-[13px] font-medium transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
