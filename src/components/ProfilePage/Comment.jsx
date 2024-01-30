import React from "react";

import Avatar from "@mui/material/Avatar";

const Comment = ({ userAvatar, text, name }) => (
  <div className="flex gap-2">
    <div className="flex items-center gap-2">
      <Avatar src={userAvatar} alt={name} />
      <div className="flex flex-col gap-0 justify-center ">
        <div className="flex items-center gap-3">
          <p>{name}</p>
          <p>{text}</p>
        </div>
        <div className="flex  items-center gap-2 text-zinc-500 ">
          <p>1d</p>
          <p>Reply</p>
        </div>
      </div>
    </div>
  </div>
);

export default Comment;
