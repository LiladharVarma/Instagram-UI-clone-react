import React from "react";

import SuggestedUsersHeader from "./SuggestedUserHeader";
import SuggestedUser from "./SuggestedUser";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function SuggestedUsers() {
  const year = new Date().getFullYear();

  return (
    <>
      <Stack spacing={2} marginTop={1}>
        <SuggestedUsersHeader />
        <div className="flex justify-between items-center">
          <p>Suggested For You </p>
          <p>See All</p>
        </div>
        <SuggestedUser
          name="James Gosling"
          followers="921"
          image="https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg"
        />
        <SuggestedUser
          name="Scarlet Witch"
          followers="100k"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
        />
        <SuggestedUser
          name="Emilia Clark"
          followers="170k"
          image="https://assets.vogue.com/photos/5dc47f17c891240008ce571d/1:1/w_1644,h_1644,c_limit/emilia_clarke_last_christmas2.jpg"
        />

        <div>
          <p>
            {year} built by
            <Link
              to="https://github.com/LiladharVarma"
              target="blank"
              className="text-blue-400  hover:text-white cursor-pointer"
            >
              Liladhar Varma
            </Link>
          </p>
        </div>
      </Stack>
    </>
  );
}

export default SuggestedUsers;
