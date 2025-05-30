import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa"; // Correct icon
import { useNavigate } from "react-router-dom";
import dataService from "../services/dataService";
import paymentService from "../services/paymentService";
import PayHere from "./PayHere";

export default function CardsForOwner({
  thumbnailUrl,
  type,
  forWhome,
  availability,
  price,
  gate,
  _id,
  setErrorMsg,
  setSuccessMsg,
  refreshPlaces,
  paid,
  paymentAmount,
}) {
  const navigate = useNavigate();

  if (_id === "addBording") {
    return (
      <div className="relative w-full flex flex-col gap-2 cursor-pointer">
        <div className="relative">
          <img
            src={thumbnailUrl}
            alt="thumbnailUrl"
            className="w-full h-48 rounded-lg object-cover"
            onClick={() => navigate(`/AddBordingPlace`)}
          />
        </div>
      </div>
    );
  }

  const [payURL, setPayURL] = useState(null);
  const [showPayhere, setShowPayhere] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayNow = async () => {
    setIsProcessing(true);
    const result = await paymentService.payWithBackend({
      paymentAmount,
      customerEmail: "customerEmail@mail.com",
      customerName: "customerName",
      orderId: "orderId",
    });

    setIsProcessing(false);

    if (result.success) {
      setPayURL(result.data.payHereUrl);
      setShowPayhere(true);
      setErrorMsg(""); // Reset parent error msg
      setSuccessMsg("Payment successfully!"); // Set parent success msg
    } else {
      setSuccessMsg("");
      setErrorMsg(result.message);
    }
  };

  // if (_id === "payNow") {
  //   return (
  //     <div className="relative w-full flex flex-col gap-2 cursor-pointer transition-transform hover:scale-105">
  //       <div
  //         className="relative border-2 border-yellow-400 rounded-lg overflow-hidden shadow-lg bg-yellow-50"
  //         onClick={() => navigate("/PaymentPage")}
  //       >
  //         <img
  //           src={thumbnailUrl}
  //           alt="Pay Now"
  //           className="w-full h-48 object-cover"
  //         />
  //         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
  //           <h2 className="text-lg font-semibold">You have unpaid listings</h2>
  //           <p className="text-sm">Total to pay:</p>
  //           <h1 className="text-2xl font-bold mt-1">
  //             Rs. {paymentAmount.toFixed(2)}
  //           </h1>
  //           <button className="mt-3 bg-yellow-400 text-black font-semibold px-4 py-1 rounded hover:bg-yellow-300 transition">
  //             Pay Now
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (_id === "payNow") {
    return (
      <div className="relative w-full flex flex-col gap-2 cursor-pointer">
        <div
          className="border-2 border-yellow-400 rounded-lg overflow-hidden shadow-lg bg-yellow-50"
          onClick={handlePayNow}
        >
          <img src={thumbnailUrl} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
            <h2 className="text-lg font-semibold">You have unpaid listings</h2>
            <h1 className="text-2xl font-bold mt-1">
              Rs. {paymentAmount.toFixed(2)}
            </h1>
            <button className="mt-3 bg-yellow-400 text-black px-4 py-1 rounded">
              Pay Now
            </button>
          </div>
        </div>

        {/* PayHere Form Modal */}
        {showPayhere && (
          <PayHere
            paymentAmount={paymentAmount}
            onClose={() => setShowPayhere(false)}
            onPay={handlePayNow}
            isProcessing={isProcessing}
            setErrorMsg={setErrorMsg}
            setSuccessMsg={setSuccessMsg}
          />
        )}
      </div>
    );
  }

  async function deleteClicked() {
    const result = await dataService.DeletePlace({
      _id,
    });

    if (result.success) {
      setErrorMsg("");
      setSuccessMsg(result.data.message);
      refreshPlaces();
    } else {
      setSuccessMsg("");
      setErrorMsg(result.message);
    }
  }

  return (
    <div className="relative w-full flex flex-col gap-2 cursor-pointer">
      <div className="relative">
        <img
          src={thumbnailUrl}
          alt="thumbnailUrl"
          className="w-full h-48 rounded-lg object-cover"
          onClick={() => navigate(`/OwnerPlace/${_id}`)}
        />
        <button
          onClick={deleteClicked}
          className="absolute top-2 right-2 text-xl primary-bg rounded-full p-1 shadow-md hover:scale-110 transition"
        >
          <FaTrash className="hart-color" />
        </button>
      </div>
      <div className="flex flex-col gap-1 p-2 primary-text rounded-md shadow-sm">
        <h3 className="text-sm font-semibold primary-text">
          Type: <span className="font-normal">{type}</span>
        </h3>
        <div className="grid grid-cols-2 gap-1 text-xs primary-text">
          <p>
            For: <span className="font-medium">{forWhome}</span>
          </p>
          <p>
            Availability: <span className="font-medium">{availability}</span>
          </p>
          <p>
            Price: <span className="font-medium">Rs. {price}</span>
          </p>
          <p>
            gate: <span className="font-medium">{gate} m</span>
          </p>
          <p
            className={
              paid
                ? "text-blue-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {paid ? "Paid" : "Unpaid"}
          </p>
        </div>
      </div>
    </div>
  );
}
