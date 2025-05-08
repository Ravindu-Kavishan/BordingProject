import React from "react";
import Card from "./Card";
import { useFavorites } from "../services/FavoriteContext";


export default function CardContainer() {
  const { favorites, showOnlyFavorites } = useFavorites();
  const cards = [
    {
      thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
      title: "Sample Video Title 1",
      channel: "BoardingLife",
      views: "1.2M views",
      time: "2 days ago",
      id:"A"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      title: "Another Great Room",
      channel: "StayZone",
      views: "850K views",
      time: "1 week ago",
      id:"B"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id:"Ab"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id:"Ba"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id:"Ac"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id:"Bc"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id:"Ad"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id:"Bd"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id:"Ae"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id:"Be"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id:"Af"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id:"Bf"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id:"Ag"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id:"Bi"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id:"Ah"
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id:"Bj"
      },
      {
      thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
      title: "Sample Video Title 1",
      channel: "BoardingLife",
      views: "1.2M views",
      time: "2 days ago",
      id:"Ai"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      title: "Another Great Room",
      channel: "StayZone",
      views: "850K views",
      time: "1 week ago",
      id:"Bh"
    },
  ];

  const displayCards = showOnlyFavorites ? favorites : cards;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 primary-bg">
      {displayCards.map(({thumbnail, title, channel, views, time,id}, index) => (
        <Card key={id} thumbnail={thumbnail} title={title} channel={channel} views={views} time={time} id={id}/>
      ))}
    </div>
  );
}
