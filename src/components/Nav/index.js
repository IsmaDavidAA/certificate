import React, { useState, useEffect, useContext } from 'react';
import {
  WrapperState,
  WrapperNav,
  TextState,
  FigureState,
  TextName,
} from './Nav.styles';
import { Link } from 'react-router-dom';
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
              <Link to={`/login`}>
                <FigureState src={loginIcon} onClick={() => {}}></FigureState>
              </Link>
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
              <FigureState
                src={logoutIcon}
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      window.location.reload();
                      // Sign-out successful.
                    })
                    .catch(error => {
                      // An error happened.
                    });
                }}
              ></FigureState>
            </>
          )}
        </WrapperState>
      </WrapperNav>
    </>
  );
};

export default Nav;
