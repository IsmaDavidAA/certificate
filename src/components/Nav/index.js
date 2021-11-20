import React, { useState, useEffect, useContext } from 'react';
import {
  WrapperState,
  WrapperNav,
  TextState,
  FigureState,
  TextName,
} from './Nav.styles';
import loginIcon from '../../images/iniciar-sesion.png';
import logoutIcon from '../../images/logout.png';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from '../../Context';
import { apiSettings } from '../../servicios/servicios';

const Nav = () => {
  // const [user, setUser] = useState([]);
  const [nombre, setNombre] = useState('');
  const { currentUser } = useContext(AuthContext);
  const auth = getAuth();

  const fetchName = async () => {
    if (currentUser) {
      const temp = await apiSettings.getName(currentUser.uid);
      setNombre(temp.nombre);
    }
  };
  useEffect(() => {
    fetchName();
  }, [currentUser]);

  return (
    <>
      <WrapperNav>
        <WrapperState>
          {!currentUser ? (
            <>
              <TextState href="/login">LOGIN</TextState>
              <FigureState src={loginIcon}></FigureState>
            </>
          ) : (
            <>
              <TextName>{nombre}</TextName>
              <TextState
                href="/"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch(error => {
                      // An error happened.
                    });
                }}
              >
                LOGOUT
              </TextState>
              <FigureState src={logoutIcon}></FigureState>
            </>
          )}
        </WrapperState>
      </WrapperNav>
    </>
  );
};

export default Nav;
