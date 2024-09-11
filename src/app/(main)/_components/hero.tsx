"use client";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <div className="flex flex-row items-center text-center justify-center px-14 mt-20 z-[20] h-[650px] w-full">
      <div className="flex flex-col items-center gap-4 max-w-[670px] w-auto h-auto">
        <h2 className="text-5xl font-black text-white">
          Your search engine for
        </h2>
        <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r pb-1 from-purple-500 to-pink-500">
          cybersecurity intelligence.
        </h2>
        <p className="text-white font-medium text-md w-7/8">
          Your ultimate search engine for all things cybersecurity. From exposed
          devices and services to vulnerabilities and data breaches, we bring it
          all into the light.
        </p>
        <div className="relative w-full">
          <Input
            placeholder="Search for something..."
            autoComplete="off"
            className="py-8 pl-16 text-lg font-medium text-white bg-[#1e1847b6] border-[#1e1847a8] border-2 rounded-lg w-full focus:border-purple-500"
          />
          <SearchIcon
            className="absolute left-0 top-0 mt-5 ml-5 text-muted-foreground"
            size={28}
            color="#737373"
          />
        </div>
      </div>
    </div>
  );
}
