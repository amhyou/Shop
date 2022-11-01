import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {MdDarkMode} from 'react-icons/md'
import { RiShoppingCart2Fill } from 'react-icons/ri'
const Header = () => {
    const [dark,setDark] = useState(false)
    useEffect(()=>{
        if(dark){window.document.documentElement.classList.add('dark')}
        else{window.document.documentElement.classList.remove('dark')}
    },[dark])
  return (
    <div className='bg-col4 text-black dark:text-white dark:bg-col1'>
        <div id="phone-header" className='hidden'>

        </div>
        <div id="desktop-header" className='h-16 flex justify-between items-center'>
            <div className='ml-5 flex items-center font-font1 gap-3 text-2xl'>
                <img src="/logo.png" alt="logo" className='h-10 cursor-pointer' />
                <h1 className='p-2 hover:bg-col2 rounded-md cursor-pointer'>Products</h1>
                <h1 className='p-2 hover:bg-col2 rounded-md cursor-pointer'>Contact</h1>
            </div>
            <div className="mr-5 flex gap-5">
                <RiShoppingCart2Fill size="20" />
                <MdDarkMode size="20" onClick={()=>setDark(prev=>!prev)} className="cursor-pointer rounded-md hover:bg-col2" />
            </div>
        </div>
    </div>
  )
}

export default Header