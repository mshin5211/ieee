"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { aboutData, workshopData } from "@/_lib/data";
import { usePathname } from "next/navigation";


export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

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

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
        //   opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
        //   opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn("fixed top-5 inset-x-0 max-w-xs sm:max-w-sm lg:max-w-lg mx-auto z-50 ", className)}
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
        
      </motion.div>
    </AnimatePresence>
  );
};