import React from 'react'
import {MeteorsDemo} from "@/components/ui/MeteorCard"

const page = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-3 my-14 md:flex-row md:flex-wrap'>
        <MeteorsDemo name={"System Design"} dis={"System design is the architectural blueprint of software systems, defining their components, interactions, and behaviors."}/>
        <MeteorsDemo name={"0-100 Web Dev"} dis={"Learn to make the complete web sites like the Netflix and Amazon."}/>
        <MeteorsDemo name={"ML Ops"} dis={"Learn all you need to know about the ML in the most efficient way possible."}/>
    </div>
  )
}

export default page