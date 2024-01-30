import { Avatar } from "@mui/material";
import React from "react";

function MessageCard({ senderProfile, senderUserName, inMessageModel }) {
  return (
    <div className="flex items-center hover:bg-zinc-700 ">
      <div className="object-contain">
        <Avatar src={senderProfile} alt="sender info" />
      </div>
      {inMessageModel ? (
        <div className="flex flex-col justify-center ml-2 md:h-full lg:h-full">
          <h1>{senderUserName}</h1>
          <p className="text-zinc-500">Sent an Attachment.</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center ml-2 max-sm:hidden md:hidden md:h-full lg:hidden lg:h-full 3xl:block 4xl:block">
          <h1>{senderUserName}</h1>
          <p className="text-zinc-500">Sent an Attachment.</p>
        </div>
      )}
    </div>
  );
}

export default MessageCard;
