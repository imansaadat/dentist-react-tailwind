import React from "react";
import NavLinks from "./NavLinks";
const ResponsiveMenu = ({navLinksData,handleNav,nav}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center md:hidden w-full absolute top-0 duration-500 h-screen bg-[rgba(0,0,0,.9)] ${
        nav ? "left-0" : "left-[-100%]"
      }`}
    >
      <ul className="flex flex-col items-center space-y-6">
        {
          navLinksData.map((item,index)=>(
            <NavLinks item={item} key={index} handleNav={handleNav} />
          ))
        }
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
