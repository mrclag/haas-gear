import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA9eFSIVNHPrcqeYysvv6IryYBd_OalFQk',
  authDomain: 'ecommerce-clothing-f28e4.firebaseapp.com',
  databaseURL: 'https://ecommerce-clothing-f28e4.firebaseio.com',
  projectId: 'ecommerce-clothing-f28e4',
  storageBucket: 'ecommerce-clothing-f28e4.appspot.com',
  messagingSenderId: '379324924310',
  appId: '1:379324924310:web:1540ceb1e1eb91c7515db7',
  measurementId: 'G-H124WH465J'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
