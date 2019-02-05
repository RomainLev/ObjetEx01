class Voiture {
  constructor(masse, vitesse) {
    this.masse = masse;
    this.vitesse = vitesse;
  }

  calculerEnergieCinetique() {
    return 0.5 * this.masse * (this.vitesse ** 2);
  }

resultatCalculEnergieCinetique(){
  let resultat = this.calculerEnergieCinetique();
  return resultat + " Joules";
}
}

var voiture1 = new Voiture(1000, 30);

//alert(voiture1.masse);
//alert(voiture1.vitesse);
//alert(voiture1.calculerEnergieCinetique());

alert(voiture1.resultatCalculEnergieCinetique());
