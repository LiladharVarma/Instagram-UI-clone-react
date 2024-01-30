import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({ profilePhoto, userName, postUrl, caption }) => {
  return (
    <>
      <div>
        <PostHeader profileName={userName} profileUrl={profilePhoto} />
        <div className="w-96 h-96 mt-3 mb-3  rounded-4 ">
          <img
            src={postUrl}
            alt="feed post"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <PostFooter profileName={userName} photoCaption={caption} />
      </div>
    </>
  );
};

export default FeedPost;
