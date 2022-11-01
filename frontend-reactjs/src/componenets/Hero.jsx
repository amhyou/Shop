import React from 'react'

const Hero = () => {
  return (
    <div className='flex bg-hero h-[300px] bg-cover bg-center'>
        <div id="text-hero" className='ml-[8%] mt-20'>
            <h1 id="headline" className="text-2xl font-font4">Best service out there</h1>
            <h1 id="subheadline" className='mt-5 ml-2 text-lg font-font3 font-semibold'>Fair prices</h1>
            <button className='bg-col3 rounded-lg p-2 mt-5 hover:bg-green-400 duration-500'>Browse</button>
        </div>
    </div>
  )
}

export default Hero