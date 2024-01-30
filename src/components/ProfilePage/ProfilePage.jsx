import React, { useState } from "react";

import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";

function ProfilePage() {
  const [profileImage, setProfileImage] = useState("");
  console.log(profileImage);

  function getProfile(image) {
    setProfileImage(image);
    console.log(profileImage);
  }
  return (
    <>
      <div className=" h-auto text-white  3xl:h-full md:h-[800px] lg:h-full sm:h-auto max-sm:h-[800px] 2xl:h-full  flex flex-col  items-center absolute left-60 w-[90%] md:left-20 md:w-[100%] 2xl:w-[93.7%] max-sm:left-[20px] ">
        <div className="mt-4">
          <ProfileHeader profile={getProfile} />
        </div>
        <div className="flex justify-center items-center w-[100%] ">
          <ProfileTabs />
        </div>
        <div className="flex justify-center items-center w-[100%]">
          <ProfilePosts profilePic={profileImage} />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
