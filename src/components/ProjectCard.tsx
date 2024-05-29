import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ title, description, src, href, reverse }: {
    reverse: boolean,
    title: string,
    description: string,
    href: string,
    src: string

}) => {
    return (
        <div className='mt-10 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center content-center w-[80vw]'>
            <div className={`${reverse ? 'md:order-1' : ''} relative flex justify-center items-center w-full`}>
                <Image className='object-cover' src='/ECEB.jpg' alt='Project Image' fill={true} />
            </div>
            
            <div className={`${reverse ? 'md:-order-1' : ''} flex flex-col justify-center items-center w-full bg-dark px-10 py-20 `}>
                <div className='flex flex-col justify-center items-center gap-3 w-[80%] '>
                    <h1 className='text-2xl md:text-3xl text-white font-bold'>{title}</h1>
                    <p className='text-white w-full text-md text-center'>{description}</p>
                    <a href={href} className='text-blue-300 hover:text-blue-500 w-full text-md text-center'>Project Link</a>
                </div>
            </div>
                
        </div>
    )
}

export default ProjectCard