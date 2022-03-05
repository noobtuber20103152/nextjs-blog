import Link from 'next/link';
import React from 'react'

function Component(props) {
    return (
        <>
            <div className="container  md:px-10 px-2 my-5 ">
                <div className="container rounded-lg bg-blue-100 2xl:px-5 px-2  w-full xl:w-3/6 pt-2 border-b md:pb-4 pb-4 ">
                    <p className='mb-2 font-bold' >Author: <span  className='text-gray-500 font-bold'>{props.author} </span></p>
                    <Link href={`/blogpost/${props.link}`}  ><a className='text-xl font-bold'>{props.title}</a></Link>
                    <p className='my-2 text-lg' >{props.desc}</p>
                    <p className='mt-2 items-center flex justify-start' >
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{props.tag}</span>
                        <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                            <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                           {props.date}
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Component;