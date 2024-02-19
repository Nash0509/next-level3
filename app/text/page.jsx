'use client'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

    const [text, settext] = useState('')
    const router = useRouter();

  async function handleSubmit() {

         await fetch('http://localhost:8080/text', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                token : localStorage.getItem('token')
            },
            body: JSON.stringify({
                text : text,
                user : localStorage.getItem('user')
            })
         })
         .then((res) => res.json())
         .then((res) => {
            console.log("This is the textsubmit response : ", res);
            if(res.message === 'jwt') {
                alert("You are not authenticated...");
                router.push('/signin');
            }
         })
         .catch((err) => {
            console.log(err.message);
         })

   }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
        <div className='w-[70vw]'>
            <textarea name="text" cols="30" rows="10" className='p-3 rounded hover:bg-slate-200 text-black focus:ring-blue-900 focus:ring focus:border-none outline-0 w-[70vw] text-2xl font-bold font-mono leading-8 
            ' placeholder='open up here...😊' onChange={(e) => settext(e.target.value)}></textarea>
            <div className='p-3 rounded bg-gradient-to-r from-teal-950 to-slate-700 text-xl text-center hover:cursor-pointer hover:bg-gradient-to-l hover:from-teal-950 hover:to-slate-700 mt-3' title='post' onClick={handleSubmit}>
            <button>Post!</button>
            </div>
        </div>
    </div>
  )
}

export default page