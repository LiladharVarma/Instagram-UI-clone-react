import React from "react";
import { Avatar } from "@mui/material";
// import myImage from "../FeedPosts/images/my-image.jpeg";
import myImage from "../FeedPosts/Feedimages/my-image.jpeg";

function ProfileHeader({ profile }) {
  profile(myImage);

  return (
    <>
      <div className=" flex justify-center items-center gap-2 text-white 3xl:w-3/2 max-sm:p-1">
        <div className="max-sm:w-auto">
          <Avatar
            src={myImage}
            alt="profile page photo"
            style={{
              width: "120px",
              height: "120px",
              outline: "2px solid #71717a",
            }}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-3  items-center">
            <p>Bajirao1292</p>
            <button className="outline-outline bg-zinc-700 text-white p-1 rounded-lg pr-2 pl-2 h-max hover:bg-zinc-800">
              Edit Profile
            </button>
          </div>
          <div className="flex justify-between  gap-1  w-auto">
            <div className="flex justify-center items-center flex-wrap 3xl:flex-nowrap gap-1">
              <strong>4</strong>
              <p>posts</p>
            </div>
            <div className="flex justify-center items-center flex-wrap 3xl:flex-nowrap gap-1">
              <strong>100k</strong>
              <p>followers</p>
            </div>
            <div className="flex justify-center items-center flex-wrap 3xl:flex-nowrap gap-1">
              <strong>120</strong>
              <p>following</p>
            </div>
          </div>

          <div>
            <p>
              Transforming ideas into code crafting digital solutions that
              resonate
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default ProfileHeader;
