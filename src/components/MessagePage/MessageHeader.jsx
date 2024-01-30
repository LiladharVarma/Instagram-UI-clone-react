import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import MessageModal from "./MessageModal";

function MessageHeader({ userName }) {
  const [openModal, setModal] = useState(false);

  function handleClick() {
    setModal((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <div className=" text-white flex  justify-between  items-center w-96 h-24 max-sm:w-auto md:w-auto lg:w-auto 3xl:w-auto">
        <h1 className="pl-8 text-2xl max-sm:hidden md:hidden  3xl:block  lg:hidden 4xl:block ">
          {userName}
        </h1>
        <BiEdit
          style={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={handleClick}
        />
      </div>
      <div className=" text-white flex  justify-around  items-center w-96 max-sm:hidden md:hidden lg:hidden 3xl:block 4xl:block">
        <strong className="pl-8">Messages</strong>
        {/* <p className="text-zinc-700">Requests</p> */}
      </div>
      {openModal && <MessageModal status={openModal} />}
    </div>
  );
}

export default MessageHeader;
