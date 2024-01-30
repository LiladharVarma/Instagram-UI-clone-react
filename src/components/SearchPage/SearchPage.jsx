import React from "react";
import SearchHeader from "./SearchHeader";
import { Stack } from "@mui/material";
import SearchCard from "./SearchCard";
import MessageData from "../MessagePage/MessageData";

function SearchPage() {
  return (
    <div
      className=" absolute left-60 text-white w-96 h-full max-sm:left-0 max-sm:h-auto max-sm:w-full md:left-20 3xl:left-60 4xl:left-[210px] border-r-2 border-r-zinc-800 border-solid "
    >
      <SearchHeader />

      <div className=" flex justify-between items-center pl-2 pr-2 mt-3">
        <h1 className="font-bold text-lg">Recent</h1>
        <h3 className="text-sky-500">Clear all</h3>
      </div>
      <Stack spacing={1} marginTop={2}>
        {MessageData.map((user) => {
          return (
            <SearchCard
              key={user.id}
              searchProfilePhoto={user.profile}
              searchName={user.name}
            />
          );
        })}
      </Stack>
    </div>
  );
}

export default SearchPage;
