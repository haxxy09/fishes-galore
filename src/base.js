import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjPEflt9USAt3jXUMXPIDpXCc-w9usKpc",
    authDomain: "fishes-galore.firebaseapp.com",
    databaseURL: "https://fishes-galore.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;