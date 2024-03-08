  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5b9_29Ksw5jP4y1-Jj9G-9kN-yvrEM34",
    authDomain: "red-social-9ec43.firebaseapp.com",
    projectId: "red-social-9ec43",
    storageBucket: "red-social-9ec43.appspot.com",
    messagingSenderId: "188549787785",
    appId: "1:188549787785:web:94ac6c019dec61743f9658",
    measurementId: "G-JP01QL2KZF"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);


  
  
