import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD3E-xy6pLtmDAzQSS1CSSCwp0orfSopnU",
  authDomain: "storyhub2-dbace.firebaseapp.com",
  projectId: "storyhub2-dbace",
  storageBucket: "storyhub2-dbace.appspot.com",
  messagingSenderId: "25778771500",
  appId: "1:25778771500:web:d6ea1a265648721118a389"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()