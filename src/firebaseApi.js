import firebase from 'firebase';

console.log('[process.env] ', process.env );

export default firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
});

export const ideasStore = () => {
  const db = firebase.firestore()
  db.settings({timestampsInSnapshots: true})
  return db.collection('ideas')
}