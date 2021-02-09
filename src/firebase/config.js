import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAS5xWASvD-x3jstxMLNgdnAt41fX13fes",
  authDomain: "imgur-97821.firebaseapp.com",
  projectId: "imgur-97821",
  storageBucket: "imgur-97821.appspot.com",
  messagingSenderId: "314566900493",
  appId: "1:314566900493:web:97260f116698fde9164e44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage=firebase.storage();
const projectFirestore=firebase.firestore();
const timeStamp=firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage, projectFirestore,timeStamp};