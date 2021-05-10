import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore, combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENTID,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const initialState = {};
const store = createStore(rootReducer, initialState);

const reduxFirebaseProps = {
  firebase,
  config: {
    userProfile: "users",
    useFirestoreForProfile: true,
    enableClaims: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { store, reduxFirebaseProps };
