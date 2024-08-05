import React from 'react'
import Image from 'next/image'

const SponsorCard = ({title, src, link}: { 
    title: string,
    src: string,
    link: string,
}) => {


  return (
    <a href={link}>
    <div className='flex justify-center items-center p-1 max-sm:h-52 max-sm:w-52 h-36 w-36 rounded-lg bg-[linear-gradient(to_right,#fde68a,#fde047,#facc15,#fde047,#fde68a)] hover:bg-[linear-gradient(to_right,#22d3ee,#818cfc,#6366f1,#818cfc,#22d3ee)] animate-gradient bg-[length:200%_auto]'>
        <div className='relative rounded-md flex h-[97%] aspect-square justify-center items-center bg-white'>
            
                <Image className='pointer-events-none p-2 object-contain' fill={true} src={src} alt={title} sizes="(max-width: 144px) 144px, (max-width: 144px) 144px, 144px"></Image>
            
            
        </div>
    </div>
    </a>
  )
}

export default SponsorCard