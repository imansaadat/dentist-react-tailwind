import React from 'react'
import FooterData from './FooterData'
// react scroll
import { Link } from 'react-scroll';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
export const Footer = () => {
  return (
    <footer className="pt-20 bg-light-bg relative">
      <div className="max-w-[1200px] mx-auto px-4">
        <Link className='absolute top-10 right-5 cursor-pointer' to="home" smooth={true} duration={500}>
          <FontAwesomeIcon icon={faArrowUp} className='text-white bg-blue rounded-full h-6 w-6 p-2 hover:bg-black'></FontAwesomeIcon>
        </Link>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FooterData />
        </div>
        <div className='text-center py-5 border-t border-[#0000001a] mt-6'>
          <p>Developed by <span className='text-blue'>Eslam Saadat (Iman)</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer