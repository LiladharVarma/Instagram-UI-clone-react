import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import media from "./icon/media.png";
import CloseIcon from "@mui/icons-material/Close";

import Button from "@mui/material/Button";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function CreatePageModal({ status }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(status);
  }, [status]);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className=" bg-transparent text-white h-full w-full flex flex-wrap justify-center items-center">
        <div
          className="text-white relative w-[350px] h-[350px] rounded-lg flex justify-center items-center flex-col gap-1 p-4 "
          style={{ backgroundColor: "#262626" }}
        >
          <div className="w-full flex flex-wrap justify-center items-center absolute top-0 border-b-2 border-b-zinc-600 p-2">
            <h1>Create New Post</h1>
            <span
              className="text-white absolute top-2 right-1 cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </span>
          </div>
          <div className="w-24 h-24 ">
            <img src={media} alt="media -icon" className="object-contain" />
          </div>
          <div className="text-lg m-2">
            <h2>Drag photos and videos here</h2>
          </div>
          <Button
            component="label"
            variant="contained"
            style={{ textTransform: "none" }}
          >
            Select From Computer
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CreatePageModal;
