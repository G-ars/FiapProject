import firebase from './firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBfi71Z6cUzImlD0dODk4fk3MKJxXaSvVI",
    authDomain: "recycling-project-fiap.firebaseapp.com",
    projectId: "recycling-project-fiap",
    storageBucket: "recycling-project-fiap.appspot.com",
    messagingSenderId: "693444340694",
    appId: "1:693444340694:web:38575d4b04cacd2a7cd277",
    measurementId: "G-JP1X03Z51J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth() 
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db  