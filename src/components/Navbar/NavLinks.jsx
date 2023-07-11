import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ item: { name, path }, handleNav }) => {
  return (
    <li className="cursor-pointer text-white md:text-black text-xl md:text-base hover:text-blue">
      <Link
        to={path}
        offset={-40}
        smooth={true}
        duration={500}
        onClick={handleNav}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLinks;
