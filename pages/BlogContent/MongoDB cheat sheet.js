import React from 'react'
import { CopyBlock, dracula, obsidian } from 'react-code-blocks';
import { useEffect, useState } from 'react/cjs/react.production.min';
import BigHeading from '../Headings/BigHeading.js';
import SmallHeading from '../Headings/SmallHeading.js';
import data from "./BlogContentData/MongoDB"
function MongoDB(props) {
    
    return (
        <>
            <div className="container flex justify-center my-2">
                <div className="container px-5 justify-start w-100 xl:w-4/6 ">
                    <h1 className="text-4xl  font-bold font-sans my-5">{props.title}</h1>
                    <p className='' ><span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                        {props.date}
                    </span></p>
                    <p className='my-1 text-xl'>In this post, we will see a comprehensive list of all the MongoDB commands you will ever need as a MongoDB beginner. This list covers almost all the most used commands in MongoDB.
                    </p>
                    <p className='my-1 text-xl'>I will assume that you are working inside a collection named 'comments' on a MongoDB database of your choice</p>
                    <BigHeading heading="Database commands" />
                    {data.map((e) => {
                        // console.log(Object.values(e))
                        // console.log(typeof (e))
                        return (
                            <>
                                <BigHeading heading={Object.keys(e)} />
                                {Object.values(e).map((element) => {
                                    // console.log(Object.keys(element))
                                    // console.log(Object.values(element))
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
                                                            theme={dracula}
                                                            wrapLines={true}
                                                            language="jsx"
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

export default MongoDB;