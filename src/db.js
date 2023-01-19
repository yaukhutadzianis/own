
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAgKAzapWyDp96VLrhAwzwNgTCVNkXvthQ",
    authDomain: "fbreactoos.firebaseapp.com",
    projectId: "fbreactoos",
    storageBucket: "fbreactoos.appspot.com",
    messagingSenderId: "509916133363",
    appId: "1:509916133363:web:db54ec6f7744e257f44486"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;