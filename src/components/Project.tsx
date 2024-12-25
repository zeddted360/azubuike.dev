"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  features: string[];
}

const Project = () => {
  const projects: Project[] = [
    {
      title: "Social Media Blog Platform",
      description:
        "A full-stack social media blog platform with real-time features, authentication, and media sharing capabilities.",
      features: [
        "User authentication with JWT and Google OAuth",
        "Real-time post updates and notifications",
        "Image and media upload functionality",
        "Interactive comment and like system",
        "User profile management",
      ],
      tags: [
        "Next.js 14",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "NextAuth",
        "Cloudinary",
        "React Query",
      ],
      liveLink: "https://naija-gist.vercel.app",
      githubLink: "https://github.com/zeddted360/naija_gist.git",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A modern chat application featuring instant messaging, user presence, and message history.",
      features: [
        "Real-time messaging using WebSocket",
        "User authentication system",
        "Online/offline status tracking",
        "Message history persistence",
        "Group chat functionality",
      ],
      tags: [
        "React",
        "Node.js",
        "Socket.io",
        "Express",
        "MongoDB",
        "TypeScript",
        "TailwindCSS",
      ],
      liveLink: "https://real-time-chat.vercel.app",
      githubLink: "https://github.com/zeddted360/real_time_chat.git",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills with a contact form.",
      features: [
        "Responsive design",
        "Contact form with email integration",
        "Dark mode support",
        "SEO optimized",
        "Performance optimized",
      ],
      tags: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/ui",
        "Nodemailer",
        "MongoDB",
      ],
      liveLink: "https://portfolio-olung-chisom-martha.vercel.app/",
      githubLink: "https://github.com/zeddted360/portfolio_website.git",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubLogoIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Key Features:</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
