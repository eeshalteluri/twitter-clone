'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'

const SideBarLogo = () => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push('/')}
      className='
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justiy-center
        hover:bg-blue-300
        hover:bg-opacity-10
        cursot-pointer
        transition
    '
    >
      <BsTwitter size={28} color='white' />
    </div>
  )
}

export default SideBarLogo