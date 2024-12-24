"use client";
import React from "react";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import MobilNavLinks from "@/components/MobilNavLinks";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Nav />
      <MobilNavLinks />
      <Hero />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default Portfolio;
