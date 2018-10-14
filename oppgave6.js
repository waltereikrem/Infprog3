function oppstart() {
  document.getElementById("genererBtn").onclick = genererBrev;
}

function genererBrev() {

  // henter ut verdiene (tegnene) gitt av brukeren, og ser på hvert eneste tegn
  var txtUser = document.getElementById("txtUser").value;
  for (var i = 0; i < txtUser.length; i++) {

    //oppdretter et bilde element
    var img = document.createElement("img");

    // plukker ut alle tegn som ble funnet og tildeler de en ".jpg" og skriver ut som et bildeelement med ("verdi".jpg)
    img.src = txtUser.charAt(i) + ".jpg";
    var src = document.getElementById("utskrift");
    src.appendChild(img);
  }
}
