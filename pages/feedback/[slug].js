import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"
import 'react-toastify/dist/ReactToastify.css';
function feedback() {
  const router = useRouter();
  const { slug } = router.query
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [desc, setdesc] = useState("");
  const onChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value);
    }
    else if (e.target.name === 'email') {
      setemail(e.target.value);
    }
    else if (e.target.name === 'desc') {
      setdesc(e.target.value)
    }
  }
  const handleSubmit = () => {
    const feedbackdata = { name, email, desc, tag: slug };
    console.log(feedbackdata)
    fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackdata)
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        setname(""), setemail(""), setdesc("");
        alert("Your form submitted successfully");
        router.push("/")
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <Head>
        <title>Feedback - {slug}</title>
      </Head>
      <div class="max-w-screen-xl mt-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex flex-col justify-start">
          <div>
            <h2 class="text-xl lg:text-3xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className='mt-10 mr-10' >
              <Image className='mt-2'
                src={`/${slug}.jpg`}
                alt="Picture of the author"
                width={700}
                height={400}
              />
            </div>
            <Link href={`/blogpost/${slug}`}><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Go to blog
            </button></Link>

          </div>
        </div>
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input value={name} onChange={onChange} name="name" class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Enter your name" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input value={email} onChange={onChange} name="email" class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email" placeholder='Enter your email' />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea name="desc" onChange={onChange} value={desc} placeholder='Enter your message' class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-8">
            <button onClick={handleSubmit}
              class="uppercase text-sm font-bold tracking-wide hover:bg-indigo-900 bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default feedback;