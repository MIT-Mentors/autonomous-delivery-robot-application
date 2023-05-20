import { initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCPHtk6B6gJWbmhWiBekOBL-HTiX4fLuoM",
    authDomain: "sbadr-d5175.firebaseapp.com",
    databaseURL: "https://sbadr-d5175-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sbadr-d5175",
    storageBucket: "sbadr-d5175.appspot.com",
    messagingSenderId: "884973250534",
    appId: "1:884973250534:web:fbd46b159320cf48c29827",
    measurementId: "G-LGS33RXQ1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;