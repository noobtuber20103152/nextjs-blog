import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className=" w-full z-10 sticky bg-white top-0 border-b border-grey-light">
                <div className="w-full flex flex-wrap items-center lg:justify-between mt-0 py-4 justify-center"><div className=" mx-0 px-0 lg:pl-4 flex items-center lg:mx-4">
                    <span className="no-underline hover:no-underline font-bold text-xl text-purple-800">
                        <Link href="/"><a href="">CodeWithMe</a>
                        </Link>
                    </span>
                </div>
                </div>
            </div>
        </>
    )
}
