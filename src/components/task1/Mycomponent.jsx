import React from "react";
import styled from "styled-components";

const MyComponent = ({ $error }) => {
  return (
    <StyledComponent $error={$error}>
      <h1>Заголовок</h1>
      <p>
        Далеко-далеко за словесными горами в стране, гласных и согласных живут
        рыбные тексты. Строчка напоивший толку предложения предупредила запятых
        парадигматическая, о которое своего, коварный, пустился рыбными
        заголовок наш снова lorem заглавных которой однажды.
      </p>
    </StyledComponent>
  );
};

export default MyComponent;

const StyledComponent = styled.div`
  color: ${(props) => (props.$error ? "red" : "black")};
  font-weight: ${(props) => (props.$error ? "bold" : "normal")};
`;
