import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.jpg";

function Navbar() {
  const [links, setLinks] = useState([
    "Home",
    "About us",
    "Service",
    "Blog",
    "Content",
  ]);
  const [open , setOpen] = useState(false)
  return (
    <>

      <div className="bg-[#e3fcff]  ">

        <div className="container bg-[#e3fcff] mx-auto flex justify-between items-center px-[4em items-center">
          <div className="logo flex justify-center items-center cursor-pointer ">
            <img src={logo} width={"80px"} className="" alt="" />
            <h2 className="font-bold mx-1 text-[1.6rem]">Hane ince</h2>
          </div>

          

          <nav>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon onClick={()=>setOpen(!open)} name={open ? 'close' : 'menu'} ></ion-icon>
        </span>
            <ul className={`flex items-center gap-[3em] md:flex md:items-center md:px-4 z-[-1] md:z-auto absolute md:static 
     w-full md:w-auto left-0 py-4 md:py-0 pl-7 md:pl-0 opacity-0 md:opacity-100
    top-[-400px] transition-all ease-in duration-500 ${open ? 'top-[400px] opacity-100' : 'top-[80px] opacity-100'} `}>
              {links.map((link) => {
                return (
                  <li key={link}>
                    <a
                      className="text-black font-medium hover:opacity-[0.7]"
                      href={`/${link}`}>
                      {link}
                    </a>
                  </li>
                );
              })}

              <button
                className="px-[2em] py-2 hover:font-medium hover:py-[0.6rem] hover:px-[2.1em]  transition-all"
                style={{ border: "solid 2px  #9ed8dc", borderRadius: "20px" }}>
                Contact Now
              </button>
            </ul>
          </nav> {/* Navbar */}

        </div> {/* Container */}
      </div>
    </>
  );
}

export default Navbar;
