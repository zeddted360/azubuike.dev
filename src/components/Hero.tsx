"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Download, Mail, Loader2 } from "lucide-react";
import Image from "next/image";
import ContactDialog from "./ContactDialog";

const Hero = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      // Replace '/path-to-your-cv.pdf' with your actual CV file path
      const response = await fetch("/Nwibo_Azubuike_Joseph_CV.pdf");
      const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Nwibo_Azubuike_Joseph_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Failed to download CV. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="about" className="pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-[20rem] h-[20rem] rounded-full overflow-hidden border-2 shadow-lg group">
            <Image
              src="/my_pic2.jpg"
              alt="Nwibo Azubuike Joseph"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              priority // Changed from lazy loading since it's above the fold
              quality={100}
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Nwibo Azubuike Joseph
        </h1>
        <p className="text-2xl mb-4 text-gray-700 dark:text-gray-300">
          Full Stack TypeScript Developer
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Building modern, type-safe web applications with React, Next.js, and
          Node.js
        </p>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => setContactOpen(true)}>
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
          <Button
            variant="outline"
            onClick={handleDownloadCV}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </>
            )}
          </Button>
        </div>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default Hero;
