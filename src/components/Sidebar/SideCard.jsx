import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SideCard(props) {
  const [isClicked, setIsClicked] = useState(props.isClicked);

  console.log("clicked prop from sidbar card ", isClicked);
  return (
    <>
      <div className="flex justify-start items-center gap-3 rounded-lg p-2 w-full  text-lg hover:bg-zinc-800 cursor-pointer">
        <NavLink
          className="flex gap-2 items-center justify-center active:font-bold"
          to={props.link}
        >
          {props.icon}

          <span className=" text-base 2xl:hidden lg:block md:hidden 3xl:block max-sm:hidden ">
            {props.text}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default SideCard;
