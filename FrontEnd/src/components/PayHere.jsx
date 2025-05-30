import React from "react";
import { FaTimes } from "react-icons/fa";

export default function PayHere({
  paymentAmount,
  onClose,
  onPay,
  isProcessing,
  setErrorMsg,
  setSuccessMsg,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-96 shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Payment Summary</h2>
        <p className="text-lg mb-4 text-center">
          You have unpaid listings. <br />
          Total Payment:{" "}
          <span className="text-green-600 font-semibold">
            Rs. {paymentAmount.toFixed(2)}
          </span>
        </p>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded mt-2 transition duration-200"
          onClick={onPay}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>

        <button
          className="w-full mt-2 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-300"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
