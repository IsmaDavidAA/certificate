import React, { useCallback, useContext } from 'react';
import { auth } from '../../servicios/firebase';
import { AuthContext } from '../../Context';
import { withRouter, Redirect } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { TextSoft, WrapperView } from './Login.styles';
import LoginCard from '../../components/LoginCard';
const SignIn = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <WrapperView>
      <LoginCard handleLogin={handleLogin}></LoginCard>
      <TextSoft>BY CERTIFICATE</TextSoft>
    </WrapperView>
  );
};

export default SignIn;
