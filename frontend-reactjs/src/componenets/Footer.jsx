import React from 'react'

const Footer = () => {
  return (
    <div className='flex mt-20 items-center gap-5 justify-around bg-black text-white'>
        <div id="logo-text" className='max-w-[30%] flex flex-col'>
            <img className='h-20 w-20' src="/logo.png" alt="logo" />
            <h1 className='max-w-4'>Lorem ipsum dolor sit amet. Aut vero voluptas qui rerum pariatur cum commodi esse non voluptatem voluptas eos earum adipisci.</h1>
        </div>
        <div id="links" className='flex flex-col gap-3 justify-end'>
            <h1 className='underline'>Links</h1>
            <div className='flex flex-col gap-1'>
                <a className='cursor-pointer hover:underline'>Home</a>
                <a className='cursor-pointer hover:underline'>Products</a>
                <a className='cursor-pointer hover:underline'>Contact</a>
            </div>
            
        </div>
        <div id="subscribe" className='flex flex-col items-start gap-2'>
            <span>Subscribe to get great coupons</span>
            <input placeholder='email' />
            <button>Subscribe</button>
            
        </div>
    </div>
  )
}

export default Footer