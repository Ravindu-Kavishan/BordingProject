import React from "react";

export default function Card({ thumbnail, title, channel, views, time }) {
  return (
    <div className="w-full sm:w-[300px] flex flex-col gap-2 cursor-pointer">
      <img
        src={thumbnail}
        alt="Thumbnail"
        className="w-full h-48 rounded-lg object-cover"
      />
      <div className="flex gap-3 mt-2">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold primary-text">{title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{channel}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {views} • {time}
          </p>
        </div>
      </div>
    </div>
  );
}
