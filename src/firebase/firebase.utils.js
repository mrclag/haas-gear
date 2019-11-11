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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
