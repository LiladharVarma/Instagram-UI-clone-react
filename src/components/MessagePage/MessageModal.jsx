import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import MessageCard from "./MessageCard";
import MessageData from "./MessageData";

function MessageModal({ status }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(status);
  }, [status]);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="relative flex justify-center items-center bg-transparent w-full h-full  text-white   max-sm:h-full">
          <div
            className="text-white  w-[440px] rounded-lg flex  flex-col gap-1 p-4"
            style={{ backgroundColor: "#262626" }}
          >
            <div className="border-b-2 border-b-solid border-b-zinc-500 flex justify-center items-center relative p-4">
              <h1>New Message</h1>
              <span
                className="text-white absolute top-4 right-0 cursor-pointer"
                onClick={handleClose}
              >
                <CloseIcon />
              </span>
            </div>
            <div className="border-b-2 border-b-solid border-b-zinc-500 flex  gap-2 p-1">
              <label>To:</label>
              <input
                type="text"
                placeholder="search"
                className="bg-transparent outline-none focus:border-none placeholder:pl-2"
              />
            </div>
            <p>Suggested</p>
            <Stack
              spacing={1}
              marginTop={"10px"}
              width={"auto"}
              style={{
                maxHeight: "180px",
                overflowY: "auto",
              }}
            >
              {MessageData.map((sender, index) => {
                return (
                  <MessageCard
                    key={index}
                    senderProfile={sender.profile}
                    senderUserName={sender.name}
                    inMessageModel={open}
                  />
                );
              })}
            </Stack>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MessageModal;
