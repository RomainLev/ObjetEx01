var voiture = new Object;
voiture.masse = 800;
voiture.vitesse = 56;
voiture.modèle = "Twingo";

var energieCynétique = (voiture.masse/2 * voiture.vitesse**2);
document.write(energieCynétique);


//Correction
voiture1 = {} ;
voiture1.masse = 1200;
voiture1.vitesse = 22;
voiture1.marque = "Tesla";
voiture1.modele = "P100D";
voiture1.calculerEnergieCinetique = function() {
  if (voiture1.masse <= 0){
    return false;
  }

  else {
    return 0.5 * voiture1.masse * (voiture1.vitesse ** 2);
  }
};
voiture.masse = 1600;
alert(voiture1.calculerEnergieCinetique());
