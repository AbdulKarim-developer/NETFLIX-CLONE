import Firebase from 'firebase/app';
import { seedDatabase } from '../seed'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCyLNKlIrSZ1L93YtoPDJ99VqfRka2mRsQ",
  authDomain: "netflix-project-3e1e0.firebaseapp.com",
  projectId: "netflix-project-3e1e0",
  storageBucket: "netflix-project-3e1e0.appspot.com",
  messagingSenderId: "712224287966",
  appId: "1:712224287966:web:3c7f78a6142d9d5bd4e64f",
  measurementId: "G-PKK3LL4C69"
};

const firebase = Firebase.initializeApp(firebaseConfig);

seedDatabase(firebase);

export { firebase };