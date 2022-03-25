function populateCardsDynamically() {
  let athleteCardTemplate = document.getElementById("athleteCardTemplate");

  db.collection("athletes")
    .limit(20)
    .get()
    .then((allAthletes) => {
      allAthletes.forEach((doc) => {
        var athleteName = doc.data().GivenName; //gets the name field
        var athleteID = doc.data().code; //gets the unique ID field
        var athleteFamilyName = doc.data().FamilyName; //gets the length field
        let testathleteCard = athleteCardTemplate.content.cloneNode(true);
        testathleteCard.querySelector(".card-title").innerHTML = GivenName;
        testathleteCard.querySelector(".card-length").innerHTML = name;
        testathleteCard.querySelector("a").onclick = () =>
          setAthleteData(athleteID);
        testathleteCard.querySelector("img").src = `./images/${athleteID}.jpg`;
        athleteCardGroup.appendChild(testathleteCard);
      });
    });
}
populateCardsDynamically();

insertName();

function setAthleteData(code) {
  localStorage.setItem("athleteID", code);
}
