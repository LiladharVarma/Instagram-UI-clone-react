import React from "react";
import Avatar from "@mui/material/Avatar";

import myImage1 from "../ProfilePage/profileImages/my-image.jpeg";
import { Link } from "react-router-dom";

function SuggestedUsersHeader() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Avatar alt="profile photo" src={myImage1} />
          <div>
            <p>Bajirao1292</p>
          </div>
        </div>
        <Link to="/auth" className="text-blue-400">
          Logout
        </Link>
      </div>
    </>
  );
}

export default SuggestedUsersHeader;
