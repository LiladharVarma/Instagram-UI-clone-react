import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

import Skeleton from "@mui/material/Skeleton";
import myImage1 from "./profileImages/my-image.jpeg";
import myImage2 from "./profileImages/myImage2.jpg";
import myImage3 from "./profileImages/IMG_7327.jpg";

function ProfilePosts({ profilePic }) {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="w-auto grid grid-cols-3 3xl:ml-40 max-sm:grid-cols-1 md:ml-0 gap-2 mt-8">
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <Skeleton
              key={index} 
              variant="rounded"
              width={320}
              height={320}
              animation="wave"
              style={{ backgroundColor: "#333" }}
            />
          ))}
        </div>
      ) : (
        <div className="w-auto grid grid-cols-3 3xl:ml-40 max-sm:grid-cols-1 md:ml-0 gap-2 mt-8">
          <ProfilePost img={myImage2} profile={profilePic} />
          <ProfilePost img={myImage3} profile={profilePic} />
          <ProfilePost img={myImage1} profile={profilePic} />
        </div>
      )}
    </>
  );
}

export default ProfilePosts;
