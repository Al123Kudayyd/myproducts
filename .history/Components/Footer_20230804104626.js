import React from 'react'

function Footer() {
  return (
    <div className='bg-[#1cc592] py-5'>
        <div className='flex justify-center space-x-16 text-white mb-5'>
            <div>
                <h2 className='text-2xl font-bold'>Backend</h2>
                <p>Firebase</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Frontend</h2>
                <p>React</p>
                <p>Next</p>
                <p>Redux</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Styling</h2>
                <p>HTML</p>
                <p>CSS</p>
                <p>Tailwind CSS</p>
                <p>React icons</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Future features</h2>
                <p>Real time chat</p>
                <p>Image file drop</p>
            </div>
        </div>
        <h1 className='text-3xl font-bold text-center text-white border-t border-white py-6'>MarketPlace</h1>
    </div>
  )
}

export default Footer