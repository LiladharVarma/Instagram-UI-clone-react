import { Avatar } from "@mui/material";
import React, { useState } from "react";

function SuggestedUser({ name, followers, image }) {
  const [clicked, setClilcked] = useState(false);

  function handleFollow() {
    setClilcked((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar src={image} alt="profile" />
          <div className="text-sm">
            <p>{name}</p>
            <p>{followers}</p>
          </div>
        </div>
        <p
          onClick={handleFollow}
          className="text-blue-400 hover:text-white cursor-pointer"
        >
          {clicked ? "Unfollow" : "Follow"}
        </p>
      </div>
    </>
  );
}

export default SuggestedUser;
