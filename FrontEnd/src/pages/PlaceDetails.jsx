import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FavoriteProvider } from "../services/FavoriteContext";
import SideBar from "../components/SideBar";

export default function PlaceDetails() {
  const navigate = useNavigate();
  return (
    <div className="primary-bg min-h-screen">
      <FavoriteProvider>
        <NavBar />
        <div className="flex">
          <div className="hidden md:block">
            <SideBar />
          </div>
          <div className="flex-1">
            <p onClick={() => navigate("/")}>good</p>
          </div>
        </div>
      </FavoriteProvider>
    </div>
  );
}
