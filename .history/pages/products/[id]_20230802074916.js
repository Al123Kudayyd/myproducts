import Products from '@/Components/Products'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Id() {
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState(false) 
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
    <div>
      {loading ? <AiOutlineLoading 
        className='animate-spin text-5xl text-[#1cc592]' /> :
        <Image
        src={products.image} 
        />
      }
     
    </div>
  )
}

export default Id