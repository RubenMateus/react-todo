import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBqs5y4uCmwK45Wc9wOGyYz5EREb3BJFOk",
  authDomain: "todo-react-ru.firebaseapp.com",
  databaseURL: "https://todo-react-ru.firebaseio.com",
  projectId: "todo-react-ru",
  storageBucket: "todo-react-ru.appspot.com",
  messagingSenderId: "344703362933",
  appId: "1:344703362933:web:ec0c40b8360e92280e153c",
  measurementId: "G-YLMPYHHWMH"
});

firebase.analytics();
export { firebaseConfig as firebase }