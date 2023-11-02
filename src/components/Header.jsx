import React from 'react'
import img from '../assets/img-2.svg'


function Header() {
  return (
    <>

    <div className=' bg-[rgb(227,252,255)] grid grid-cols-2 items-center'> 
        <section className='mx-[6rem] p-[5em]'>
        <p className='text-[1.2rem] text-[#26a2ad]'>Welcome to Hane ince</p>
        <h3 className='text-[3rem] font-normal'>Let's Control Your Business with <span className='font-semibold'>Hane Ince</span></h3>
        <p className='text-[1rem] mb-10 font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br> Dolores, harum! </p>
        <button className='bg-[#26a2ad] py-[0.6rem] px-[2.4em] rounded-[20px] text-[#FFF]' >Get Started</button>
        </section>

        <section className=''>
        <img src={img} className='items-center mx-auto w-[65%]' alt="" />
        </section>  
    </div>

    </>
  )
}

export default Header