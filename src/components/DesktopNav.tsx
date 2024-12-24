"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const DesktopNav = () => {
  const handleNavClick = (section: string): void => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hidden md:flex items-center space-x-4">
      {["about", "projects", "skills"].map((item) => (
        <Button key={item} variant="ghost" onClick={() => handleNavClick(item)}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default DesktopNav;
