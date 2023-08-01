"use client";

import { Disclosure } from "@headlessui/react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import ThemeButton from "./ThemeButton";


const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/guestbook",
    name: "Guestbook",
  },
  {
    path: "/projects",
    name: "Projects",
  },
];

type NavItemProps = PropsWithChildren<LinkProps> & {
  className?: string;
  active?: boolean;
  mobile?: boolean;
};

function NavItem({
  active = false,
  mobile = false,
  children,
  className,
  ...linkProps
}: NavItemProps) {
  const desktopClasses = clsx(
    "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
    {
      "h-full border-emerald-500 dark:text-white": active,
      "border-transparent text-zinc-500 dark:text-zinc-300 dark:hover:text-white":
        !active,
    },
  );

  const mobileClasses = clsx(
    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
    {
      "border-emerald-500 bg-emerald-50 text-emerald-500 dark:bg-zinc-800": active,
      "border-transparent text-zinc-500 dark:text-zinc-300 hover:border-zinc-300 hover:bg-zinc-50 hover:text-black dark:hover:text-white dark:hover:bg-zinc-700":
        !active,
    },
  );

  const classes = mobile ? mobileClasses : desktopClasses;

  return (
    <Link {...linkProps} className={twMerge(classes, className)}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <Disclosure as={"nav"}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex w-full justify-between">
                <div className="flex items-center">
                  <Link href="/">
                    <h1 className="text-2xl font-medium">
                      Onur <span className="text-emerald-500">Güler</span>
                    </h1>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                  {navItems.map(({ path, name }) => {
                    const isActive = pathname === path;
                    return (
                      <NavItem key={path} href={path} prefetch active={isActive}>
                        {name}
                      </NavItem>
                    );
                  })}
                  <ThemeButton />
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <ThemeButton />
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 dark:hover:bg-zinc-800">
                  {open ? <XMarkIcon /> : <Bars3Icon />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navItems.map(({ path, name }) => {
                const isActive = pathname === path;
                return (
                  <NavItem key={path} href={path} prefetch active={isActive} mobile>
                    {name}
                  </NavItem>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
