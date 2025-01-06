"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


export const MobileNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  const pathname = usePathname();

  const isHomeActive = pathname === ("/") ? true : false;
  const isAboutActive = pathname.startsWith("/about") ? true : false;
  const isMembersActive = pathname.startsWith("/leadership") ? true : false;
  const isWorkshopsActive = pathname.startsWith("/workshops") ? true : false;
  const isContactActive = pathname.startsWith("/contact") ? true : false;
  const isSponsorsActive = pathname.startsWith("/sponsors") ? true : false;

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setIsOpened(false);
        }
      }
    } 
  });


        const navMenuRef = React.useRef(null);
        const closeNavMenu = (e: React.SyntheticEvent) => {
        if(navMenuRef.current === e.target) {
            setIsOpened(!isOpened);
            }
        }

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
        className={cn("fixed inset-x-0 w-full block xs:hidden mx-auto z-50 ", className)}
      >
      <nav 
      className="relative px-5 z-10 text-white bg-dark shadow-input flex justify-end lg:space-x-6 space-x-2 sm:text-sm text-xs lg:px-8 py-3"
      >
        <button className='transition' onClick={() => setIsOpened(!isOpened)}>{isOpened ? <Image className='bg-white object-contain' alt="close" src="/cross.png" fill={true} /> : <Image className='bg-white object-contain' alt="menu" src="/menu.png" fill={true} />}</button>
      </nav>
      <div ref={navMenuRef} onClick={closeNavMenu} className={`${isOpened ? "visible" : "hidden"} fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-0`}>
        </div>
        <div className={`${isOpened ? "scale-y-100 opacity-100" : "scale-y-0 opacity-70"} z-10 origin-top ease-in-out transition flex flex-col bg-dark items-center px-5 py-3 space-y-3`}>
            <Link onClick={() => setIsOpened(false)} href='/'
            className={`cursor-pointer ${isHomeActive ? 'font-bold' : 'font-normal'} text-white dark:text-white hover:opacity-[0.9]`}
            >
            Home
            </Link>
            <Link onClick={() => setIsOpened(false)} href='/about'
            className={`cursor-pointer ${isAboutActive ? 'font-bold' : 'font-normal'} text-white dark:text-white hover:opacity-[0.9]`}
            >
            About
            </Link>
            <Link onClick={() => setIsOpened(false)} href='/leadership'
            className={`cursor-pointer ${isMembersActive ? 'font-bold' : 'font-normal'} text-white dark:text-white hover:opacity-[0.9]`}
            >
            Leadership
            </Link>
            {/* <Link onClick={() => setIsOpened(false)} href='/workshops'
            className={`cursor-pointer ${isWorkshopsActive ? 'font-bold' : 'font-normal'} text-white dark:text-white hover:opacity-[0.9]`}
            >
            Workshops
            </Link> */}
            <Link onClick={() => setIsOpened(false)} href='/contact'
            className={`cursor-pointer ${isContactActive ? 'font-bold' : 'font-normal'} text-white dark:text-white hover:opacity-[0.9]`}
            >
            Contact
            </Link>
            <Link onClick={() => setIsOpened(false)} href='/sponsors'
            className={`cursor-pointer ${isSponsorsActive ? 'font-bold' : 'font-normal'} text-white dark:text-white hover:opacity-[0.9]`}
            >
            Sponsors
            </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};