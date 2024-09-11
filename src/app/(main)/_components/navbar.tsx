"use client";
import React from "react";

import { Github, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mt-6 text-white top-5 mx-auto h-22 border border-[#44179c]/50 z-40 p-5 rounded-xl flex justify-between items-center bg-[#03001417] backdrop-blur-xl">
      <Link href="/" className="font-bold text-lg flex gap-1 items-center">
        <Image
          src={"/logo.png"}
          className="ml-5"
          alt="QuasecLogo"
          width={36}
          height={36}
        />
        Quasec
      </Link>
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src={"/logo.png"}
                      alt="QuasecLogo"
                      width={36}
                      height={36}
                    />
                    <span className="text-white">Quasec</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>{/* TODO */}</NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/Quasec"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
