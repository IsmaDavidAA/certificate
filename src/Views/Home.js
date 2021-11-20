import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const Home = () => {
  const auth = getAuth();

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
