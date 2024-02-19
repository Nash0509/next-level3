'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

   const router = useRouter();

  return (
    <div className='h-screen flex items-center justify-center flex-col'>
        <div className='font-bold text-3xl text-center'>
        What do you want to upload ? Select one 😊
        </div>
        <div className='mt-7 w-[60vw]'>
            <ul >
                <li className='bg-slate-900 p-6 rounded text-xl my-3 hover:cursor-pointer hover:bg-slate-700 text-center' onClick={() => router.push('/text')}>Text</li>
                <li className='bg-slate-900 p-6 rounded text-xl my-3 hover:cursor-pointer hover:bg-slate-700 text-center' onClick={() => router.push('/image')}>Image</li>
                <li className='bg-slate-900 p-6 rounded text-xl my-3 hover:cursor-pointer hover:bg-slate-700 text-center' onClick={() => router.push('/pdf')}>PDF</li>
                <li className='bg-slate-900 p-6 rounded text-xl my-3 hover:cursor-pointer hover:bg-slate-700 text-center' onClick={() => router.push('/video')}>Video</li>
            </ul>
        </div>
    </div>
  )
}

export default page