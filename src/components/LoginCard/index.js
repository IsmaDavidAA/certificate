import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  FormLogin,
  Label,
  ButtonLogin,
  TitleLogin,
  WrapperLogin,
  Input,
} from './LoginCard.styles';
const LoginCard = props => {
  return (
    <>
      <WrapperLogin>
        <TitleLogin>LOGIN</TitleLogin>
        <FormLogin onSubmit={props.handleLogin}>
          <Label>
            Email
            <Input name="email" type="email" placeholder="Email" />
          </Label>
          <Label>
            Password
            <Input name="password" type="password" placeholder="Password" />
          </Label>
          <ButtonLogin type="submit">Iniciar sesion</ButtonLogin>
        </FormLogin>
      </WrapperLogin>
    </>
  );
};

export default LoginCard;
