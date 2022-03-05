import Head from 'next/head'
import React from 'react'
import Component from '../components/Component'
import data from "./BlogJSON"

function Blog() {
    data.map((e) => {
        console.log(Object.values(e)[0].author);
    })
    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>
            {data.map((e) => {
                return <Component author={Object.values(e)[0].author} link={Object.values(e)[0].link} title={Object.values(e)[0].title} tag={Object.values(e)[0].tag} date={Object.values(e)[0].date} desc={Object.values(e)[0].desc} />
            })}
        </>
    )
}

export default Blog