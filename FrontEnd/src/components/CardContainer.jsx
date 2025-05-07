import React from "react";
import Card from "./Card";

export default function CardContainer() {
  // Sample static data – replace this with fetched data
  const cards = [
    {
      thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
      title: "Sample Video Title 1",
      channel: "BoardingLife",
      views: "1.2M views",
      time: "2 days ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      title: "Another Great Room",
      channel: "StayZone",
      views: "850K views",
      time: "1 week ago",
    },
    {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
      },
      {
      thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
      title: "Sample Video Title 1",
      channel: "BoardingLife",
      views: "1.2M views",
      time: "2 days ago",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      title: "Another Great Room",
      channel: "StayZone",
      views: "850K views",
      time: "1 week ago",
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 primary-bg">
      {cards.map(({thumbnail, title, channel, views, time}, index) => (
        <Card key={index} thumbnail={thumbnail} title={title} channel={channel} views={views} time={time} />
      ))}
    </div>
  );
}
