function afficher (msg) {
  alert(msg);
}

function afficherParagraphe() {
  var chaine = "Ceci est une chaine de caractère";
  document.getElementById('bidule').innerHTML = chaine;
  document.getElementById('bidule').style.color = '#F00';
}
