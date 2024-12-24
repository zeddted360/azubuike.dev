// types.ts
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
}
