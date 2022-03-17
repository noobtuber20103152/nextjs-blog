import Link from 'next/link'
import React from 'react'

export default function HomeBlogComponent(props) {
    return (
        <>
            <div className="lg:max-w-lg lg:flex  my-3">
                <div className="h-48  lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(./${props.imgLink})` }} title="Woman holding a mug">
                </div>
                <div className="border-r border-b hover:border-blue-600 border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-4">
                        <Link href={`blogpost/${props.link}`}  ><a className='text-xl font-bold hover:text-blue-600 '>{props.title}</a></Link>
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
