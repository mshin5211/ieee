import React from 'react'

const BranchCard = ({ title, description, src }: {
    title: string,
    description: string,
    src: string
}) => {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
            <div className='pop-in w-full xl:w-[70%] max-md:w-[70%] rounded-full aspect-square relative flex justify-center items-center bg-[url("../images/quadDark.jpg")] dark:border-[#E8E9EA] border-[#FF5F0F] border-4'>
                <div className='place-self-center place-content-center p-5'>
                    <h1 className='text-white font-bold text-md text-wrap lg:text-xl text-center'>{title}</h1>
                </div>
            </div>
            <div className='flex justify-center items-center w-full'>
                <p className='text-white text-center mt-10 w-full'>{description}</p>
            </div>
    </div>
  )
}

export default BranchCard