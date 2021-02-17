import React from "react";
import { useFirebase } from "react-redux-firebase";

export const Login = () => {
  const firebase = useFirebase();

  function loginWithGoogle() {
    return firebase.login({ provider: "google", type: "popup" });
  }

  return (
    <div>
      <button type="button" onClick={loginWithGoogle}>
        Login With Google
      </button>
    </div>
  );
};

export default Login;
