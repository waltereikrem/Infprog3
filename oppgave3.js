window.onload = oppstart;

function oppstart() {
  document.getElementById("resetKnapp").onclick = resetter;
  document.getElementById("NavnBtn").onclick = navnvelger;
}

function resetter() {
  document.getElementById("utskrift").innerHTML = "";
}

function navnvelger() {

  var navn = ["Hans", "Kai", "jan", "Trond", "Walter", "Berit"];
  var valgte = [];
  
  while (valgte.length < 3) {
    var valgteNavn = navn[Math.floor(Math.random() * (0 + 6))];
    valgte.push(valgteNavn);
  }
  //
  if (valgte[1] === valgte[0] || valgte[1] === valgte[2] || valgte[0] === valgte[2]) {
    valgte.length = 0;
    navnvelger();
  }
  //
  else if (valgte[1] === valgte[0] && valgte[1] === valgte[2] && valgte[0] === valgte[2]) {
    valgte.length = 0;
    navnvelger();
  }
  //
  else {
    document.getElementById("utskrift").innerHTML = valgte;
  }
}
