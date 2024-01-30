import React from "react";
import { Stack, Divider } from "@mui/material";

function NotificationHeader() {
  return (
    <>
      <div>
        <Stack spacing={3} marginTop={2} marginBottom={2}>
          <div
            className="pl-4">
            <h1 className="text-2xl font-bold">Notifications</h1>
          </div>
        </Stack>
        <Divider
          orientation="horizontal"
          style={{ backgroundColor: "#262626", borderWidth: "1.5px" }}
        />
      </div>
    </>
  );
}

export default NotificationHeader;
