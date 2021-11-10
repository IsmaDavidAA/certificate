import React, { useCallback } from 'react';

// import { auth } from '../servicios/firebase';

const SignUp = ({ history }) => {

  return (
    <div>
      <h1>Sign up</h1>
      <form >
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
