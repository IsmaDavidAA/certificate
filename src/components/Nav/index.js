import React, { useState, useEffect, useContext } from 'react';
import { WrapperState, WrapperNav, TextState, FigureState } from './Nav.styles';
import loginIcon from '../../images/iniciar-sesion.png';
import logoutIcon from '../../images/logout.png';
import { useHistory } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from '../../Context';
import { apiSettings } from '../../servicios/servicios';

const Nav = () => {
  const [user, setUser] = useState([]);
  const [nombre, setNombre] = useState('');
  const { currentUser } = useContext(AuthContext);
  const auth = getAuth();
  const history = useHistory();

  const fetchName = async () => {
    if (currentUser) {
      const temp = await apiSettings.getName(currentUser.uid);
      setUser(temp[1]);
      setNombre(temp[1].nombreCompleto);
      console.log(temp);
    }
  };
  useEffect(() => {
    fetchName();
  }, [currentUser]);

  return (
    <>
      <WrapperNav>
        <WrapperState>
          <TextState href="/login">Login</TextState>
          <FigureState src={loginIcon}></FigureState>
        </WrapperState>
      </WrapperNav>
    </>
  );
};

export default Nav;
