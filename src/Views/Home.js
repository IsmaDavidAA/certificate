import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const Home = () => {
  const auth = getAuth();

  return (
    <>
      <h1>Home</h1>
      <button
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
        Sign out
      </button>
    </>
  );
};

export default Home;
