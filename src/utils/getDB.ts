import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAi_ja3PkVocE5ouQxBiehjor0wYvp22kg",
  authDomain: "greenhouse-126bd.firebaseapp.com",
  projectId: "greenhouse-126bd",
  storageBucket: "greenhouse-126bd.appspot.com",
  messagingSenderId: "491960058812",
  appId: "1:491960058812:web:b3ebd7df96467399b5a1b9",
  measurementId: "G-12L4D4G79V"
};

const app = initializeApp(firebaseConfig);

const getDB = () => {
  return getFirestore(app);
};

export { getDB };