import React, { useEffect, useState } from 'react';
import { auth } from './servicios/firebase';
import { onAuthStateChanged } from '@firebase/auth';

//2.
export const AuthContext = React.createContext();

//3.
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  //const [pending,setPending] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        setCurrentUser(user);
        //setPending(false)
      }
    });
  }, []);
  //if (pending){
  //   return <>Loading...</>
  //}
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
