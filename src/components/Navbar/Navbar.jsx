import React, { useState,useEffect } from 'react'
import NavLinks from './NavLinks'
// react scroll
import { Link } from 'react-scroll';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes } from '@fortawesome/free-solid-svg-icons'
// button component
import Button from '../Button';
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [bg, setBg] = useState(false)

  const handleNav = () => {
     setNav(!nav)
  }

   useEffect(()=>{
   const handleScroll = () =>{
      if(window.scrollY){
         setBg(true)
      }else{
         setBg(false)
      }
   }  
   window.addEventListener('scroll',handleScroll)
  },[])
  
  return (
    <header className={`fixed w-full left-0 top-0 z-10 ${bg ? 'bg-white shadow-md':''}`}>
    <nav className='flex justify-between items-center max-w-[1200px] mx-auto px-5 h-20'>
       <Link to="home" smooth={true} duration={500} className='z-10 cursor-pointer'>
       <h1 className={`text-2xl lg:text-3xl ${nav ? 'text-white' : 'text-black'}`}
            >Dental<span className="text-blue">Care.</span></ h1>
       </Link>
       <div className='hidden md:flex'>
          <ul className='flex space-x-8'>
             <NavLinks />
          </ul>
       </div>
          <Button text='make appointment' btnStyle='hidden lg:flex' />
       {/* Hamburger icon */}
       <div className={`flex md:hidden cursor-pointer z-10 hover:text-blue ${nav ? 'text-white':'text-black'}`} onClick={handleNav}>
          {nav ? <FontAwesomeIcon icon={faTimes} className='text-3xl'></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars} className='text-3xl' ></FontAwesomeIcon>}
       </div>

       {/* Mobile menu */}
       <div className={`flex flex-col justify-center items-center md:hidden w-full absolute top-0 duration-500 h-screen bg-[rgba(0,0,0,.9)] ${nav ? 'left-0' : 'left-[-100%]'}`}>
          <ul className='flex flex-col items-center space-y-6'>
             <NavLinks handleNav={handleNav} />
          </ul>
       </div>
    </nav>
 </header>
  )
}

export default Navbar
