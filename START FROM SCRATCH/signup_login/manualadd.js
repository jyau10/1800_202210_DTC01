function addathletes() {
  //define a variable for the collection you want to create in Firestore to populate data
  var athleteRef = db.collection("athletes");

  athleteRef.add({
    img: "../../../static/owg2022/img/bios/photos/thumb/1168148.jpg",
    noc: "DEN",
    code: "1168148",
    FamilyName: "Aagaard",
    lnk: "../../../en/results/ice-hockey/athlete-profile-n1168148-mikkel-aagaard.htm",
    GivenName: "Mikkel",
    Gender: "M",
    dis: "IHO",
    discNOrder: "",
    name: "AAGAARD Mikkel",
    orgNOrder: "",
    IFId: "",
    shortName: "AAGAARD M",
    event: "",
    BirthDate: "1995-10-18",
  });
  athleteRef.add({
    FamilyName: "GAO",
    lnk: "../../../en/results/spee…n1058356-tingyu-gao.htm",
    name: "GAO Tingyu",
    shortName: "GAO T",
  });
  athleteRef.add({
    GivenName: "Chloe",
    name: "KIM Chloe",
  });
  athleteRef.add({
    GivenName: "Anna",
    name: "GASSER Anna",
  });
  athleteRef.add({
    GivenName: "Matthias",
    name: "MAYER Matthias",
  });
  athleteRef.add({
    GivenName: "Beat",
    name: "FEUZ Beat",
  });
  athleteRef.add({
    GivenName: "Su",
    name: "YIMING Su",
  });
  athleteRef.add({
    GivenName: "Ayuma",
    name: "HIRRANO Ayuma",
  });
  athleteRef.add({
    GivenName: "Max",
    name: "PARROT Max",
  });
  athleteRef.add({
    GivenName: "Ben",
    name: "KARL Ben",
  });
}
