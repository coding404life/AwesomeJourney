import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Input } from "../../shared";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

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
    title: "shit state building",
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
  const [isLoading, setIsLoading] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [identifiedPlace, setFormData]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find the place!</h2>
        </Card>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title"
        onInput={inputHandler}
        initalValue={formState.inputs.title.value}
        initalValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a description (at least 5 charachter). "
        onInput={inputHandler}
        initalValue={formState.inputs.description.value}
        initalValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
