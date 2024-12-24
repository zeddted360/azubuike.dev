"use client";

import React from "react";
import { Button } from "./ui/button";
import { useOpen } from "@/app/store.tsx/OpenContext";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavLinks = () => {
  const { isOpen } = useOpen();

  const handleNavClick = (section: string): void => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", icon: "👋" },
    { id: "projects", icon: "💼" },
    { id: "skills", icon: "⚡" },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className={`
            fixed right-4 top-[4.5rem]
            flex flex-col gap-3 
            w-64 p-4
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur-lg
            rounded-xl
            shadow-lg
            border border-gray-200 dark:border-gray-800
            md:hidden
            z-50
          `}
        >
          {navItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Button
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`
                  group
                  w-full
                  flex items-center gap-3
                  py-3 px-4
                  text-base font-medium
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  rounded-lg
                  border-none
                  transition-colors
                `}
              >
                <motion.span
                  className="text-lg"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.span>
                <span className="capitalize">{item.id}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavLinks;
