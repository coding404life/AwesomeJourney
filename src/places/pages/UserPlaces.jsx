import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "empite state building",
    description: "one the most famous sky scraper",
    imageUrl: "https://picsum.photos/400/200",
    address: "20 w",
    location: {
      lat: 30.0444,
      lng: 31.2357,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "empite state building",
    description: "one the most famous sky scraper",
    imageUrl: "https://picsum.photos/400/200",
    address: "20 w",
    location: {
      lat: 30.12312312,
      lng: -10.1231232,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
