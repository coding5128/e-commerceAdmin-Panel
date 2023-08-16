import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import List from "../Settings/List";
export default function Settings() {
  return (
    <div>
      <div className="bgcolor">
        <Navbar />
        <Box height={60} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <List />
          </Box>
        </Box>
      </div>
    </div>
  );
}
