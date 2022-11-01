import React from 'react'
import { useState } from 'react'
import {BiArrowFromTop , BiArrowFromBottom} from 'react-icons/bi'
const faqs = [
    {q:"what is the price ?",a:"it is 7$"},
    {q:"what is the brand ?",a:"it is gucci"},
    {q:"what is the aze ?",a:"it is dfgdfg"}
]

const FAQs = () => {
    const [ans,setAns] = useState(0)
  return (
    <div className='mt-10'>
        <h1 className='text-center font-font3 text-md underline'>Frequent Asked Questions</h1>
        <div className='flex flex-col mt-10 gap-5'>
            {
                faqs.map((elm,ind)=>{
                    return(
            <div key={ind} className={`mx-20 rounded-2xl flex flex-col text-center ${ans==ind?'bg-sky-600':'bg-none'} transition-all`}>
                <div className='flex items-center justify-between border-solid border-2 border-stone-700 hover:bg-green-400 cursor-pointer z-[3]' onClick={()=>setAns(ind)}>
                    <h1 className='ml-10'>{faqs[ind].q}</h1>
                    { ans==ind?<BiArrowFromBottom />:<BiArrowFromTop /> }
                </div>
                <h1 className={`${ans==ind?'mt-2 px-20':'mt-[-25px] opacity-0'} mx-auto transition-all z-[2]`}>{faqs[ind].a}</h1>
            </div>
                    )
                })
            }
            

        </div>
    </div>
  )
}

export default FAQs