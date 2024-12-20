import React from 'react'
import Image from 'next/image'

const LeadershipCard = ({ name, description, role, src, href }: {
    name: string,
    description: string,
    role: string,
    src: string,
    href: string
}) => {
  return (
    <div className="md:w-1/3 w-full sm:w-2/3 flex justify-center items-center gap-y-5 flex-col p-5">
    <div className="w-full xl:w-[70%] max-md:w-full rounded-full aspect-[5/5] relative flex justify-center items-center ring-4 ring-dark hover:ring-[#FF5F0F] shadow-md shadow-dark z-10">
      <div className="w-full h-full relative z-0">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image src={src} fill={true} alt={name} className="rounded-full object-cover cursor-pointer" />
        </a>
      </div>
    </div>
    <div className='flex justify-center items-center flex-col'>
    <h1 className='text-dark md:text-3xl text-2xl text-center w-full mt-2 font-bold'>{name}</h1>
            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded"></hr>
            <h1 className='text-dark font-bold text-sm text-wrap lg:text-lg text-center'>{role}</h1>

    </div>
           
    </div>
  )
}

export default LeadershipCard