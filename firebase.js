import * as firebase from "firebase";
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyCqxwBY0w_v2CZhhl3Ge61sDalQKn8iPBw",
  authDomain: "signal-clone-a74bb.firebaseapp.com",
  projectId: "signal-clone-a74bb",
  storageBucket: "signal-clone-a74bb.appspot.com",
  messagingSenderId: "721176719711",
  appId: "1:721176719711:web:ea000b676bbb4d8bc146ea",
  measurementId: "G-Y44JYYHW8V",
};
let app;
if (firebase.apps.length === 0) {
   app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()
export {db,auth}
