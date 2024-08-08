import Link from "next/link";

export default function NotFound() {
    return (
        <div className='relative flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip gap-y-5 h-screen'>
            <h1 className="text-xl font-semibold"><span className='text-2xl font-bold'>404</span>  |  This page could not be found.</h1>
            <Link href='/' className='text-dark hover:underline'>Head back to the main page</Link>
        </div>
    )
}