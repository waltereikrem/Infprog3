window.onload = oppstart;

function oppstart() {
  document.getElementById("skrivut").onclick = utskriver;
  document.getElementById("resetKnapp").onclick = resetter;
  document.getElementById("baklengs").onclick = baklengs;
  document.getElementById("annehver").onclick = annehver;
  document.getElementById("mindre10btn").onclick = mindre10;
  document.getElementById("partallbtn").onclick = partall;
  document.getElementById("antallbtn").onclick = antall;
  document.getElementById("sumbtn").onclick = sum;
  document.getElementById("gjSnittBtn").onclick = gjennomsnitt;
  document.getElementById("sumParBtn").onclick = sumPartall;
  document.getElementById("minBtn").onclick = minsteTall;
  document.getElementById("brukerBtn").onclick = brukertall;
  document.getElementById("antallBrukerBtn").onclick = antallBruker;



}

// skriver ut arrayen
function utskriver() {
  array = [15, 69, 42, 5, 27, 6, 9];
  document.getElementById("utskrift").innerHTML = array;
}



// resetter utskrift og sjerner arrayen fra siden
function resetter() {
  document.getElementById("utskrift").innerHTML = "";
}



// skriver ut array baklengs
function baklengs() {
  array = [15, 69, 42, 5, 27, 6, 9];
  array.reverse();
  document.getElementById("utskrift").innerHTML = array;
}



// skriver ut annehvert tall i arrayen
function annehver() {
  array = [15, 69, 42, 5, 27, 6, 9];
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      document.getElementById("utskrift").innerHTML += array[i] + " ";
    }
  }
}



// skriver ut alle tall som er mindre enn 10
function mindre10() {
  array = [15, 69, 42, 5, 27, 6, 9];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 10) {
      document.getElementById("utskrift").innerHTML += array[i] + ", ";
    }
  }
}



// skriver ut alle partall i arrayen
function partall() {
  array = [15, 69, 42, 5, 27, 6, 9];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      document.getElementById("utskrift").innerHTML += array[i] + ", ";
    }
  }
}



// skriver ut antall elementer i arrayen
function antall() {
  array = [15, 69, 42, 5, 27, 6, 9];
  document.getElementById("utskrift").innerHTML += "Det er " + array.length + " elementer i arrayen.";
}



// summerer og skriver ut summen av arrayen
function sum() {
  array = [15, 69, 42, 5, 27, 6, 9];

  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  document.getElementById("utskrift").innerHTML += ("Summen av arrayen er: ") + sum;
}



// bruker samme skriptet som i summering til å regne ut gjennomsnittet og skrive det ut
function gjennomsnitt() {
  array = [15, 69, 42, 5, 27, 6, 9];

  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  var gjSnitt = sum / array.length;
  document.getElementById('utskrift').innerHTML += ("Gjennomsnittet er: ") + gjSnitt;
}



// bruker partallskriptet og summeringsskriptet sammen for å finne summen av alle partall og skrive de ut
function sumPartall() {
  array = [15, 69, 42, 5, 27, 6, 9];

  var sum = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum += array[i];
    }
  }
  document.getElementById('utskrift').innerHTML += ("Summen av allle partall er: ") + sum;
}



// lager først en liste i stigende rekkefølge, og så velger jeg indexpos 0 (ergo det laveste tallet), og skriver ut
function minsteTall() {
  array = [15, 69, 42, 5, 27, 6, 9];

  for (var i = 0; i < array.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < array.length; j++) { //stigende rekkefølge
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min != i) {
      var minste = array[i];
      array[i] = array[min];
      array[min] = minste;
    }
  }
  document.getElementById('utskrift').innerHTML += ("Det minste tallet er: ") + array[0];
}



// ser gjennom array etter brukerens tall og gir beskjed om tallet finnes i array eller ikke
function brukertall() { //huske lapp: inpud id= txtFelt
  array = [15, 69, 42, 5, 27, 6, 9];

  var brukerverdi = parseInt(document.getElementById("txtFelt").value);
  for (var i = 0; i < array.length; i++) {
    if (array[i] === brukerverdi) {
      document.getElementById("utskrift").innerHTML = array[i] + " Er en verdi som finnes i arrayen!";
      i = 9999;
    } else {
      document.getElementById("utskrift").innerHTML = brukerverdi + " Finnes desverre ikke i arrayen.";
    }
  }
}


// finner ut om hvor mange ganger tallet til brukeren dukker opp i arrayene
function antallBruker() {
  array = [15, 69, 42, 5, 27, 6, 9];

  var brukerantallet = parseInt(document.getElementById("txtFelt").value);
  var sumSamlet = 0;

  for (var i = 0; i < array.length; i++) {

    if (array[i] === brukerantallet) {
      sumSamlet += brukerantallet;
    }
  }
  var sumFerdig = sumSamlet / brukerantallet;
  document.getElementById("utskrift").innerHTML = "Det finnes totalt " + sumFerdig + " tilfeller av tallet " + brukerantallet + ".";
}
