import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import MongoDB from '../BlogContent/MongoDB cheat sheet';
import JavaScript from '../BlogContent/JavaScript cheat sheet';
import ReactJS from "../BlogContent/React cheat sheet"
function Slug() {
    const router = useRouter();
    const { slug } = router.query;
    // console.log(slug, typeof (slug))
    // console.log(slug.includes("JavaScript"))
    // const [topic, settopic] = useState(slug);
    return (
        <>
            <Head>
                <title>{slug.split("-").join(" ")}</title>
            </Head>
            {slug.includes("MongoDB") && <MongoDB title={slug} date="12 Dec 2021" />}
            {slug.includes("JavaScript") && <JavaScript title={slug} date="13 Dec 2021" />}
            {slug.includes("React") && <ReactJS title={slug} date="14 Dec 2021" />}
        </>
    )
}

export default Slug;