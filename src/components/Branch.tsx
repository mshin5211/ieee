import React from 'react'
import Image from 'next/image'
import BranchCard from './BranchCard'
import { branchData } from '@/_lib/data'

const Branch = () => {
  return (
    <section className='mt-10 grid md:grid-cols-3 grid-cols-1 justify-items-center gap-20 place-items-start w-screen bg-dark dark:bg-[#011627] py-32 px-20'>
        {branchData.map((branch) => (
            <BranchCard key={branch.id} title={branch.title} description={branch.description} src={branch.src} />
        ))}
       
        

    </section>
  )
}

export default Branch