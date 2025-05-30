import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsForOwner from "../components/CardsForOwner";
import { addmyplaces } from "../utils/Store/actionCreaters";
import dataService from "../services/dataService";
import addProjectIcon from "../assets/addProjectIcon.svg";
import SuccessMSG from "../components/SuccessMSG";
import ErrorAlert from "../components/ErrorAllert";
import { PAMENT_PERSENTAGE } from "../utils/pamentPresentage";

export default function MyBordings() {
  const dispatch = useDispatch();
  const MyCards = useSelector((state) => state.myPlaces);
  const [error, setError] = React.useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const dark = useSelector((state) => state.darkMode);
  const unpaidPlaces = useSelector((state) => state.unpaidplaces);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const fetchPlaces = async () => {
    const result = await dataService.getMyPlaces();
    if (result.success) {
      dispatch(addmyplaces(result.data));
    } else {
      setError(result.message);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, [dispatch]);

  const paymentAmount = unpaidPlaces.reduce(
    (total, { price }) => total + price * PAMENT_PERSENTAGE,
    0
  );

  const [displayCards, setDisplayCards] = useState([]);
  useEffect(() => {
    const addBording = {
      thumbnailUrl: addProjectIcon,
      _id: "addBording",
    };

    const payDiv = {
      thumbnailUrl: addProjectIcon,
      _id: "payNow",
      paymentAmount,
    };

    if (paymentAmount === 0) {
      setDisplayCards([...MyCards, addBording]);
    } else {
      setDisplayCards([...MyCards, addBording, payDiv]);
    }
  }, [MyCards, paymentAmount]);
  // const displayCards = [...MyCards, addBording];

  return (
    <div className="primary-bg max-w-screen pt-10">
      {successMsg && (
        <div className="flex items-center justify-center px-4 py-2 b  sticky top-0 z-50">
          <SuccessMSG message={successMsg} />
        </div>
      )}
      {errorMsg && (
        <div className="flex items-center justify-center px-4 py-2 b  sticky top-0 z-50">
          <ErrorAlert message={errorMsg} />
        </div>
      )}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 primary-bg min-h-screen">
        {displayCards.map((card) => (
          <div key={card._id}>
            <CardsForOwner
              {...card}
              setErrorMsg={setErrorMsg}
              setSuccessMsg={setSuccessMsg}
              refreshPlaces={fetchPlaces}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
