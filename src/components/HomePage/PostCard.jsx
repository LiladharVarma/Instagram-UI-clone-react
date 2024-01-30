import React from "react";




function PostCard(){

    return(
    <>
    <div className="border-solid border-2 border-green-600 h-full flex flex-col gap-3 w-1/2">
   
   <div className="border-solid border-zinc-400 border-2 h-3/4 w-full overflow-hidden relative">
      <img
        src={myImage}
        alt="post"
        className="object-cover w-full h-full "
      />
    </div>

    </div>

    </>
    );
}

export default PostCard ; 