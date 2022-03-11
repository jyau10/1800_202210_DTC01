var firebaseConfig = {
  apiKey: "AIzaSyC8FblTZ6cjxQctRXRyyzERGOvU7ZlfVtQ",
  authDomain: "waldo-teamdtc-01.firebaseapp.com",
  projectId: "waldo-teamdtc-01",
  storageBucket: "waldo-teamdtc-01.appspot.com",
  messagingSenderId: "1065805799116",
  appId: "1:1065805799116:web:873d31fb2213c37b24ec69",
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = firebase.firestore();
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

firebase.auth().onAuthStateChanged((user) => {
  var signUpBtn = document.getElementById("signUp");
  var signInBtn = document.getElementById("signIn");
  if (user) {
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
function login(event) {
  event.preventDefault();
  signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
  signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });
  var email = document.getElementById("Email");
  var password = document.getElementById("Password");
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error signing in,", error.message);
      alert(error.message);
    })
    .then(function (user) {
      if (user) {
        alert("Welcome back");
      }
    });
}

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
