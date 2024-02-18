import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 w-[50vw] relative'>
        <ul>
            <li className='p-4 hover:bg-slate-700 hover:cursor-pointer'>Home</li>
            <li className='p-4 hover:bg-slate-700 hover:cursor-pointer'>Services</li>
            <li className='p-4 hover:bg-slate-700 hover:cursor-pointer'>Info</li>
            <li className='p-4 hover:bg-slate-700 hover:cursor-pointer'>SignUp</li>
        </ul>
    </div>
  )
}

export default Sidebar