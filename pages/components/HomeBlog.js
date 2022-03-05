import React from 'react'
import HomeBlogComponent from './HomeBlogComponent'
import data from "../blogs/BlogJSON"
function HomeBlog() {
    return (
        <>
            <div className="container my-4">
                <h1 className='text-center text-4xl font-bold' >Recommended blogs</h1>
            </div>
            <div class="flex flex-wrap justify-around my-3 py-3">
                {data.map((e) => {
                    return <HomeBlogComponent author={Object.values(e)[0].author} link={Object.values(e)[0].link} tag={Object.values(e)[0].tag} date={Object.values(e)[0].date} desc={Object.values(e)[0].desc} title={Object.values(e)[0].title} />
                })}
            </div>
        </>
    )
}

export default HomeBlog