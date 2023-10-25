import React from "react";
import Child from "./Child";
import styled from "styled-components";

const Parent = () => {
  return (
    <div>
      <h1>Родительский компонент</h1>
      <ChildWrapper>
        <Child />
      </ChildWrapper>
    </div>
  );
};

export default Parent;

const ChildWrapper = styled.div`
  color: red;
  font-size: 18px;
  font-weight: bold;
`;
