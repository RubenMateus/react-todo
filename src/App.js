/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store, reduxFirebaseProps } from "./redux/store";
import { Login } from "./pages/Login";
import { Application } from "./pages/Application";
import theme from "./theme";

export var App = function () {
  return (
    <>
      <ColorModeScript initialColorMode="light" />
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...reduxFirebaseProps}>
            <BrowserRouter>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Application />
              </Switch>
            </BrowserRouter>
          </ReactReduxFirebaseProvider>
        </Provider>
      </ChakraProvider>
    </>
  );
};
