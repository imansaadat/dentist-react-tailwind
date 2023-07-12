import React from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterItems = ({
  item: { icon, title, Firstsubtitle, Secondsubtitle },
}) => {
  return (
    <div className="text-center">
      <FontAwesomeIcon
        icon={icon}
        className="text-white bg-blue rounded-full text-3xl p-3"
      ></FontAwesomeIcon>
      <h3 className="text-black capitalize font-medium mt-3">{title}</h3>
      <p className="text-light-color py-2">{Firstsubtitle}</p>
      {Secondsubtitle && <p className="text-light-color">{Secondsubtitle}</p>}
    </div>
  );
};

export default FooterItems;
