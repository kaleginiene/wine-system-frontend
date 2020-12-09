import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Section, InputField, Button } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Login.style";

function loginUser(username, password, auth, history, setNotification) {
  fetch("http://89.40.0.145:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      auth.updateToken("Bearer " + data.token);
      if (data.msg === "Logged in") {
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function Login() {
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState();
  const history = useHistory();

  return (
    <S.Main>
      <Section>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            loginUser(username, password, auth, history, setNotification);
            history.push("/");
          }}
        >
          <S.Title>Login</S.Title>
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
            Login
          </Button>
        </S.Form>
      </Section>
    </S.Main>
  );
}

export default Login;
