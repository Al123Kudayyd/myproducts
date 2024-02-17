import Products from '@/Components/Products'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

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
    <div>
      {
        <Image
        src={products.image}
        height={100}
        width={100}
        />
        <p></p>
      }
     
    </div>
  )
}

export default Id