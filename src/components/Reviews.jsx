import React from 'react'
import human from "../assets/businessman.png"
import woman from "../assets/business-woman.png"

function Reviews() {
  return (
    <>
    
    <reviews className=' '>

<section className='bg-[#e3fcff] flex justify-between items-center p-28 rounded-3xl my-24 h-[400px]'>
  <span>
    <p className='text-[#5abbbf] font-medium text-2xl mb-5'>Client Say</p>
    <h2 className='font-medium text-4xl mb-5'>What Our Happy Client Say</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,<br/> fuga voluptate consequatur earum eaque fugit? Harum?</p>
  </span>


 <cards className="">

<card className="flex mb-10 shadow-lg p-6 bg-white rounded-2xl hover:bg-[#e3fcff]">
  <pic>
    <img src={human} className='w-24' alt="client" />
  </pic>
  <span>
    <p>Client Name</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptate!</p>
  </span>
</card>

<card className="flex mr-32 bg-white shadow-lg scale-125 p-4 rounded-2xl hover:bg-[#e3fcff]">
  <pic>
    <img src={human} className='w-24' alt="client" />
  </pic>
  <span>
    <p>Client Name</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptate!</p>
  </span>
</card>

<card className="flex mt-11 shadow-lg bg-white p-6 rounded-2xl hover:bg-[#e3fcff]">
  <pic>
    <img src={woman} className='w-24' alt="client" />
  </pic>
  <span>
    <p>Client Name</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptate!</p>
  </span>
</card>

</cards> 
 
</section>






{/* <h1 className='text-6xl float-right absolute right-96 '>Welcome</h1> */}









{/* <card className="flex float-right absolute right-48 mt-16 shadow-2xl p-4 rounded-2xl bg-white hover:bg-[#e3fcff]">
  <pic>
    <img src={human} className='w-24 rounded-xl' alt="client" />
  </pic>
  <span>
    <p>Client Name</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptate!</p>
  </span>
</card> */}
{/* <card className="flex  shadow-lg p-4 rounded-xl hover:bg-[#e3fcff]">
  <pic>
    <img src={human} className='w-24' alt="client" />
  </pic>
  <span>
    <p>Client Name</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptate!</p>
  </span>
</card> */}
</reviews>

    
    </>
  )
}

export default Reviews