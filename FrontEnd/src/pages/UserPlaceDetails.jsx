import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import PlaceDetails from "./PlaceDetails";

export default function UserPlaceDetails() {
  return (
    <div className="primary-bg min-h-screen primary-text">
      <NavBar />
      <div className="flex">
        <div className="hidden md:block">
          <SideBar />
        </div>
        <div className="flex justify-center w-full">
          <PlaceDetails />
        </div>
      </div>
    </div>
  );
}
