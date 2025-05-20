
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { addmyplaces } from "../utils/Store/actionCreaters"; 


export default function MyBordings() {
  const dispatch = useDispatch();

  const displayCards = useSelector((state) => state.myPlaces);

  // dummy data (load once)
  useEffect(() => {
    const cards = [
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id: "A",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id: "B",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id: "Ab",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id: "Ba",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id: "Ac",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        title: "Another Great Room",
        channel: "StayZone",
        views: "850K views",
        time: "1 week ago",
        id: "Bc",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        title: "Sample Video Title 1",
        channel: "BoardingLife",
        views: "1.2M views",
        time: "2 days ago",
        id: "Ad",
      }
    ];

    dispatch(addmyplaces(cards));
  }, [dispatch]);
  

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 primary-bg">
      {displayCards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

