import React from "react";
// import PostCard from "./PostCard";
import FeedPosts from "../FeedPosts/FeedPosts";
// import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
// import { Feed } from "@mui/icons-material";
import SuggestedUsers from "../SuggestedUsers/SuggestedUsers";

function HomePage() {
  return (
    <>
      <div className=" text-white  relative left-60 w-[81%] flex 3xl:left-60 3xl:w-[81%] 2xl:left-20 2xl:w-[92%] md:left-20 md:w-[91%] max-sm:w-full max-sm:left-[0px] max-sm:h-max ">
        <Box flex={2} width={"auto"}>
          {/* <div className="h-[5%] border-solid border-2 border-black mb-2">
        <span>This is Story</span>
        <span>This is Story</span>
        <span>This is Story</span>
        <span>This is Story</span>
      </div> */}
          <FeedPosts />
        </Box>

        <div className="hidden 2xl:hidden 3xl:block lg:block flex-2  h-screen  left-12 text-white  w-[30%]">
          <SuggestedUsers />
        </div>
      </div>
    </>
  );
}

export default HomePage;
