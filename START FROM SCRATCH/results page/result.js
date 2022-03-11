function populateCardsDynamically() {
  let athleteCardTemplate = document.getElementById("athleteCardTemplate");
  let athleteCardGroup = document.getElementById("athleteCardGroup");

  db.collection("athletes")
    .get()
    .then((allAthletes) => {
      allAthletes.forEach((doc) => {
        var athleteName = doc.data().name; //gets the name field
        var athleteID = doc.data().id; //gets the unique ID field
        var athleteLength = doc.data().length; //gets the length field
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

function setAthleteData(id) {
  localStorage.setItem("athleteID", id);
}
