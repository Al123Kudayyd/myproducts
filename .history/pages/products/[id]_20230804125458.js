import Products from '@/Components/Products'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

function Id() {
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState(false) 
    const [products, setProducts] = useState([])

    async function getProducts() {
      const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(data)
      setProducts(data)
    }
  
    useEffect(() => {
      getProducts()
      setTimeout(() => {
        setLoading(false)
      }, [500])
      
    }, [])

  return (
    <div className='mx-20'>
      {
        loading ? <AiOutlineLoading 
        className='animate-spin text-5xl text-[#1cc592]' /> :
        
      }
      
      <div className='flex flex-col justify-center border-t border-gray-300'>
        <h1 className='font-extrabold text-5xl my-4'>Description</h1>
        <p className='mb-4 text-lg font-semibold'>{products.description}</p>
      </div>
      
    </div>
  )
}

export default Id