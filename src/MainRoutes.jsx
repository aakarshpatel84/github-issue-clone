import React from "react";
import Filter from "./Components/Pages/Filter";
import Issues from "./Components/Pages/Issues";
import Footer from "./Components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function MainRoutes() {
  return (
    <h1 className="bg-[#0d1117]">
      <Navbar />
      <Filter />
      <Issues />
      <Footer />
    </h1>
  );
}

export default MainRoutes;
