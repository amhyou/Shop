import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect } from 'react';

const Tests = [
    {test:'Hic porro dolorem ad consequatur molestiae non illum sint nam debitis dolor sit',name:'howard douglas'},
    {test:'nulla facere id excepturi temporibus. Eos quas placeat est consectetur dolorem ',name:'howard memo'},
    {test:'quo repellat quia aut veritatis nulla ex perspiciatis accusantium est reprehenderit ',name:'howard sugar'},
    {test:'Cum eaque perferendis ut nostrum architecto qui illum dolore ut molestiae',name:'aghs hjkhj'},
]

const Testimonials = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-center font-font3 text-md underline'>Testimonials</h1>
        
        <Swiper className='mt-5' spaceBetween={70} slidesPerView={ screen.width > 640 ? 3 : 2 } >
            {
                Tests.map((elm,ind)=>{
                    return (
                        <SwiperSlide key={ind} className='rounded-md text-center flex items-center flex-col gap-2 outline-yellow-600 outline m-1 p-3'>
                            <img height="50px" width="100px" className='rounded-full' src="/Tests/test1.jpg" alt="test1" />
                            <span>{Tests[ind].test}</span>   
                            <h1 className='font-font2'>{Tests[ind].name}</h1>
                        </SwiperSlide>
                    )
                })
            }
            
            
        </Swiper>
        
    </div>
  )
}

export default Testimonials