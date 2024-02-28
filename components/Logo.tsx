import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex space-x-10'>
      <Image src={'/assets/logo.png'} alt='Logo' width={300} height={300}/>
    </div>
  )
}

export default Logo