const firebaseConfig = {
  apiKey: "AIzaSyCa2juLxaNjBw3C-iwqY8YhsTZ0CC2yvIA",
  authDomain: "cifrado-cesar-a30a6.firebaseapp.com",
  databaseURL: "https://cifrado-cesar-a30a6.firebaseio.com",
  projectId: "cifrado-cesar-a30a6",
  storageBucket: "cifrado-cesar-a30a6.appspot.com",
  messagingSenderId: "1035943143125",
  appId: "1:1035943143125:web:ffd0709f8ef0c50663a45c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
