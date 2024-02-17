import { auth } from '@/firebase'
import { closeSignUpModal } from '@/redux/modalSlice'
import { Modal } from '@mui/material'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineLoading } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { setUsers } from '@/redux/userSlice'

function Login() {

    const Open = useSelector(state => state.modals.opensignupModal)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const router = useRouter()

    async function handleSignUp() {
        await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => alert(error.message))
        setLoading(true)
        location.reload()
        router.push('/')
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) return
            console.log(currentUser)
                dispatch(
                    setUsers({
                        username: currentUser.email.split('@')[0],
                        email: currentUser.email,
                        uid: currentUser.uid,
                    })
                )
                
        })
        

        return unsubscribe
    }, [])

  return (
    <div>
        <Modal
        open={Open}
        onClose={() => dispatch(closeSignUpModal())}
        className='bg-black flex justify-center'>
            <div className=''>
            <div className='flex justify-between items-center py-4 px-4 border-b border-gray-400'>
              <h2 className='font-bold text-3xl'>Sign Up</h2>
              <p onClick={() => dispatch(closeSignUpModal())} className='font-thin cursor-pointer'>Cancel</p>
            </div>
            <h1 className='text-[#1cc592] text-3xl font-bold text-center py-4'>MarketPlace</h1>
            <div className='flex flex-col items-center'>
              <input 
                type={"text"}
                placeholder='Username' 
                className='h-5 bg-transparent border border-gray-700 p-3 rounded-lg mb-5'
                onChange={e => setName(e.target.value)} 
              />
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
              onClick={() => dispatch()}>
                Already have an account? Log in
              </h2>
              {loading ? <button className="bg-[#1cc592] text-white w-full rounded-full
              font-bold text-xl px-5 py-4 "
              ><AiOutlineLoading 
              className='animate-spin text-xl text-[white] cursor-not-allowed'/>
              </button> : <button className="bg-[#1cc592] text-white w-full rounded-full
              font-bold text-xl px-5 py-4 "
              onClick={handleSignUp}
              >Sign Up</button>}
              
            </div>
            
          </div>
        </Modal>
    </div>
  )
}

export default Login