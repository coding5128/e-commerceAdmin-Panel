import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
export default function Users() {
  return (
    <div>
      <div>
        <Navbar />
        <Box height={60} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Users</h1>
          </Box>
        </Box>
      </div>
    </div>
  );
}
