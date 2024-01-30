import React, { useState, useEffect } from "react";
import FeedPost from "./FeedPost";
// import myImage from "./images/my-image.jpeg"
import FeedData from "./FeedData";

import Typography from "@mui/material/Typography";

import Skeleton from "@mui/material/Skeleton";

function FeedPosts() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function CreatePost(user) {
    return (
      <FeedPost
        profilePhoto={user.image}
        postUrl={user.image}
        userName={user.userName}
        caption={user.caption}
      />
    );
  }

  return (
    <>
      {Loading ? (
        <div className="flex flex-col justify-center items-center gap-10 h-auto">
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <div>
              <div className="flex gap-4 items-center justify-center cursor-pointer">
                <Skeleton
                  variant="circular"
                  width={40}
                  height={40}
                  animation="wave"
                  style={{ backgroundColor: "#333" }}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  style={{ backgroundColor: "#333" }}
                >
                  {" "}
                </Typography>
                <div className="relative w-full">
                  <Skeleton variant="text" width="70%" animation="wave" />
                  <div className="absolute top-1 right-2">
                    <Skeleton
                      variant="circular"
                      width={20}
                      height={20}
                      animation="wave"
                      style={{ backgroundColor: "#333" }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-96 h-96 mt-3 mb-3 rounded-4">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  animation="wave"
                  style={{ borderRadius: "8px", backgroundColor: "#333" }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-10 h-auto">
          {FeedData.map(CreatePost)}
        </div>
      )}
    </>
  );
}

export default FeedPosts;
