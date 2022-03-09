import React, { useState } from 'react'
import Link from "next/link"
import BigHeading from '../Headings/BigHeading';
import { CopyBlock, atomOneLight } from 'react-code-blocks';
import data from "./BlogContentData/JavaScript"
import SmallHeading from '../Headings/SmallHeading';
function JavaScript(props) {

    data.map((e) => {
        console.log(e);
        console.log(Object.values(e))
        data.map((e) => {
            console.log(Object.keys(e)[0]);
            console.log(Object.values(e))
            Object.values(e).map((el) => {
                el.map((x) => {
                    console.log(typeof (Object.keys(x)))
                    console.log(Object.keys(x))
                })
            })
        })

    })
    return (
        <>
            <div className="container flex justify-center my-2">
                <div className="container px-5 justify-start w-100 w-6/6 xl:w-4/6 ">
                    <h1 className="text-4xl  font-bold font-sans my-5">{props.title.split("-").join(" ")}</h1>
                    <p className='inline-block mx-2' ><span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                        {props.date}
                    </span></p>
                    <Link href={`../feedback/JavaScript`} >
                        <p className='hover:cursor-pointer text-center items-center inline-block mr-2' ><span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                            <svg class="w-3 h-3 mr-1 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
                            Feedback Form
                        </span></p>
                    </Link>
                    <p className='my-1 text-xl'>In this cheat sheet we will provide common JavaScript concepts and syntex for quick revision for web developers. If you like this cheat sheet please give us your suggetion for improve more this cheat sheet.</p>
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
                                                        <CopyBlock style={{ padding: "10px 5px", fontSize: "20px" }}
                                                            text={Object.values(x)[0]}
                                                            theme={atomOneLight}
                                                            wrapLines={true}
                                                            language="javascript"
                                                        />
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

export default JavaScript;