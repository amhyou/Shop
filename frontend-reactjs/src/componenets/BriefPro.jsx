import React from 'react'

const BriefPro = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-center font-font3 text-md underline'>Popular products</h1>
        <div className='flex flex-col w-[80%] mx-auto mt-8 gap-5'>
            <div className='flex flex-col sm:flex-row gap-8 items-center justify-evenly rounded-lg cursor-pointer hover:outline hover:outline-offset-3'>
                <img className='rounded-2xl sm:max-h-[200px]' src="/prods/prod1.jpg" alt="" />
                <p className='min-w-[40%] indent-4'>Lorem ipsum dolor sit amet. Non pariatur dolor ad dolores ullam non cumque explicabo. Quo iure voluptatibus qui facere vero eos dignissimos blanditiis est nihil enim! Ut consequatur recusandae et placeat veritatis hic ullam perspiciatis et voluptas sunt quo ipsa blanditiis et neque laudantium. Sit provident quia qui pariatur rerum eum dicta ratione. </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-8 items-center justify-evenly rounded-lg cursor-pointer hover:outline hover:outline-offset-3'>
                <img className='rounded-2xl sm:max-h-[200px]' src="/prods/prod2.jpg" alt="" />
                <p className='min-w-[40%] indent-4'>33 minima dicta et dolore quas ea saepe reprehenderit ut veritatis possimus. In odio nemo qui dolores molestias in tenetur nobis qui iure magnam. Ea unde enim sit galisum sint est perferendis illum sit iste optio hic minima quae aut dolorum tempore sit voluptas odio.  </p>
            </div>
        </div>
    </div>
  )
}

export default BriefPro