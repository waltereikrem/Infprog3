window.onload = oppstart;

function oppstart() {
  document.getElementById("brukerBtn").onclick = mndSjekker;
  document.getElementById("resetKnapp").onclick = resetter;
}

var navn = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "Septemper", "Oktober", "November", "Desember"];
var dager = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function mndSjekker() {
    var brukerInput = parseInt(document.getElementById("brukerNr").value) -1;
    document.getElementById("utskrift").innerHTML = "Det er " + dager[brukerInput] + " dager i " + navn[brukerInput] + ".";
}

// resetter utskrift og sjerner arrayen fra siden
function resetter() {
  document.getElementById("utskrift").innerHTML = "";
}
