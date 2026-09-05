import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Code2, Sparkles } from 'lucide-react';

export const InteractiveTerminal: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'billing' | 'telemetry' | 'ml'>('billing');
  const [runCount, setRunCount] = useState(1);
  const [logs, setLogs] = useState<string[]>([
    '> Running diagnostics on client billing modules...',
    '• Active businesses connected: 3 instances [OK]',
    '• OOP Fuel & Engine Diagnostic Core: Loaded',
    '• ML Pipeline Concept Engine: Ready',
  ]);

  const handleRunScript = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs(['> Initiating Flask runtime execution engine...']);

    const steps = [
      activeTab === 'billing'
        ? '> Initializing BillingEngine dataclass with client_id="KL_RETAIL_03"...'
        : activeTab === 'telemetry'
        ? '> Probing microservice endpoints /api/v1/telemetry...'
        : '> Loading ML preprocessing pipeline & normalized vectors...',
      activeTab === 'billing'
        ? '• Parsing 14 pending payroll ledger entries [200 OK]'
        : activeTab === 'telemetry'
        ? '• Response: {"status": "healthy", "clients": 3, "python_version": "3.11", "latency_ms": 1.4}'
        : '• Feature vectors converged with gradient loss 0.042',
      `• Verified state in production • Cycle #${runCount + 1} completed cleanly`,
      '• Telemetry status: HEALTHY (Exit Code 0)',
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
          setRunCount((c) => c + 1);
        }
      }, (idx + 1) * 350);
    });
  };

  const handleReset = () => {
    setLogs([
      '> Running diagnostics on client billing modules...',
      '• Active businesses connected: 3 instances [OK]',
      '• OOP Fuel & Engine Diagnostic Core: Loaded',
      '• ML Pipeline Concept Engine: Ready',
    ]);
  };

  return (
    <div
      className="w-full rounded-xl bg-[#0b0e15] border border-[#1d1f27] shadow-2xl overflow-hidden font-mono text-[12px] sm:text-[13px]"
      id="hero-terminal"
    >
      {/* Terminal Top Bar */}
      <div className="min-h-10 bg-[#1d1f27] px-3 sm:px-4 py-2 flex items-center justify-between gap-2 border-b border-[#272a32] overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#4cd7f6]/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#4edea3]/80 inline-block"></span>

          {/* Tab Selector */}
          <div className="ml-2 sm:ml-3 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('billing')}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'billing'
                  ? 'bg-[#272a32] text-[#4edea3] font-semibold'
                  : 'text-[#869397] hover:text-[#e1e2ec]'
              }`}
            >
              app_billing.py
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'telemetry'
                  ? 'bg-[#272a32] text-[#4cd7f6] font-semibold'
                  : 'text-[#869397] hover:text-[#e1e2ec]'
              }`}
            >
              telemetry_test.py
            </button>
            <button
              onClick={() => setActiveTab('ml')}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'ml'
                  ? 'bg-[#272a32] text-[#adc6ff] font-semibold'
                  : 'text-[#869397] hover:text-[#e1e2ec]'
              }`}
            >
              ml_pipeline.py
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={handleRunScript}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#06b6d4]/20 hover:bg-[#06b6d4]/30 border border-[#06b6d4]/40 text-[#4cd7f6] text-[11px] font-mono font-medium transition-colors cursor-pointer disabled:opacity-50"
            title="Execute Python Script"
          >
            {isRunning ? (
              <Sparkles className="w-3.5 h-3.5 animate-spin text-[#4edea3]" />
            ) : (
              <Play className="w-3 h-3 text-[#4edea3] fill-[#4edea3]" />
            )}
            <span>{isRunning ? 'Running...' : 'Run Python'}</span>
          </button>

          <span className="text-[11px] text-[#869397] hidden md:inline">utf-8</span>
        </div>
      </div>

      {/* Code Editor Window */}
      <div className="p-3 sm:p-4 overflow-x-auto leading-relaxed bg-[#0b0e15] border-b border-[#191b23] text-[12px] sm:text-[13px]">
        {activeTab === 'billing' && (
          <div>
            <div className="text-[#94a3b8] font-mono text-[11px] select-none pb-2">
              # Production Flask Endpoint • Live Client Solution
            </div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#adc6ff]">from</span> flask{' '}
              <span className="text-[#adc6ff]">import</span> Flask, jsonify, request
            </div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#adc6ff]">from</span> dataclasses{' '}
              <span className="text-[#adc6ff]">import</span> dataclass
            </div>
            <div className="h-2"></div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#4cd7f6]">@dataclass</span>
            </div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#adc6ff]">class</span>{' '}
              <span className="text-[#4edea3]">BillingEngine</span>:
            </div>
            <div className="text-[#bcc9cd] pl-4">
              client_id: <span className="text-[#adc6ff]">str</span>
            </div>
            <div className="text-[#bcc9cd] pl-4">
              active_clients: <span className="text-[#4cd7f6]">int</span> ={' '}
              <span className="text-[#4edea3]">3</span>
            </div>
            <div className="h-1"></div>
            <div className="text-[#bcc9cd] pl-4">
              <span className="text-[#adc6ff]">def</span>{' '}
              <span className="text-[#4cd7f6]">process_payroll</span>(self, records:{' '}
              <span className="text-[#adc6ff]">list</span>):
            </div>
            <div className="text-[#bcc9cd] pl-8">
              total = sum(r[<span className="text-[#4edea3]">'net'</span>]{' '}
              <span className="text-[#adc6ff]">for</span> r{' '}
              <span className="text-[#adc6ff]">in</span> records)
            </div>
            <div className="text-[#bcc9cd] pl-8">
              <span className="text-[#adc6ff]">return</span> {'{'}
              <span className="text-[#4edea3]">"status"</span>:{' '}
              <span className="text-[#4edea3]">"verified"</span>,{' '}
              <span className="text-[#4edea3]">"payroll_sum"</span>: total{'}'}
            </div>
            <div className="h-2"></div>
            <div className="text-[#bcc9cd]">app = Flask(__name__)</div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#4cd7f6]">@app.route</span>(
              <span className="text-[#4edea3]">"/api/v1/telemetry"</span>, methods=[
              <span className="text-[#4edea3]">"GET"</span>])
            </div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#adc6ff]">def</span>{' '}
              <span className="text-[#4cd7f6]">health</span>():
            </div>
            <div className="text-[#bcc9cd] pl-4">
              <span className="text-[#adc6ff]">return</span> jsonify(status=
              <span className="text-[#4edea3]">"healthy"</span>, clients=
              <span className="text-[#4edea3]">3</span>, python_version=
              <span className="text-[#4edea3]">"3.11"</span>)
            </div>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div>
            <div className="text-[#94a3b8] font-mono text-[11px] select-none pb-2">
              # Automated Telemetry Health Check &amp; Routing Diagnostics
            </div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#adc6ff]">import</span> requests, time
            </div>
            <div className="h-2"></div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#adc6ff]">def</span>{' '}
              <span className="text-[#4cd7f6]">probe_service_status</span>():
            </div>
            <div className="text-[#bcc9cd] pl-4">
              t0 = time.perf_counter()
            </div>
            <div className="text-[#bcc9cd] pl-4">
              endpoint = <span className="text-[#4edea3]">"http://localhost:5000/api/v1/telemetry"</span>
            </div>
            <div className="text-[#bcc9cd] pl-4">
              res = {'{'}<span className="text-[#4edea3]">"status"</span>: <span className="text-[#4edea3]">"healthy"</span>,{' '}
              <span className="text-[#4edea3]">"clients"</span>: 3,{' '}
              <span className="text-[#4edea3]">"latency_ms"</span>: 1.4{'}'}
            </div>
            <div className="text-[#bcc9cd] pl-4">
              <span className="text-[#adc6ff]">assert</span> res[<span className="text-[#4edea3]">'status'</span>] == <span className="text-[#4edea3]">'healthy'</span>
            </div>
            <div className="text-[#bcc9cd] pl-4">
              <span className="text-[#adc6ff]">return</span> res
            </div>
          </div>
        )}

        {activeTab === 'ml' && (
          <div>
            <div className="text-[#94a3b8] font-mono text-[11px] select-none pb-2">
              # Machine Learning Feature Preparation Pipeline
            </div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#adc6ff]">import</span> numpy <span className="text-[#adc6ff]">as</span> np
            </div>
            <div className="h-2"></div>
            <div className="text-[#bcc9cd]">
              <span className="text-[#adc6ff]">def</span>{' '}
              <span className="text-[#4cd7f6]">normalize_input_vectors</span>(features):
            </div>
            <div className="text-[#bcc9cd] pl-4">
              mean = np.mean(features, axis=0)
            </div>
            <div className="text-[#bcc9cd] pl-4">
              std = np.std(features, axis=0) + 1e-7
            </div>
            <div className="text-[#bcc9cd] pl-4">
              <span className="text-[#adc6ff]">return</span> (features - mean) / std
            </div>
          </div>
        )}
      </div>

      {/* Output Console Box */}
      <div className="bg-[#191b23] p-3 sm:p-4 flex flex-col gap-2 font-mono text-[11px] sm:text-[12px]">
        <div className="flex items-center justify-between text-[#869397]">
          <span className="text-[11px] uppercase text-[#4edea3] flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
            Output Telemetry
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#bcc9cd]">Exit Code: 0</span>
            <button
              onClick={handleReset}
              className="text-[#869397] hover:text-[#e1e2ec] transition-colors p-0.5 cursor-pointer"
              title="Reset terminal output"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="text-[#e1e2ec] text-[11px] space-y-1">
          {logs.map((log, index) => (
            <div key={index} className="flex items-start gap-1">
              <span
                className={
                  log.startsWith('>')
                    ? 'text-[#4edea3]'
                    : log.includes('HEALTHY') || log.includes('[OK]')
                    ? 'text-[#4cd7f6]'
                    : 'text-[#adc6ff]'
                }
              >
                {log}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
