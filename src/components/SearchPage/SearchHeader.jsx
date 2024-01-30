import React from "react";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

function SearchHeader() {
  return (
    <div>
      <Stack spacing={3} marginTop={2} marginBottom={2}>
        <div
          className="pl-4 
       "
        >
          <h1 className="text-2xl font-bold">Search</h1>
        </div>
        <div className="pl-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-neutral-800 outline-none w-[21.5rem] rounded-lg p-2"
          />
        </div>
      </Stack>
      <Divider
        orientation="horizontal"
        style={{ backgroundColor: "#262626", borderWidth: "1.5px" }}
      />
    </div>
  );
}

export default SearchHeader;
