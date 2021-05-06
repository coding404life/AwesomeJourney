import React from "react";
import styled from "styled-components";
import { Button, Card } from "../../shared";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <Wrapper className="center">
        <Card>
          <h2>No places found. maybe create one?</h2>
          <Button to="places/new">Share Place</Button>
        </Card>
      </Wrapper>
    );
  }
  return (
    <UL>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </UL>
  );
};

const Wrapper = styled.div`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UL = styled.ul`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
`;

export default PlaceList;
