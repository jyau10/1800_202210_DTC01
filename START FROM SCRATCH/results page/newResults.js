var currentUser;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentUser = db.collection("users").doc(user.uid); //global
    console.log(currentUser);

    // the following functions are always called when someone is logged in
    read_display_Quote();
    insertName();
    populateCardsDynamically();
  } else {
    // No user is signed in.
    console.log("No user is signed in");
    window.location.href = "login.html";
  }
});

function insertName() {
  // to check if the user is logged in:
  currentUser.get().then((userDoc) => {
    //get the user name
    var user_Name = userDoc.data().name;
    console.log(user_Name);
    $("#name-goes-here").text(user_Name); //jquery
    // document.getElementByID("name-goes-here").innetText=user_Name;
  });
}
function populateCardsDynamically() {
  let athleteCardTemplate = document.getElementById("athleteCardTemplate");
  let athleteCardGroup = document.getElementById("athleteCardGroup");

  db.collection("athletes")
    .orderBy("dis") //NEW LINE;  what do you want to sort by?
    .limit(10) //NEW LINE:  how many do you want to get?
    .get()
    .then((allHikes) => {
      allHikes.forEach((doc) => {
        var athleteName = doc.data().name; //gets the name field
        var hikeID = doc.data().id; //gets the unique ID field
        var hikeLength = doc.data().length; //gets the length field
        let testHikeCard = athleteCardTemplate.content.cloneNode(true);
        testHikeCard.querySelector(".card-title").innerHTML = athleteName;
        //testHikeCard.querySelector(".card-length").innerHTML = hikeLength;

        //NEW LINE: update to display length, duration, last updated
        testHikeCard.querySelector(".card-length").innerHTML =
          "Length: " +
          doc.data().length +
          " km <br>" +
          "Duration: " +
          doc.data().length_time +
          "min <br>" +
          "Last updated: " +
          doc.data().last_updated.toDate();

        testHikeCard.querySelector("a").onclick = () => setHikeData(hikeID);
        testHikeCard.querySelector("img").src = `./images/${hikeID}.jpg`;
        //next 2 lines are new for demo#11
        //this line sets the id attribute for the <i> tag in the format of "save-hikdID"
        //so later we know which hike to bookmark based on which hike was clicked
        testHikeCard.querySelector("i").id = "save-" + hikeID;
        // this line will call a function to save the hikes to the user's document
        testHikeCard.querySelector("i").onclick = () => saveBookmark(hikeID);

        testHikeCard.querySelector(".read-more").href =
          "eachHike.html?hikeName=" + athleteName + "&id=" + hikeID;

        //append child is for when everything is ready to stick into the DOM
        hikeCardGroup.appendChild(testHikeCard);
      });
    });
}
//populateCardsDynamically();

//-----------------------------------------------------------------------------
// This function is called whenever the user clicks on the "bookmark" icon.
// It adds the hike to the "bookmarks" array
// Then it will change the bookmark icon from the hollow to the solid version.
//-----------------------------------------------------------------------------
function saveBookmark(hikeID) {
  currentUser
    .set(
      {
        bookmarks: firebase.firestore.FieldValue.arrayUnion(hikeID),
      },
      {
        merge: true,
      }
    )
    .then(function () {
      console.log("bookmark has been saved for: " + currentUser);
      var iconID = "save-" + hikeID;
      //console.log(iconID);
      document.getElementById(iconID).innerText = "bookmark";
    });
}

function setHikeData(id) {
  localStorage.setItem("hikeID", id);
}
