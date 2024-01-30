import React, { useState } from "react";
import {
  NotificationsLogo,
  CommentLogo,
  UnlikeLogo,
} from "../assets/constants";
import { BookmarkLogo } from "../assets/constants";


const PostFooter = ({ profileName, isProfilePage, photoCaption }) => {
  const [likes, setLikes] = useState(1000);
  const [liked, setLiked] = useState(false);

  function handleLikes() {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }

  return (
    <>
      <div className="border-solid border-2 border-zinc-600 border-t-0 border-l-0 border-r-0">
        <div className="flex gap-2 cursor-pointer">
          <div onClick={handleLikes}>
            {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
          </div>
          <div>
            <CommentLogo />
          </div>
          <div>
            <BookmarkLogo />
          </div>
        </div>
        <div>
          <p>{likes} likes</p>
        </div>
        {!isProfilePage && (
          <div className="flex gap-2">
            <span className="font-bold">{profileName}</span>
            <span>{photoCaption}</span>
          </div>
        )}
        <div className=" text-zinc-500 cursor-pointer pb-2 relative">
          {!isProfilePage && <p>view all 20 comments</p>}
          <input
            type="text"
            placeholder="Add a comment"
            className="bg-transparent focus:outline-none"
          />
          <button className="absolute right-1 hover:text-white">Post</button>
        </div>
      </div>
    </>
  );
};

export default PostFooter;
