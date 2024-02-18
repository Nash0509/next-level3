import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' h-9 w-full grid grid-cols-2 p-5 fixed z-30'>
        <div className='col-span-1 bg-black p-5'>
            <p className='font-bold text-4xl text-white'>Zenx</p>
        </div>
        <div className='col-span-1 text-center bg-black p-5 hidden md:block'>
            <ul className='flex gap-7'>
                <Link href='#hero'><li>Home</li></Link>
                <Link href="#waiter"><li>Services</li></Link>
                <Link href='#info'><li>Info</li></Link>
                <li>SignIn/Up</li>
            </ul>
        </div>
        <div className='text-black md:hidden col-span-1 flex items-center justify-center'>
          <select name="menu" id="menu" className='p-2 bg-gradient-to-r from-slate-900 to-slate-600 text-white'>
            <option value="home" className='text-black'><Link href='#hero'>Home</Link></option>
            <option value="services" className='text-black'><Link href="#waiter">Services</Link></option>
            <option value="info" className='text-black'><Link href='#info'>Info</Link></option>
            <option value="signup" className='text-black'>SignUp</option>
          </select>
        </div>
    </div>
  )
}

export default Navbar