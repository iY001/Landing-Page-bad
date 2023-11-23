import React from 'react'

function Contact() {
  return (
    <>
    
    <div className='bg-[#1ca0ac] container w-[60em] mx-auto rounded-2xl h-[360px] flex flex-col items-center justify-center '>

        <section>
            <span className='text-center'>
                <h6 className='font-normal text-xl text-white mb-4'>Contact</h6>
                <h6 className='font-medium text-5xl text-white mb-4'>Contact with us</h6> 
                <p className='text-white mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto <br/> cumque nobis sit quidem vel quae.</p>    
            </span>
        </section>

            <button className='bg-white text-[#1ca0ac] shadow-sm hover:shadow-xl duration-500 font-semibold py-2 px-8 rounded-3xl'>Get Started Now</button>
    </div>

    </>
  )
}

export default Contact