import { data } from 'autoprefixer'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'



function Products() {
    
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  
  async function getProducts() {
    const {data} = await axios.get("https://fakestoreapi.com/products/");
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
    <div className='flex flex-wrap justify-center my-10'>
      { loading ? (<div className='flex justify-center items-center'>
          <AiOutlineLoading 
          className='animate-spin text-5xl text-[#1cc592]' />
        </div>)
         : (products.map((product) => (
          <div key={product.id} className='flex flex-col justify-center mx-5 my-5'>
            <div className='shadow-xl flex justify-center items-center border rounded-xl w-[250px] h-[200px] p-6 
            relative cursor-pointer mt-4 mb-4 aspect-w-16 aspect-h-9"'>
            <Image
            src={product.image} 
            width={100}
            height={100}
            className='absolute'
            />
          </div>
          <div className='text-lg font-semibold relative my-10'>
            <h3 className='absolute top-0'>{product.title}</h3>
            <p className='absolute top-5'>${product.price.toFixed(2)}</p>
            <p className='text-gray-300 absolute top-10'>{product.category}</p>
          </div>
      </div>
        )))
      }
      
    </div>
    
    
  )
}

export default Products