import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC2Afkmzo081v3WDY9GPNkGosDdlbDARU",
  authDomain: "whatsapp-clone-d68c3.firebaseapp.com",
  projectId: "whatsapp-clone-d68c3",
  storageBucket: "whatsapp-clone-d68c3.appspot.com",
  messagingSenderId: "401357112100",
  appId: "1:401357112100:web:ab4780c0eddf5e09d2a9b1",
  measurementId: "G-N9SY0P5J69",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//access the firestore instance
const db = firebaseApp.firestore();

//our authentication handler
const auth = firebaseApp.auth();

//our google authentication handler
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
