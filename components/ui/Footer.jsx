import React from 'react'

const Footer = () => {
  return (
     <div>
       <div className='min-h-[50vh] flex flex-col justify-evenly p-6 bg-gradient-to-r from-slate-950 to-slate-900 rounded md:flex-row'>

<div className='flex flex-col justify-center items-center mb-4'>
    <p className="text-3xl font-bold">Zenx pvt ltd.</p>
      <p className='text-sm opacity-75'>We assure quality.</p>
</div>
<div className='flex flex-col justify-center items-center mb-4'>
    <p className='font-bold text-2xl'>Follow us</p>
    <ul className='mt-3'>
      <li>Instagram</li>
      <li>X</li>
      <li>Discord</li>
      <li>Reddit</li>
    </ul>
</div>
<div className='flex flex-col justify-center items-center mb-4'>
    <p className='font-bold text-2xl'>Our presence</p>
    <ul className='mt-3'>
    <li>New Delhi</li>
    <li>Jaipur</li>
    <li>Mumbai</li>
    <li>Kolkata</li>
    <li>Chennai</li>
    <li>Bengaluru</li>
    </ul>
</div>
</div>
<div className='border-t-2 p-3 text-center'>
  All rights reserved @zenx pvt ltd.
</div>
     </div>
  )
}

export default Footer