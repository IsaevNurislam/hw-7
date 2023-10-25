import React from "react";
import styled from "styled-components";


const Card = (props) => {
  return <CardChangeColor {...props} />;
};

export default Card;

const CardChangeColor = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.$backgroundсolor};
`;