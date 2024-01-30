import React from "react";
import NotificationHeader from "./NotificationHeader";
import { Stack } from "@mui/material";
import SearchCard from "../SearchPage/SearchCard";
import notificationData from "./notificationData";

function NotificationsPage() {
  return (
    <>
      <div className=" absolute left-60 text-white w-96 h-full max-sm:left-0 max-sm:h-auto max-sm:w-full md:left-20 3xl:left-60 4xl:left-[210px] border-r-2 border-r-zinc-800 border-solid ">
        <NotificationHeader />

        <div className=" flex justify-between items-center pl-2 pr-2 mt-3">
          <h1 className="font-bold text-lg">Yesterday</h1>
       
        </div>
        <Stack spacing={1} marginTop={2}>
            {notificationData.map((user , index)=>{
                return(
                    <SearchCard
                inNotification={true}
                searchProfilePhoto = {user.profile}
                searchName = {user.name}
                 />
                )
            })}
        </Stack>
      </div>
    </>
  );
}

export default NotificationsPage;
