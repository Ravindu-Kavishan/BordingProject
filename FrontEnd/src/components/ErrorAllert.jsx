import React from "react";
import { AlertCircle } from "lucide-react";

export default function ErrorAlert({ message }) {
  return (
    <div className="flex items-center gap-3 m-3 p-4 bg-red-100 hart-color rounded-lg shadow-md border custom-border">
      <AlertCircle className="hart-color w-6 h-6" />
      <h2 className="font-medium text-md">{message}</h2>
    </div>
  );
}
