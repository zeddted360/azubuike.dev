import type { Metadata } from "next";
import "./globals.css";
import { OpenContextProvider } from "./store.tsx/OpenContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://azubuike.dev.vercel.app"),
  title: {
    default: "Nwibo Azubuike Joseph - Full Stack Developer",
    template: "%s | Nwibo Azubuike Joseph",
  },
  description:
    "Full Stack Developer specializing in TypeScript, React, Next.js, Node.js, and MongoDB. Portfolio of Nwibo Azubuike Joseph showcasing web development projects and skills.",
  keywords: [
    "Nwibo",
    "Azubuike",
    "Joseph",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Web Developer",
    "Software Engineer",
    "NWIBO",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Nwibo Azubuike Joseph" }],
  creator: "Nwibo Azubuike Joseph",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <OpenContextProvider>{children}</OpenContextProvider>
      </body>
    </html>
  );
}
