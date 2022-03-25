function writeReview() {
  console.log("in");
  let answer1 = document.getElementById("btnradio1").value;
  let answer2 = document.getElementById("btnradio2").value;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var currentUser = db.collection("users").doc(user.uid);
      var userID = user.uid;
      //get the document for current user.
      currentUser.get().then((userDoc) => {
        var userEmail = userDoc.data().email;
        db.collection("answers").add({
          userID: userID,
          answer1: answer1,
          answer2: answer2,
        });
      });
    } else {
      // No user is signed in.
    }
  });
}
