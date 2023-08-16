import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import ProductsList from "./Products/ProductsList";
import "../Dash.css";
export default function Products() {
  return (
    <div>
      <div className="bgcolor">
        <Navbar />
        <Box height={60} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductsList />
          </Box>
        </Box>
      </div>
    </div>
  );
}
