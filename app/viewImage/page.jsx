'use client'
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter();
    const [texts, settexts] = useState([]);

    useEffect(() => {
          
       fetch('http://localhost:8080/text', {
        method: 'GET',
        headers : {
            token : localStorage.getItem('token')
        }
       })
       .then((res) => res.json())
       .then((res) => {
        if(res.message === 'jwt') {
            alert("Your token expired...!");
            router.push('/signin')
        }
        else {
            settexts(res.docs);
            console.log("This is the form here...! : ",res.docs);
        }
       })
       .catch((err) => {
        console.log(err.message);
       })

    }, [])

  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-950 to-slate-800 grid place-content-center grid-cols-3 gap-3 pt-[20vh] p-7'>
        {
            texts.map((text) => {

               if(text.text !== null) {
                return (
                    <>
                    <div className='border p-4 rounded bg-slate-900 hover:bg-black min-h-10 '>
                        <p>{text.text}</p>
                        <p className='truncate mt-3 opacity-75'>Create by : Name here</p>
                        <button className='bg-blue-600 p-3 rounded mt-6 hover:bg-blue-400 hover:ring-2'>View</button>
                    </div>
                    </>
                )
               }

            })
        }
    </div>
  )
}

export default page