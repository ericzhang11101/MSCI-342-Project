import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMMQT_xqUn2zy1UP4HjFeLdbyqZfMWGrk",
  authDomain: "msci-342.firebaseapp.com",
  projectId: "msci-342",
  storageBucket: "msci-342.appspot.com",
  messagingSenderId: "744750643739",
  appId: "1:744750643739:web:6b679626359a48812156be",
  measurementId: "G-VXDF5GZY4Z"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;

export {auth};
// export default firebase
