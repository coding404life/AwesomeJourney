import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Wrapper className={` ${props.className}`} style={props.style}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white;
`;
export default Card;
