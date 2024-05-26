"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { aboutData, workshopData } from "@/_lib/data";
import { usePathname } from "next/navigation";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Nav className="top-4" />
    </div>
  );
}

function Nav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === ("/") ? null : active;
  const isAbout = pathname.startsWith("/about") ? null : active;
  const isMembers = pathname.startsWith("/members") ? null : active;
  const isWorkshops = pathname.startsWith("/workshops") ? null : active;
  const isContact = pathname.startsWith("/contact") ? null : active;

  const isHomeActive = pathname === ("/") ? true : false;
  const isAboutActive = pathname.startsWith("/about") ? true : false;
  const isMembersActive = pathname.startsWith("/members") ? true : false;
  const isWorkshopsActive = pathname.startsWith("/workshops") ? true : false;
  const isContactActive = pathname.startsWith("/contact") ? true : false;
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xs sm:max-w-sm lg:max-w-lg mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={isHome} item="Home" isActive={isHomeActive}>
            <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={isAbout} item="About" isActive={isAboutActive}>
            <HoveredLink href="/about">About</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={isMembers} item="Members" isActive={isMembersActive}>
          <div className="flex flex-col space-y-4 text-sm">
            {aboutData.map(({ id, title, href }) => (
                <HoveredLink key={id} href={href}>{title}</HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={isWorkshops} item="Workshops" isActive={isWorkshopsActive}>
          <div className="text-sm grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
            {workshopData.map(({ id, title, href, src, description }) => (
                <ProductItem key={id} title={title} href={href} src={src} description={description} />
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={isContact} item="Contact" isActive={isContactActive}>
            <HoveredLink href="/contact">Contact</HoveredLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
