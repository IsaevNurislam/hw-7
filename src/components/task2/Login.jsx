import React from "react";
import styled from "styled-components";

const Login = ({
  type,
  placeholder,
  error1,
  setInputsValue,
  inputsValue,
  error,
  setError,
}) => {
  const inputHandler = (e) => {
    setInputsValue(e.target.value);
    if (type === "text") {
      if (inputsValue.length < 5) {
        setError("Напишите больше чем 5 слов");
      }
      else if (inputsValue === ""){
        setError(error1);
      } else {
        setError("");
      }
    }
    if (type === "password") {
      if (inputsValue.length < 8) {
        setError("Напишите больше чем 8 слов");
      }else if (inputsValue === ""){
        setError(error1);
      } else {
        setError("");
      }
    }
  };

  return (
    <div>
      <Inputs
        type={type ? type : "text"}
        value={inputsValue}
        placeholder={placeholder}
        onChange={inputHandler}
      />
      <Ptag>{error}</Ptag>
    </div>
  );
};

export default Login;

const Inputs = styled.input`
  width: 450px;
  height: 52px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(217, 217, 217, 0);
  &:focus {
    border: 5px solid blue;
  }
  padding-left: 17px;
`;

const Ptag = styled.p`
  color: red;
  font-size: 20px;
  margin-top: 12px;
`;
