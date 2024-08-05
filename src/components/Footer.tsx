"use client"
import { socialMediaData } from '@/_lib/data'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();

  const isHomeActive = pathname === ("/") ? true : false;
  const isAboutActive = pathname.startsWith("/about") ? true : false;
  const isMembersActive = pathname.startsWith("/members") ? true : false;
  const isWorkshopsActive = pathname.startsWith("/workshops") ? true : false;
  const isContactActive = pathname.startsWith("/contact") ? true : false;
  const isSponsorsActive = pathname.startsWith("/sponsors") ? true : false;
  return (
    <footer className='w-full max-h-[125px] h-[17.5vh] bg-dark flex flex-col justify-center items-center text-white border-t border-b border-white p-3 gap-2'>
        <div className='flex justify-center items-center gap-3'>
            <Link href='/' className={`${isHomeActive ? 'underline' : 'no-underline'} text-xs md:text-sm underline-offset-1 hover:underline`}>Home</Link>
            <Link href='/about' className={`${isAboutActive ? 'underline' : 'no-underline'} text-xs md:text-sm underline-offset-1 hover:underline`}>About</Link>
            <Link href='/workshops' className={`${isWorkshopsActive ? 'underline' : 'no-underline'} text-xs md:text-sm underline-offset-1 hover:underline`}>Workshops</Link>
            <Link href='/contact' className={`${isContactActive ? 'underline' : 'no-underline'} text-xs md:text-sm underline-offset-1 hover:underline`}>Contact</Link>
            <Link href='/sponsors' className={`${isSponsorsActive ? 'underline' : 'no-underline'} text-xs md:text-sm underline-offset-1 hover:underline`}>Sponsers</Link>
        </div>
        <div className='flex justify-center items-center gap-3'>
          {socialMediaData.map((social) => (
            <SocialIcon
              key={social.id}
              url={social.url}
              network={social.network}
              style={{ height: 35, width: 35 }}
              target='_blank'
              bgColor='#000'
              fgColor='#fff'
              className='scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'
            />
          ))}

        </div>
        
        <p className='text-xs md:text-sm'>
            © 2024 IEEE at the University of Illinois
        </p>
        
    </footer>
  )
}

export default Footer