// import {firebase} from 'firebase/compat/app';
// import  firebase  from './firebase';
// import 'firebase/compat/firestore';
// import 'firebase/firestore';
// import firebase from 'firebase'

import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDl00mnJL_eVhnPTO4CJn-i3P55fa-bWtk",
    authDomain: "portfolio-contact-data-49213.firebaseapp.com",
    projectId: "portfolio-contact-data-49213",
    storageBucket: "portfolio-contact-data-49213.appspot.com",
    messagingSenderId: "172884757298",
    appId: "1:172884757298:web:23d76c14f2aa064b3e252b"
  };
  
  const app = firebase.initializeApp(firebaseConfig)

  // let app1 = app.firestore()



  // export const db =   app.firebaseConfig.firestore() 


  // let app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  

  export let db =  app.firestore()

//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }


//   export default !firebase.apps.length 
//   ? firebase.initializeApp(firebaseConfig).firestore()
//   : firebase.app().firestore();