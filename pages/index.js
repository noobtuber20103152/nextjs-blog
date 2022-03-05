import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import HomeBlog from './components/HomeBlog'
import HomePage from "./components/HomePage"
export default function Home() {
  
  return (
    <>
      <HomePage />
      <HomeBlog />
    </>
  )
}
