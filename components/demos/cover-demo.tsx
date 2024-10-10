import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-3xl md:text-6xl 
       font-semibold
        max-w-7xl 
        mx-auto 
        md:text-center 
        relative
         z-20 
         bg-clip-text
          text-transparent bg-gradient-to-b from-[#ff4400] via-[#ff4400] to-[#ff4400] dark:from-[#ff4400] dark:via-white dark:to-white"
      >
        Fire Buster <br /> <Cover>Fire Protection Services</Cover>
      </h1>
    </div>
  );
}
