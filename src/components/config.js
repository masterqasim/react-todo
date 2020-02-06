import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDnElPJquX6X4QH2oNHAd01gCE_E6W6XAE",
  authDomain: "react-todos-d0f90.firebaseapp.com",
  databaseURL: "https://react-todos-d0f90.firebaseio.com",
  projectId: "react-todos-d0f90",
  storageBucket: "react-todos-d0f90.appspot.com",
  messagingSenderId: "314255595136",
  appId: "1:314255595136:web:93a617fff4e54a74147865",
  measurementId: "G-Y0JXF7NNY2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();