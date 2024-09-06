"use client";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center mt-40 z-[20] h-[650px] w-full">
      <div className="flex flex-col gap-6 mt-6 text-6xl text-center font-black text-white max-w-[600px] w-auto h-auto">
        <span>
          QuaSec
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            {" "}
            Search{" "}
          </span>
        </span>
      </div>
      <p className="text-lg text-white font-medium text-center my-3 mb-8 max-w-[600px]">
        A IoT, OSINT, and vulnerability search engine for the internet.
      </p>
      <div className="bg-[#0a0529af] p-10 rounded-lg w-1/2">
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
