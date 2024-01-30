import React, { useState } from "react";

import { InstagramLogo } from "../assets/constants";
import data from "./data";
import SideCard from "./SideCard";
import { InstagramMobileLogo } from "../assets/constants";

function HSidebar({ navState }) {
  function createCard(item) {
    return (
      <SideCard
        id={item.id}
        key={item.id}
        link={item.link}
        text={item.text}
        icon={item.icon}
      />
    );
  }
  const [clicked, setClicked] = useState(false);

 

  return (
    <>
    
      <div className="fixed bottom-0 left-0 text-white bg-black h-auto w-full z-10 2xl:hidden 3xl:hidden lg:hidden md:hidden">
        <div className="2xl:hidden lg:block md:hidden max-sm:hidden  3xl:block">
          <InstagramLogo />
        </div>
        <div className="left-8 3xl:hidden lg:hidden sm:hidden md:hidden 2xl:block max-sm:hidden">
          <InstagramMobileLogo />
        </div>
        <div
          className=" flex justify-center items-center  gap-3 "
          onClick={() => {
            setClicked(true);
            console.log("nav item is clicked ");
           
          }}
        >
          {data.map(createCard)}
        </div>
      </div>
    </>
  );
}

export default HSidebar;
