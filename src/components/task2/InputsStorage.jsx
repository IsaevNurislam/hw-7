import React, { useState } from "react";
import Login from "./Login";
import styled from "styled-components";
import googlePhoto from "../../assets/icons/GoogleIcon.svg";
import image from "../../assets/images/bgImage.png";

const InputsStorage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const googleAlert = () => {
    alert("You don't have a Google account");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (login === "") {
      setLoginError("Поле не должно быть пустым");
    }
    if (password === "") {
      setPasswordError("Поле не должно быть пустым");
    } else if (login.length < 5) {
      setLoginError("Напишите больше чем 5 слов");
    } else if (password.length < 8) {
      setPasswordError("Напишите больше чем 8 слов");
    } else {
      setLoginError("");
      setPasswordError("");
      alert(`Login ${login} \nPassword ${password}`);
    }
  };

  return (
    <ContainerOfForm $image={image}>
      <Form onSubmit={formSubmitHandler}>
        <Container>
          <H2>Вход в аккаунт</H2>
          <ContainerInputs>
            <Login
              type="text"
              error={loginError}
              setError={setLoginError}
              inputsValue={login}
              setInputsValue={setLogin}
              placeholder="Login"
              error1={"Поле не должно быть пустым"}
            />
            <Login
              type="password"
              error={passwordError}
              setError={setPasswordError}
              inputsValue={password}
              setInputsValue={setPassword}
              placeholder="Password"
              error1={"Поле не должно быть пустым"}
            />
          </ContainerInputs>
          <PTag>Или</PTag>
          <GoogleTag onClick={googleAlert}>
            <img src={googlePhoto} alt="" />
            Войти через Google
          </GoogleTag>
          <ButtonSignIn
            type="submit"
            disabled={login.length < 5 || password.length < 8}
          >
            Вход
          </ButtonSignIn>
        </Container>
      </Form>
    </ContainerOfForm>
  );
};

export default InputsStorage;

const GoogleTag = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 450px;
  height: 52px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(217, 217, 217, 0);
  margin-top: 24px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 582px;
  height: 693px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const H2 = styled.h2`
  color: #1b1c1f;
  font-size: 32px;
  font-weight: 600;
  margin-top: 71px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PTag = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  font-family: "Open Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  margin-top: 24px;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const ButtonSignIn = styled.button`
  border-radius: 10px;
  background: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
  width: 450px;
  height: 52px;
  margin-top: 68px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ContainerOfForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
