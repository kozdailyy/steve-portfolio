"use client";

import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import { redirect, routing, usePathname } from "@/i18n/routing";

const Header = () => {
  const pathName = usePathname();

  const changeLanguage = (open: "en" | "fr" | "de") => {
    routing.defaultLocale = open;
    redirect({ href: pathName, locale: open });
  };
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Steve<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact">
            <Button>Hire me</Button>
          </Link> */}
          <Select
            defaultValue={routing.defaultLocale}
            onValueChange={(open: "en" | "fr" | "de") => changeLanguage(open)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">
                <div className="flex items-center justify-between w-full gap-3">
                  <Image
                    src="/assets/english-flag.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                  English
                </div>
              </SelectItem>
              <SelectItem value="fr">
                <div className="flex items-center justify-between w-full gap-3">
                  <Image
                    src="/assets/france-flag.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                  Français
                </div>
              </SelectItem>
              <SelectItem value="de">
                <div className="flex items-center justify-between w-full gap-3">
                  <Image
                    src="/assets/german-flag.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                  Deutsch
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
