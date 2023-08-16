import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Settings from "./Pages/Settings";
import Analytics from "./Pages/Analytics";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/Analytics" exact element={<Analytics />} />
          <Route path="/settings" exact element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
