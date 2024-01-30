import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

function Card({ imgUrl, id }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
    console.log(open);
    console.log("picture Clicked");
  }
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full h-full ">
      <div className="w-full h-auto mb-1 ">
        <img
          className="object-cover w-full block max-w-full h-auto"
          src={imgUrl}
          alt="explore Images"
          onClick={handleClick}
          key={id}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="relative flex items-center justify-center w-full h-full bg-transparent ">
          <span
            className="text-white absolute top-0 right-0 cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon />
          </span>

          <div className=" w-[full]  3xl:left-[300px] 3xl:top-[70px] h-auto flex   md:left-[15%] md:top-[13%] 2xl:left-[15%]  ">
            <img
              className="object-cover w-[330px] max-w-full h-auto"
              src={imgUrl}
              alt="explore Images"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Card;
