import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const firebase = useFirebase();
  const history = useHistory();

  async function loginWithGoogle() {
    await firebase.login({ provider: "google", type: "popup" });

    history.push("/");
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
