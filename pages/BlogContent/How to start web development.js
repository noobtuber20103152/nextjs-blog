import React from 'react'
import { CopyBlock, atomOneLight } from 'react-code-blocks';
import BigHeading from '../Headings/BigHeading';
import SmallHeading from '../Headings/SmallHeading';
import data from "./BlogContentData/WebDev"
import Link from "next/link"
function MongoDB(props) {
    return (
        <>
            <div className="container flex justify-center my-2">
                <div className="container px-5 justify-start   xl:w-4/6 ">
                    <h1 className="text-4xl  font-bold font-sans my-5">{props.title.split("-").join(" ")}</h1>
                    <p className='inline-block mr-2' ><span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                        {props.date}
                    </span></p>
                    <Link href={`../feedback/How-to-start-web-development`} >
                        <p className='hover:cursor-pointer text-center items-center inline-block mr-2' ><span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                            <svg class="w-3 h-3 mr-1 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
                            Feedback Form
                        </span></p>
                    </Link>
                    <p className='my-1 text-xl'>If you are beginner and nothing to know about web development or how to start web development, don't worry this blog is for you.
                    </p>
                    <p className='my-1 text-xl'>In this blog we are discussing about web development and complete roadmap to became a MERN stack web developer. Let's get started. 🥳🥳</p>
                    {data.map((e) => {
                        return (
                            <>
                                <BigHeading heading={Object.keys(e)} />
                                {Object.values(e).map((element) => {
                                    return (
                                        <>
                                            {element.map((x) => {
                                                console.log(x);
                                                console.log(Object.keys(x)[0], " ", Object.values(x)[0])
                                                return (
                                                    <>
                                                        <SmallHeading heading={Object.keys(x)[0]} />
                                                        <p className='text-base' >{Object.values(x)[0]}</p>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                })}
                            </>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default MongoDB;