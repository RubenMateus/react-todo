import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export const Login = () => {
  const firebase = useFirebase();
  const history = useHistory();

  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={{
          signInFlow: "popup",
          signInSuccessUrl: "/",
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
          ],
          callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl = "/") => {
              firebase.handleRedirectResult(authResult).then(() => {
                history.push(redirectUrl);
              });
              return false;
            },
          },
        }}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};

export default Login;
