import React from "react";
import styled from "styled-components";

const MediaQuery = () => {
  return (
    <div>
      <h1>Реагирующий на размер экрана компонент</h1>
      <ResponsiveText>
        Далеко-далеко за словесными горами, в стране гласных и согласных живут
        рыбные тексты. Осталось, языком, ему снова имеет которой на берегу
        курсивных рукопись рукописи злых вскоре, свою за переулка деревни
        проектах моей толку взгляд.
      </ResponsiveText>
    </div>
  );
};

export default MediaQuery;

const ResponsiveText = styled.p`
  font-size: 16px;

  @media (max-width: 700px) {
    font-size: 14px;
    color: coral;
  }

  @media (max-width: 450px) {
    font-size: 12px;
    color: yellow;
  }
`;
