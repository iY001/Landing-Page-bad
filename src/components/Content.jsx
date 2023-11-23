import React, { useEffect, useState } from 'react'
import idea from "../assets/idea.png"
import chart from '../assets/chart.png';
import research from "../assets/research.png"
import human from "../assets/businessman.png"
import woman from "../assets/business-woman.png"

function Content() {


    const cardInfo ={
       data: [ {title: "Discussion for idea",img: idea},
        {title: "Increase Discussion",img: chart},       
        {title: "Idea & Research",img: research} ]
    }
    const [card , setCard] = useState(cardInfo.data)

    const teamInfo = {
        data: [
            {name:"Yousef",job:"Front-End Developer",img:human},
            {name:"Yousef",job:"Designer",img:human},
            {name:"Yousef",job:"Marketter",img:human},
            {name:"Yousef",job:"Designer",img:woman},
            {name:"Yousef",job:"Back-End Developer",img:human}
        ]
    }
    const [ team , setTeam] = useState(teamInfo.data)

  return (
    <>
    <div className='my-[8rem]'>
        {/* Title */}
        
        <div className='mt-[4em] flex items-center justify-center'>
            <div className=' items-center text-center'>
                <p className='text-[#26a2ad] font-bold'>Our Service</p>
                <h3 className='font-semibold text-[2em]'>What We Provide</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempore.<br></br> iusto iste quos ipsam consectetur vero?</p>
            </div>
        </div>
        
        {/* Cards */}
        
        <div className='grid grid-cols-3 m-[2em]'>
        {
            
            card.map( (item , index)=>{
                return(
                    <section key={index} className='py-[6em] w-[28em] rounded-[3em] justify-center text-center transition-[200ms] hover:bg-[#e8fafc] mx-auto shadow-md' >
                <img src={item.img} className='w-20 mx-auto mb-10 ' alt="" />
                <h2 className='font-semibold text-[2rem] mx-auto'>{item.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Sunt, eveniet consectetur dolorum facilis<br></br> nesciunt deserunt dolor.</p>
            </section>
                )
            })
        
        }
        </div>
        
    </div> {/* Our Service */}




    <div className='mt-[8rem] mx-auto text-center'>


        {/* Title */}
        
        <div className='mt-[4em] flex items-center justify-center'>
            <div className=' items-center text-center'>
                <p className='text-[#26a2ad] font-bold'>Team</p>
                <h3 className='font-semibold text-[2em]'>Our Team</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempore.</p>
                <p> iusto iste quos ipsam consectetur vero?</p>
            </div>
        </div>
        
        {/* Cards */}
        
        <div className='mx-auto w-[80%] grid grid-cols-5 mt-[2em] mx-auto '>
        {
            
            team.map( (item , index)=>{
                return(
            <section key={index} className='w-9/12 text-center mx-auto '>
                <img className='rounded-[50%] w-5/12 mx-auto' src={item.img} alt="" />
                <div className=' my-10 hover:bg-[#e8fafc] rounded-[32px] py-3 px-[0.6rem] shadow-md transition-all'>  
                    <h4 className='font-semibold  text-[1.8em]'>{item.name}</h4>
                    <h6 className='font-normal'>{item.job}</h6>
                </div>
            </section>
                )
            })
        }
        </div> {/* Grid / Cards*/}

        <button className='mt-6 mx-auto bg-[#26a2ad] py-[0.6rem] px-[2.4em] rounded-[20px]  text-[#FFF]' >View All</button>

    </div>     {/* Container */}


    </>
  )
}

export default Content