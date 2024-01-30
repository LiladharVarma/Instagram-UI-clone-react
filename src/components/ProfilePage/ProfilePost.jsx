import React, { useState } from "react";
import {
  CommentLogo,
  UnlikeLogo,
} from "../assets/constants";

import Modal from "@mui/material/Modal";
import { Avatar, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Comment from "./Comment";
import PostFooter from "../FeedPosts/PostFooter";
import CloseIcon from "@mui/icons-material/Close";


function ProfilePost({ img, profile }) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  function handleHover() {
    setHover(true);
    console.log("HOverd");
  }

  function handleOut() {
    setHover(false);
    console.log("HOvered Out");
  }

  function handleClick() {
    setOpen(true);
    console.log(open);
    console.log("picture Clicked");
  }
  const handleClose = () => setOpen(false);
  return (
    <>
      <div
        className="w-auto h-auto cursor-pointer overflow-hidden  relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleOut}
      >
        <img
          className="w-80 h-80 object-cover"
          src={img}
          alt="userPosts from Profile "
        />

        {hover && (
          <div
            className="w-80 h-80 object-cover absolute top-0  flex justify-center items-center inset-0 box-shadow-inset  transition-opacity duration-300 ease gap-2 "
            onClick={handleClick}
          >
            <div className="flex gap-2">
              <UnlikeLogo />
              <p>72</p>
            </div>
            <div className="flex gap-2">
              <CommentLogo />
              <p>24</p>
            </div>
          </div>
        )}

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
          
            <div className=" w-[730px] 3xl:left-[300px] 3xl:top-[70px] h-auto flex   md:left-[15%] md:top-[13%] 2xl:left-[15%]  ">
              <img
                className="object-cover w-[330px] max-w-full h-auto"
                src={img}
                alt="Image in modal"
              />

              {/* sm:bg-yellow-300  lg:bg-sky-400 max-sm:bg-red-500 md:bg-orange-400 3xl:bg-pink-500 2xl:bg-lime-500 */}
              <div className="text-white pl-4 bg-black w-full max-sm:hidden ">
                <Stack spacing={3}>
                  <div className="flex gap-2 items-center justify-start pb-2 border-b-2 border-solid border-zinc-700">
                    <Avatar
                      src={profile}
                      alt="profile page photo"
                      
                    />
                    <p>@bajirao1292</p>
                  </div>
                  <Divider variant="middle" component="div" />
                  <div className="flex flex-col gap-2  items-start pb-2  ">
                    <div className="inline-flex items-center ">
                      <Avatar src={profile} alt="profile page photo" />
                      <p className="inline">@bajirao1292</p>
                    </div>
                  </div>
                  <Stack
                    spacing={2}
                    style={{
                      maxHeight: "180px",
                      overflowY: "auto",
                    }}
                  >
                    <Comment
                      name="James Gosling"
                      userAvatar="https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg"
                      text="Nice Pic Bro"
                    />
                    <Comment
                      name="Scarlet Witch"
                      userAvatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                      text="🔥🔥"
                    />
                    <Comment
                      name="Emilia Clark"
                      userAvatar="https://assets.vogue.com/photos/5dc47f17c891240008ce571d/1:1/w_1644,h_1644,c_limit/emilia_clarke_last_christmas2.jpg"
                      text="❤️❤️"
                    />
                  </Stack>
                  <div className="relative ">
                    <PostFooter isProfilePage={true} />
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ProfilePost;
