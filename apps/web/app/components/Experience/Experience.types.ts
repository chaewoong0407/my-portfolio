interface Project {
  name: string;
  period: string;
  responsibilities: string[];
  stack: string[];
  link: string;
}

export interface ExperienceData {
  company: string;
  tenure: string;
  title: string;
  projects: Project[];
}
