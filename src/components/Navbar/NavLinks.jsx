import React from 'react'
import { Link } from 'react-scroll';

const NavLinks = ({handleNav}) => {
  const Links = [
    {
      name: 'Home',
      path: 'home'
    },
    {
      name: 'About',
      path: 'about'
    },
    {
      name: 'Services',
      path: 'services'
    },
    {
      name: 'Reviews',
      path: 'reviews'
    },
    {
      name: 'Contact',
      path: 'contact'
    }
  ]
  return (
    <>
      {
        Links.map((link, index) => (
          <li key={index} className='cursor-pointer text-white md:text-black text-xl md:text-base hover:text-blue'>
            <Link to={link.path} offset={-40} smooth={true} duration={500} onClick={handleNav}>
              {link.name}
            </Link>
          </li>
        ))
      }
    </>
  )
}

export default NavLinks