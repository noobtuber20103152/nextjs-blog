import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import MongoDB from '../BlogContent/MongoDB cheat sheet';
function Slug() {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug, typeof (slug))
    console.log(slug.includes("MongoDB"))
    const [topic, settopic] = useState(slug);
    return (
        <>
            <Head>
                <title>{slug.split("-").join(" ")}</title>
            </Head>
            {slug.includes("MongoDB") && <MongoDB title={slug} date="12 Dec 2021" />}
        </>
    )
}

export default Slug;