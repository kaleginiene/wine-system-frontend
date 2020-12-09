import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Section, InputField, Button } from "../../components";
import * as S from "./Register.style";

function registerUser(username, password, auth, history, setNotification) {
  fetch("http://89.40.0.145:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      auth.updateToken("Bearer" + data.token);
      if (data.msg === "User has been successfully registered") {
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function Register() {
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [notification, setNotification] = useState();

  return (
    <S.Main>
      <Section>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            registerUser(username, password, auth, history, setNotification);
          }}
        >
          <S.Title>Register</S.Title>
          <h2>{notification}</h2>

          <InputField
            type="email"
            placeholder="E.g. email@email.com"
            label="Email"
            handleChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            label="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary">
            Register
          </Button>
        </S.Form>
      </Section>
    </S.Main>
  );
}

export default Register;
