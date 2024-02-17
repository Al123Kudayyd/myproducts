import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/Components/Nav'
import Banner from '@/Components/Banner'
import Products from '@/Components/Products'
import Login from '@/Modals/Login'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <Login />
      <Reviews
    </div>
  )
}
