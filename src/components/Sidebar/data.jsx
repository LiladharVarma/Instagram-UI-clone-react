// import { InstagramLogo } from "../assets/constants";

import {
  SearchLogo,
  ReelsLogo,
  MessagesLogo,
  NotificationsLogo,
  CreatePostLogo,
  CommentLogo,
} from "../assets/constants";
import { IoMdHome } from "react-icons/io";
import { Avatar } from "@mui/material";
import myImage from "../FeedPosts/Feedimages/my-image.jpeg"


const data = [
   
    {
        id:0 , 
        icon : <IoMdHome size={30} color="white" />,
        link : "/",
        text : "Home" ,
        isClicked : false,
    },
    {
        id:1 , 
        icon : <SearchLogo /> , 
        link : "/search",
        text : "Search" ,
        isClicked : false,
    },
    {
        id:2 , 
        icon : <ReelsLogo/> , 
        link : "/explore",
        text : "Explore" ,
        isClicked : false,
    },
    {
        id:3 , 
        icon : <MessagesLogo  /> , 
        link : "/message",
        text : "Message" ,
        isClicked : false,
    },
    {
        id:4 , 
        icon : <NotificationsLogo/> , 
        link : "/notification",
        text : "Notifications" ,
        isClicked : false,
    },
    {
        id:5 , 
        icon : <CreatePostLogo/> , 
        link : "/create",
        text : "Create" ,
        isClicked : false,
    },
    
    {
        id:6 , 
        link : `/Bajirao1292`,
        icon : <Avatar src={myImage} alt="myProfilePhoto" /> , 
        text : "Profile" ,
        isClicked : false,
    },
    // {
    //     id:6 , 
    //     link : `/auth`,
    //     icon : <ProfileLogo/> , 
    //     text : "Logout" 
    // },
]

export default data ; 