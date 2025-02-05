import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header onSearch={setSearchText} />
      <Outlet context={{ searchText }} />{" "}
      {/* searchText ni Outlet orqali uzatish */}
      <Footer />
    </>
  );
};

export default Layout;
