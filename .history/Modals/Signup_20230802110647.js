import { auth } from '@/firebase'
import { closeLoginModal, openLoginModal, openSignUpModal } from '@/redux/modalSlice'
import Modal from '@mui/material/Modal'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineLoading } from 'react-icons/ai'

function Signup() {

    const isOpen = useSelector(state => state.modals.openloginModal)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    function openModal() {
      dispatch(openSignUpModal())
      dispatch(closeLoginModal())
    }

    async function handleSignIn() {
      await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => alert(error.message))
        setLoading(true)
        router.push('/')
    }

  return (
    <div>
      <p
      onClick={() => dispatch(openLoginModal())} 
      className='border-r border-[#ccc] hover:bg-gray-100 p-3'>Login in</p>
      <div className='h-[550px] w-[400px] flex flex-col justify-center'>
        <Modal 
        open={isOpen} 
        onClose={() => dispatch(closeLoginModal())}
        className='bg-black flex justify-center'>
          <div className=''>
            <div className='flex justify-between items-center py-4 px-4 border-b border-gray-400'>
              <h2 className='font-bold text-3xl'>Log in</h2>
              <p onClick={() => dispatch(closeLoginModal())} className='font-thin cursor-pointer'>Cancel</p>
            </div>
            <h1 className='text-[#1cc592] text-3xl font-bold text-center py-4'>MarketPlace</h1>
            <div className='flex flex-col items-center'>
              <input 
                type={"email"}
                placeholder='Email' 
                className='h-5 bg-transparent border border-gray-700 p-3 rounded-lg mb-5'
                onChange={e => setEmail(e.target.value)} 
              />
              <input 
                type={"password"}
                placeholder='Password' 
                className='h-5 bg-transparent border border-gray-700 p-3 rounded-lg spac'
                onChange={e => setPassword(e.target.value)}
              />
              <h2 
              className='text-[#1cc592] font-semibold text-xl my-5 cursor-pointer'
              onClick={openModal}>
                Don't have an account? Sign Up
              </h2>
              {loading ? <button className="bg-[#1cc592] text-white w-full rounded-full
              font-bold text-xl px-5 py-4 "><AiOutlineLoading /></button> :
              <button className="bg-[#1cc592] text-white w-full rounded-full
              font-bold text-xl px-5 py-4 "
              onClick={handleSignIn}>Log in</button>}
              
            </div>
            
          </div>
        </Modal>
      </div>
      
    </div>
  )
}

export default Signup