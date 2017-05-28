import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBBgF8EhXrDYjLrLA9Lr60jQxdCrnCkSRI",
  authDomain: "voteslut.firebaseapp.com",
  databaseURL: "https://voteslut.firebaseio.com",
  projectId: "voteslut",
  storageBucket: "voteslut.appspot.com",
  messagingSenderId: "784757964347"
};

let app = Firebase.initializeApp(config)
let db = app.database()
let suggestions = db.ref('Suggestions')

export default suggestions