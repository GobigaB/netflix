import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

//config

const config = {
    apiKey: "AIzaSyDAlpElE7bNwyQAnzGjoZGDZwPeAVssGuk",
    authDomain: "netflix-web-app-clone-5e384.firebaseapp.com",
    projectId: "netflix-web-app-clone-5e384",
    storageBucket: "netflix-web-app-clone-5e384.appspot.com",
    messagingSenderId: "724598747381",
    appId: "1:724598747381:web:93aee54615db72be8c15bc",
    measurementId: "G-TTQ2J7D44X"
}

const firebase = Firebase.initializeApp(config)

seedDatabase(firebase)

export { firebase }