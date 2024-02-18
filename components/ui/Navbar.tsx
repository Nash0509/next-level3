import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' h-9 w-full grid grid-cols-2 p-5 fixed z-30'>
        <div className='col-span-1 bg-black p-5'>
            <p className='font-bold text-4xl text-white'>Zenx</p>
        </div>
        <div className='col-span-1 text-center bg-black p-5'>
            <ul className='flex gap-7'>
                <Link href='#hero'><li>Home</li></Link>
                <Link href="#waiter"><li>Services</li></Link>
                <Link href='#info'><li>Info</li></Link>
                <li>SignIn/Up</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar