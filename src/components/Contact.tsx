"use client";
import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Let&apos;s Connect
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="mailto:nwiboazubuike@gmail.com">
          <div className="group hover:scale-105 transition-all duration-300">
            <Button
              variant="outline"
              className="w-full h-32 border-2 hover:border-blue-500 flex flex-col items-center justify-center gap-3 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-gray-700 group-hover:text-blue-600">
                Email Me
              </span>
            </Button>
          </div>
        </Link>

        <Link
          href="https://linkedin.com/in/azubuike-joseph-nwibo-740509232"
          target="_blank"
        >
          <div className="group hover:scale-105 transition-all duration-300">
            <Button
              variant="outline"
              className="w-full h-32 border-2 hover:border-blue-700 flex flex-col items-center justify-center gap-3 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <LinkedInLogoIcon className="w-8 h-8 text-blue-700 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-gray-700 group-hover:text-blue-700">
                LinkedIn
              </span>
            </Button>
          </div>
        </Link>

        <Link href="https://github.com/zeddted360" target="_blank">
          <div className="group hover:scale-105 transition-all duration-300">
            <Button
              variant="outline"
              className="w-full h-32 border-2 hover:border-gray-700 flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <GitHubLogoIcon className="w-8 h-8 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                GitHub
              </span>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
