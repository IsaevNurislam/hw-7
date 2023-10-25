import React from "react";
import Styled from "styled-components";

const Button = () => {
  return <ButtonStyle>Click me</ButtonStyle>;
};

export default Button;

const ButtonStyle = Styled.button`
    width: 100px;
    height: 40px;
    border-radius:10px;
    &:hover{
    color:white;
    background-color:green;
    border:none;
    }
    &:active{
        color:white;
        background-color:coral;
        border:none;
    }
    `;
