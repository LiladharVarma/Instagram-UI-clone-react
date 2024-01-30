
import React from "react" ;
import { Avatar } from "@mui/material"; 
import CloseIcon from "@mui/icons-material/Close";

function SearchCard({searchProfilePhoto , searchName , inNotification}){

    return(
        <div className=" relative flex justify-start items-center gap-2 p-2 hover:bg-neutral-800">
            <div>
                <Avatar src= {searchProfilePhoto} />
            </div>
            <div>
                <span className="font-bold">{searchName}</span>{inNotification && <span> liked your story</span>}
            </div>
           {!inNotification &&  <span className="absolute right-2">
                <CloseIcon />
            </span>}
        </div>
    );
}

export default SearchCard ; 