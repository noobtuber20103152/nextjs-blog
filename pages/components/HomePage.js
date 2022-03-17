import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
function HomePage() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className="flex bg-white lg:flex-row  flex-col h-96 container mx-auto lg:justify-start justify-center">
                <div className="flex sm:items-center items-start text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="font-semibold text-gray-800 text-2xl sm:text-4xl">Welcome to <span className="text-indigo-600">CodeWithMe</span>
                        </h2>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <Link href="/Blogs/Blog" >
                                <a className="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded  hover:bg-blue-400 hover:text-white" >
                                    Explore blogs
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:block w-1/2" style={{ clipPath: "polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%)" }}>
                    <div className="h-full object-contain" style={{ backgroundImage: "url('./home.jpg')" }}>
                        <div className="h-full bg-black opacity-25">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;


