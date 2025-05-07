// Home.jsx
import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import CardContainer from "../components/CardContainer";

export default function Home() {
  return (
    <div className="primary-bg min-h-screen">
      <NavBar />
      <div className="flex">
        <SideBar />
        <CardContainer />
      </div>
    </div>
  );
}
