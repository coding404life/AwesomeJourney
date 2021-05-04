import React from "react";
import { useParams } from "react-router";
import { Button, Input } from "../../shared";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

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

const UpdatePlace = () => {
  const { placeId } = useParams();

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find the place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a description (at least 5 charachter). "
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
