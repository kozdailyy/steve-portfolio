"use client";

import { useTranslations } from "next-intl";

import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";

const Nav = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
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
  );
};

export default Nav;
