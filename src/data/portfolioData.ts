import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'payroll-billing-app',
    number: '01 // PRODUCTION',
    badge: 'In Active Production • 3+ Clients',
    badgeType: 'production',
    category: 'PRODUCTION',
    title: 'Payroll & Inventory Billing Web App',
    description:
      'Full-featured web application engineered using Python Flask that orchestrates comprehensive payroll cycles, stock tracking, and automated inventory billing. Actively deployed and currently utilized by 3+ business clients for daily transactional operations.',
    highlightsTitle: 'Architecture Highlights:',
    highlights: [
      'Modular Flask routing handling inventory adjustments and itemized billing calculations',
      'Dynamic payroll ledger computing employee net totals and record export',
      'Built with Python, HTML, and CSS for a lightweight, zero-latency desktop workflow',
    ],
    tags: [
      { name: 'Python', colorClass: 'text-secondary' },
      { name: 'Flask', colorClass: 'text-primary' },
      { name: 'Client Work', colorClass: 'text-on-surface' },
      { name: 'Active Production', colorClass: 'text-on-surface' },
      { name: 'HTML/CSS', colorClass: 'text-on-surface' },
    ],
    clientCount: '3+ Active Businesses',
    liveStatus: 'Active Production Service',
    codeSnippet: `@dataclass
class BillingEngine:
    client_id: str
    active_clients: int = 3

    def process_payroll(self, records: list):
        total = sum(r['net'] for r in records)
        return {"status": "verified", "payroll_sum": total}

app = Flask(__name__)
@app.route("/api/v1/telemetry", methods=["GET"])
def health():
    return jsonify(status="healthy", clients=3, python_version="3.11")`,
    techDetails: [
      'Engine: Python 3.11+, Flask Blueprint Microservices',
      'Storage: Local Relational SQLite + JSON Ledger Backups',
      'Frontend: Pure HTML5, Semantic CSS3, Fast Client-Side Render',
      'Deployments: On-premise local server runtimes for Kerala regional retail clients'
    ]
  },
  {
    id: 'aiml-internship-program',
    number: '02 // RESEARCH & TRAINING',
    badge: 'Completed Program',
    badgeType: 'research',
    category: 'RESEARCH & TRAINING',
    title: 'AI/ML Internship Program',
    description:
      'Completed a hands-on internship program concentrated on foundational and applied Artificial Intelligence and Machine Learning concepts. Developed rigorous understanding of data preprocessing, mathematical model assumptions, and exploratory AI methodologies.',
    highlightsTitle: 'Core Domains Explored:',
    highlights: [
      'Foundational Machine Learning paradigms and statistical evaluation metrics',
      'Data concept handling, feature representations, and data cleaning routines',
      'Applied algorithmic training logic aligned with real-world predictive workflows',
    ],
    tags: [
      { name: 'AI/ML', colorClass: 'text-primary' },
      { name: 'Machine Learning', colorClass: 'text-tertiary' },
      { name: 'Data Concepts', colorClass: 'text-on-surface' },
      { name: 'Internship', colorClass: 'text-secondary' },
    ],
    clientCount: 'Research & Practical Training',
    liveStatus: 'Certified Program Completion',
    codeSnippet: `import numpy as np

def evaluate_model_pipeline(X_train, y_train, X_val, y_val):
    # Normalized feature representations
    mean = np.mean(X_train, axis=0)
    std = np.std(X_train, axis=0) + 1e-7
    X_train_norm = (X_train - mean) / std
    X_val_norm = (X_val - mean) / std
    
    print(f"Features Preprocessed: {X_train.shape[1]} vectors")
    return {"status": "convergence_reached", "val_loss": 0.042}`,
    techDetails: [
      'Core Topics: Supervised & Unsupervised Learning, Regression, Classification',
      'Data Pipelines: Feature engineering, outlier rejection, train/test validation splits',
      'Mathematics: Vector operations, gradient convergence intuition, cost functions'
    ]
  },
  {
    id: 'vehicle-monitoring-system',
    number: '03 // SYSTEMS & OOP',
    badge: 'Object-Oriented Architecture',
    badgeType: 'oop',
    category: 'SYSTEMS & OOP',
    title: 'Vehicle Monitoring System',
    description:
      'Engineered a diagnostic system using Python object-oriented programming to evaluate and maintain vehicle state. Implements strict classes, private attribute encapsulation, and pythonic properties to dynamically observe fuel levels, consumption, and engine health diagnostics.',
    highlightsTitle: 'OOP & Diagnostic Highlights:',
    highlights: [
      'Encapsulated state guards against invalid metric thresholds and fuel readings',
      'Property decorators managing calculated diagnostic indicators in real-time',
      'Clean modular class hierarchy enabling pluggable vehicle telemetry models',
    ],
    tags: [
      { name: 'Python', colorClass: 'text-secondary' },
      { name: 'OOP', colorClass: 'text-tertiary' },
      { name: 'Encapsulation', colorClass: 'text-on-surface' },
      { name: 'Diagnostics', colorClass: 'text-primary' },
    ],
    clientCount: 'Custom Simulation Engine',
    liveStatus: 'OOP Architecture Showcase',
    codeSnippet: `class VehicleDiagnosticSystem:
    def __init__(self, vin: str, max_fuel_capacity: float):
        self._vin = vin
        self._max_capacity = max_fuel_capacity
        self._current_fuel = max_fuel_capacity
        self._engine_temp_celsius = 88.5

    @property
    def fuel_level_percentage(self) -> float:
        return (self._current_fuel / self._max_capacity) * 100.0

    @property
    def is_engine_nominal(self) -> bool:
        return 75.0 <= self._engine_temp_celsius <= 105.0`,
    techDetails: [
      'Encapsulation: Dunder variables with managed getters, setters, and validation asserts',
      'Pattern: Domain-Driven Object State Model',
      'Telemetry: Real-time telemetry monitoring with event assertions'
    ]
  },
  {
    id: 'leaderboard-management-system',
    number: '04 // ALGORITHMS',
    badge: 'Console Application',
    badgeType: 'algorithms',
    category: 'ALGORITHMS',
    title: 'Leaderboard Management System',
    description:
      'Developed a specialized console application to register, audit, and rank player scores. Employs optimized Python dictionary hash maps, nested conditional evaluations, and custom lambda-based sorting algorithms for efficient score ranking and retrieval.',
    highlightsTitle: 'Algorithmic Highlights:',
    highlights: [
      'Fast dictionary queries for player metadata updates and score record retention',
      'Lambda sorting logic orchestrating descending rank lists and tie-breakers',
      'Terminal CLI interface with clean formatted table printout',
    ],
    tags: [
      { name: 'Python', colorClass: 'text-secondary' },
      { name: 'Algorithms', colorClass: 'text-primary' },
      { name: 'Data Structures', colorClass: 'text-on-surface' },
      { name: 'Lambda Sorting', colorClass: 'text-tertiary' },
    ],
    clientCount: 'CLI Application',
    liveStatus: 'Algorithmic Utility',
    codeSnippet: `def sort_and_rank_leaderboard(players: dict) -> list:
    # Sort descending by score, tie-break by fastest playtime
    ranked = sorted(
        players.items(),
        key=lambda item: (-item[1]['score'], item[1]['playtime_sec'])
    )
    for rank, (player_id, stats) in enumerate(ranked, start=1):
        print(f"#{rank:<2} | {player_id:<14} | Score: {stats['score']:>6}")
    return ranked`,
    techDetails: [
      'Time Complexity: O(N log N) using Timsort and lambda key comparators',
      'Data Structures: Hash maps (dict) with composite nested player records',
      'CLI Interface: ANSI escape color formatted terminal leaderboard table'
    ]
  },
];
