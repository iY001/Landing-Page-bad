import React from 'react'
import logo from '../assets/Logo.jpg'
import facebook from '../assets/Facbook - logo .png'
import twitter from '../assets/Twitter - icon .png'
import google from '../assets/Google+ - icon .png'
import linkedin from '../assets/Linked In - Logo .png'


function footer() {
  return (
    <>
    
    <footer className='w-full mt-32 pt-10 pb-20 bg-[#f5ffff] flex flex-row gap-[20%] px-28'>


        <section className=''>

            <span className='logo flex items-center cursor-pointer mb-4'>
                <img src={logo} width={"80px"} className='' alt="" />
              <h2 className='font-bold mx-1 text-[1.6rem]'>Hane ince</h2>
          </span>

          <p>We are here to help you with your <br /> online business</p>
        <span className='flex mt-4'>
            <img className='w-12 h-11 ml-3' src={facebook} alt="" />
            <img className='w-12 h-11 ml-3' src={twitter} alt="" />
            <img className='w-12 h-11 ml-3' src={google} alt="" />
            <img className='w-12 h-11 ml-3' src={linkedin} alt="" />
        </span>
        </section>

        <section>
            <span>
                <h2 className='font-semibold text-2xl mb-4'>Home</h2>
                <h2 className='font-medium text-base'>About</h2>
                <h2 className='font-medium text-base'>Service</h2>
                <h2 className='font-medium text-base'>Blog</h2>
                <h2 className='font-medium text-base'>Support</h2>
            </span>
        </section>

        <section>
            <span>
                <h2 className='font-semibold text-2xl mb-4'>Support</h2>
                <h2 className='font-normal'>FAQ</h2>
                <h2 className='font-medium text-base'>Coreer</h2>
                <h2 className='font-medium text-base'>Features</h2>
                <h2 className='font-medium text-base'>How to Work</h2>
                <h2 className='font-medium text-base'>Contact</h2>
            </span>
        </section>

        <section>
            <span>
                <h2 className='font-semibold text-2xl mb-4'>Get in Touch</h2>
                <h2 className='font-normal'>Name : Y1</h2>
                <h2 className='font-medium text-base'>Email : youssefabdo4005@gmail.com</h2>
            </span>
        </section>

    </footer>
    
    </>
  )
}

export default footer