import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";

const PostHeader = ({ profileName, profileUrl }) => {
  return (
    <>
      <div className="flex gap-4 items-center justify-center cursor-pointer">
        <Avatar alt="profile photo" src={profileUrl} />
        <div className="relative w-full">
          <p>{profileName}</p>
          <div className="absolute top-1 right-2">
            <FaEllipsisH />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
