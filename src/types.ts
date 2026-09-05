export interface Project {
  id: string;
  number: string;
  badge: string;
  badgeType: 'production' | 'research' | 'oop' | 'algorithms';
  category: string;
  title: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  tags: { name: string; colorClass: string }[];
  codeSnippet?: string;
  techDetails?: string[];
  clientCount?: string;
  liveStatus?: string;
}

export interface SkillCategory {
  title: string;
  tag: string;
  icon: string;
  colorClass: string;
}

export interface TerminalTab {
  id: string;
  fileName: string;
  language: string;
  code: string;
  outputLines: string[];
}
