import firebase from 'firebase'
/*import firestore from 'firebase/firestore'*/
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBdXFZiGB9uCmlI2VJSKRHwwyeYEowzC8M",
    authDomain: "proyectove-ffcdc.firebaseapp.com",
    projectId: "proyectove-ffcdc",
    storageBucket: "proyectove-ffcdc.appspot.com",
    messagingSenderId: "657046213445",
    appId: "1:657046213445:web:877e44a1212772ebabe42c",
    measurementId: "G-D1B84H9E7X"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();
