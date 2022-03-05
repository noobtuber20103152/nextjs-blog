import Link from 'next/link'
import React from 'react'

export default function HomeBlogComponent(props) {
    return (
        <>
            <div className="lg:max-w-lg lg:flex  my-3">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://www.ryrob.com/wp-content/uploads/2019/11/201-Best-Blog-Post-Ideas-Thatll-Drive-Traffic.jpg')" }} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 flex items-center">
                            <svg className=" text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                            Anyone
                        </p>
                        <Link href={`blogpost/${props.link}`}  ><a className='text-xl font-bold'>{props.title}</a></Link>
                        <p className="text-gray-700 text-base">{props.desc} </p>
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p className="text-gray-500 font-bold leading-none">{props.author}</p>
                            <p className="text-gray-600 mt-2">{props.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
