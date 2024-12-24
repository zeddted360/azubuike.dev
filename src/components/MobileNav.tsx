"use client";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useOpen } from "@/app/store.tsx/OpenContext";

const MobileNav = () => {
    const { isOpen, setIsOpen } = useOpen();
    console.log('the open context is',isOpen);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default MobileNav;
