import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD7TNCzl-zNu3o-qjnMER_CvjAXKvGQYNs',
  authDomain: 'react-redux-pwa-template.firebaseapp.com',
  databaseURL: 'https://react-redux-pwa-template.firebaseio.com',
  projectId: 'react-redux-pwa-template',
  storageBucket: 'react-redux-pwa-template.appspot.com',
  messagingSenderId: '981315019594'
};

const app = firebase.initializeApp(config);
const auth = app.auth();
const db = app.auth();

export { auth, db };
