export interface Skill {
  name: string;
  level: "Advanced" | "Proficient" | "Expert";
  category: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}
