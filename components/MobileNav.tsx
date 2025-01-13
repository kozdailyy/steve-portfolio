"use client";

import { useTranslations } from "next-intl";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Link, redirect, routing, usePathname } from "@/i18n/routing";
import { navLinks } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";

const MobileNav = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const changeLanguage = (open: "en" | "fr" | "de") => {
    routing.defaultLocale = open;
    redirect({ href: pathname, locale: open });
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Steve<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <div className="flex justify-center items-center">
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

        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map(({ nameKey, path }) => {
            return (
              <Link
                href={path}
                key={nameKey}
                className={`${
                  path === pathname && "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {t(nameKey)}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
