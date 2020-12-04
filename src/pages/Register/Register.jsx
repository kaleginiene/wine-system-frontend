import React from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./Register.style";

function Register() {
  return (
    <S.Main>
      <Section>
        <S.Form>
          <S.Title>Register</S.Title>
          <InputField
            type="email"
            placeholder="E.g. email@email.com"
            label="Email"
          />
          <InputField type="password" placeholder="Password" label="Password" />
          <Button type="submit" color="primary">
            Register
          </Button>
        </S.Form>
      </Section>
    </S.Main>
  );
}

export default Register;
