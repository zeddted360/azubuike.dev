import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

const Skill = () => {
  const skills: Record<string, string[]> = {
    frontend: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "REST API",
      "GraphQL",
    ],
    tools: ["Git", "VS Code", "TypeScript", "Postman", "Docker", "AWS"],
  };

  const renderSkillCard = (
    title: string,
    skillsList: string[]
  ): React.JSX.Element => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {skillsList.map((skill, index) => (
          <Badge key={index} className="mr-2">
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderSkillCard("Frontend", skills.frontend)}
          {renderSkillCard("Backend", skills.backend)}
          {renderSkillCard("Tools & Others", skills.tools)}
        </div>
      </div>
    </section>
  );
};

export default Skill;
