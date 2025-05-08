import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import CardContainer from "../components/CardContainer";
import { FavoriteProvider } from "../services/FavoriteContext";
export default function Home() {
  return (
    <div className="primary-bg min-h-screen">
      <FavoriteProvider>
        <NavBar />
        <div className="flex">
          {/* Sidebar hidden on small screens */}
          <div className="hidden md:block">
            <SideBar />
          </div>
          {/* Cards take full width on small screens */}
          <div className="flex-1">
            <CardContainer />
          </div>
        </div>
      </FavoriteProvider>
    </div>
  );
}
