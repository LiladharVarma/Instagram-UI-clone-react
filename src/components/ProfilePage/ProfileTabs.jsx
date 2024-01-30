import React from "react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

function ProfileTabs() {
  return (
    <>
      <div className=" flex gap-24  justify-center w-full mt-8 ">
        <div className="flex justify-center items-center gap-1">
          <BsGrid3X3 className="h-[30px] w-[50px]" />
          <p className="max-sm:hidden">POSTS</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <BsBookmark className="h-[30px] w-[50px]" />
          <p className="max-sm:hidden">SAVED</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <BsSuitHeart className="h-[30px] w-[50px]" />
          <p className="max-sm:hidden">TAGGED</p>
        </div>
      </div>
    </>
  );
}

export default ProfileTabs;
