import React from 'react'
import marketing from '../assets/marketing.jpg'
import trends from '../assets/server.jpg'
import tech from '../assets/anlythis.png'


function Blog() {
  return (
    <>

      <div className='mx-auto w-[85%] mt-[4em]'>

        <div className='flex justify-between items-center'>
          <div className=''>
            <p className='text-[#5abbbf] font-medium text-2xl'>Blog</p>
            <h2 className='font-semibold text-4xl pb-6'>Our Latest Blog</h2>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim fuga,</p>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Enim culpa.</p>
            <p>Enim culpa</p>
          </div>

          <div className=''>
            <button className='bg-[#FFF] border-solid border-2 border-[#26a2ad] text-black font-semibold hover:bg-[#26a2ad] py-2 px-12 hover:text-[#FFF] rounded-[20px] mt-[100px] r' >All Blog</button>
          </div>

        </div> {/* head */}
      <div className="flex gap-10">

        <div className="w-full mt-5 shadow-lg">
            <section className='w-full h-auto bg-white border-2  hover:bg-[#e8fafc] pb-12 rounded-lg text-left'>
            <div>
            <img src={marketing} className=' h-[26em] w-full rounded-xl' alt="" />
          </div>

            <section className=''> 
                  <span className='flex justify-between items-center pt-8 px-6'>
                      <p className='font-medium text-4xl'>Markting</p>
                      <p className='font-medium text-base'>Aug.20.2021</p>
                  </span>

                  <span className='flex flex-col text-left px-6  pt-4 pb-8'>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>

                <span className='px-6'><a href="#" className=' font-semibold text-lg text-[#26a2ad]'>learn more</a></span>
            </section>  
            </section>
        </div>     {/* Card 1  */}

        <div className="w-full mt-5 shadow-lg">
        <section className='w-full h-auto bg-white border-2  hover:bg-[#e8fafc] pb-12 rounded-lg text-left'>
            <div>
            <img src={trends} className=' h-[26em] w-full rounded-xl' alt="" />
          </div>

            <section className=''> 
                  <span className='flex justify-between items-center pt-8 px-6'>
                      <p className='font-medium text-4xl'>Markting</p>
                      <p className='font-medium text-base'>Aug.20.2021</p>
                  </span>

                  <span className='flex flex-col text-left px-6  pt-4 pb-8'>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>

                <span className='px-6'><a href="#" className=' font-semibold text-lg text-[#26a2ad]'>learn more</a></span>
            </section>  
            </section>
        </div>     {/* Card 2 */}

        <div className="w-full mt-5 shadow-lg">
        <section className='w-full h-auto bg-white border-2  hover:bg-[#e8fafc] pb-12 rounded-lg text-left'>
            <div>
            <img src={tech} className=' h-[26em] w-full rounded-xl' alt="" />
          </div>

            <section className=''> 
                  <span className='flex justify-between items-center pt-8 px-6'>
                      <p className='font-medium text-4xl'>Markting</p>
                      <p className='font-medium text-base'>Aug.20.2021</p>
                  </span>

                  <span className='flex flex-col text-left px-6  pt-4 pb-8'>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit.</p>
                  </span>

                <span className='px-6'><a href="#" className=' font-semibold text-lg text-[#26a2ad]'>learn more</a></span>
            </section>  
            </section>
        </div>     {/* Card 3 */}

        </div> {/*Layout Cards */}

        </div> {/*Main Div */}

    </>
  )
}

export default Blog