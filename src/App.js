/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { PrivateRoute } from "./components/hocs/PrivateRoute";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import { store, reduxFirebaseProps } from "./redux/store";
import { Login } from "./components/Login";

const config = {
  useSystemColorMode: false,
};

const customTheme = extendTheme({ config });

export const App = () => (
  <>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...reduxFirebaseProps}>
          <BrowserRouter>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/">
                <SelectedProjectProvider>
                  <ProjectsProvider>
                    <main data-testid="application">
                      <Header />
                      <Content />
                    </main>
                  </ProjectsProvider>
                </SelectedProjectProvider>
              </PrivateRoute>
            </Switch>
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </ChakraProvider>
  </>
);
