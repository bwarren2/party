import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyDlAib1gn0k30UTdG-7XfpTedw_KmEvIg0',
  authDomain: 'party-offering.firebaseapp.com',
  databaseURL: 'https://party-offering.firebaseio.com',
  projectId: 'party-offering',
  storageBucket: '',
  messagingSenderId: '281143010555'
}
firebase.initializeApp(config)
export const db = firebase.database()
