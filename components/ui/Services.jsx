import React from 'react'
import reviews from "@/utils/reviews"

const Services = () => {
  return (
    <div className='min-h-screen grid md:grid-cols-2 grid-cols-1 text-center' id='#waiter'>
           <div className='flex flex-col justify-center items-center border md:text-6xl text-3xl font-extrabold pl-4 border-y-0'>
             Learn in a smart way, with the small duration videos created by our experienced experts.
           </div>
           <div  className='grid md:grid-cols-2 grid-cols-1 items-center border border-y-0 gap-2 p-3'>
              {
                reviews.map((review, index) => {

                    return (

                        <div className='text-white border rounded p-3 bg-slate-900 hover:bg-black' key={index}>
                          <div className='font-bold text-2xl'>
                          {review.name}
                          </div>
                          <div>
                            {review.review}
                          </div>
                        </div>
                    )

                })
              }
           </div>
    </div>
  )
}

export default Services