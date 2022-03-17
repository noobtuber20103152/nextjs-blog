import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head';
import MongoDB from '../BlogContent/MongoDB cheat sheet';
import JavaScript from '../BlogContent/JavaScript cheat sheet';
import ReactJS from "../BlogContent/React cheat sheet"
import WebDev from "../BlogContent/How to start web development"
function Slug() {
    const router = useRouter();
    const { slug } = router.query;
    // console.log(slug, typeof (slug))
    console.log(slug.includes("development"))
    console.log(slug)
    // const [topic, settopic] = useState(slug);
    return (
        <>
            <Head>
                <title>{slug.split("-").join(" ")}</title>
            </Head>
            {slug.includes("MongoDB") && <MongoDB title={slug} date="12 Dec 2021" />}
            {slug.includes("JavaScript") && <JavaScript title={slug} date="13 Dec 2021" />}
            {slug.includes("React") && <ReactJS title={slug} date="14 Dec 2021" />}
            {slug.includes("development") && <WebDev title={slug} date="20 Dec 2021" />}
        </>
    )
}

export default Slug;