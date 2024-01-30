import React, { useState } from "react";
import MessageHeader from "./MessageHeader";
import { Stack } from "@mui/material";
import MessageCard from "./MessageCard";
import Button from "@mui/material/Button";
import { LiaFacebookMessenger } from "react-icons/lia";
import MessageModal from "./MessageModal";
import MessageData from "./MessageData";

const MessagePage = (state) => {
  console.log("looging stae from Message component", state);
  const [openModel, setOpenModel] = useState(false);

  return (
    <div
      className="absolute left-60 h-full w-[81%] flex max-sm:left-0 max-sm:w-auto   md:left-20 md:w-full md:h-full lg:w-[92%] 3xl:left-60 3xl:w-[81%] 4xl:left-[210px] 
  "
    >
      <div className=" text-white  w-96 h-full max-sm:w-auto max-sm:h-auto md:w-auto lg:w-auto 3xl:w-auto 4xl:w-96 border-r-solid border-r-2 border-r-zinc-800 ">
        <MessageHeader userName="bajirao1292" />
        <Stack spacing={1} marginTop={"10px"} width={"auto"}>
          {MessageData.map((sender, index) => {
            return (
              <MessageCard
                key={index}
                senderProfile={sender.profile}
                senderUserName={sender.name}
              />
            );
          })}
        </Stack>
      </div>
      <div className=" w-full text-white flex justify-center items-center ">
        <Stack
          spacing={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div className="w-auto h-auto border-2 border-solid border-white rounded-full p-4">
            <LiaFacebookMessenger style={{ fontSize: "80px" }} />
          </div>
          <h1 className="text-2xl">Your Messages</h1>
          <p className="text-zinc-400 ">
            Send private photos and messages to a friend or group
          </p>
          <Button
            variant="contained"
            onClick={() => {
              setOpenModel((prev) => {
                return !prev;
              });
              console.log("openModel", openModel);
            }}
          >
            Send Message
          </Button>
        </Stack>
      </div>
      {openModel && <MessageModal status={openModel} />}
    </div>
  );
};

export default MessagePage;
