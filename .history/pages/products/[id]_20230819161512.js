import Products from '@/Components/Products'
import StripeContainer from '@/Components/StripeContainer'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Id() {
  const [showProducts, setShowProducts] = useState()
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState(false) 
    const [products, setProducts] = useState([])

    const username = useSelector(state => state.user.username)

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
        showProducts ? <StripeContainer /> : 
      }
      
    </div>
    
  )
}

export default Id