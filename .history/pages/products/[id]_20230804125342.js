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
      <div className='flex justify-center mt-20 mb-10'>
        <Image
        src={products.image}
        height={380}
        width={380}
        className='border border-gray-300 p-10 rounded-2xl'
        />
        <div className='mx-10 border-t border-gray-300'>
          <div>

          </div>
          <h2 className='font-extrabold text-3xl my-4'>{products.title}</h2>
          <h2 className='font-extrabold text-3xl my-4'>${products.price}</h2>
          <div>
            <button className='bg-[#1cc592] py-3 px-5 rounded-full text-white text-xl font-medium mr-5'>Offer price</button>
            <button className='bg-[#1cc592] py-3 px-5 rounded-full text-white text-xl font-medium'>Message</button>
          </div>
        </div>
        
  
      </div>
      <div className='flex flex-col justify-center border-t border-gray-300'>
        <h1 className='font-extrabold text-5xl my-4'>Description</h1>
        <p className='mb-4 text-lg font-semibold'>{products.description}</p>
      </div>
      
    </div>
  )
}

export default Id