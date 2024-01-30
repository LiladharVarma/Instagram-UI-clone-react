import React, { useState } from "react";

import { InstagramLogo } from "../assets/constants";

import data from "./data";
import SideCard from "./SideCard";
import { InstagramMobileLogo } from "../assets/constants";
import HSidebar from "./HSidebar";

function Sidebar({ getState }) {
  const [clicked, setClicked] = useState(false);
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



  return (
    // 3xl:bg-violet-800  2xl:bg-green-400  lg:bg-blue-600  md:bg-orange-500
    <>
      <div className="fixed top-0 left-0 h-full bg-black text-white flex flex-col justify-center items-start w-60 gap-5 pl-4 pr-4 z-10 border-r-2 border-solid border-zinc-800  lg:w-52  md:w-20 2xl:w-20  3xl:w-60 max-sm:w-20 max-sm:bg-cyan-500 max-sm:hidden transition-all duration-75">
        <div className="absolute top-6 2xl:hidden lg:block md:hidden max-sm:hidden  3xl:block">
          <InstagramLogo />
        </div>
        <div className="absolute top-10 left-8 3xl:hidden lg:hidden sm:block md:block 2xl:block">
          <InstagramMobileLogo />
        </div>
        <div
          className="absolute top-20 flex flex-col gap-4 lg:top-30"
          onClick={() => {
            setClicked(true);
            console.log("nav item is clicked ");
            getState(clicked);
          }}
        >
          {data.map(createCard)}
        </div>
      </div>

      

      <HSidebar navState={clicked} />

      
    </>
  );
}

export default Sidebar;
