var objet1 = new Object;
objet1.couleur = "rouge";
objet1.taille = 100;
objet1.afficherCouleur = function() {
  alert(objet1.couleur);
};

objet1.afficherCouleur()
// document.write("La couleur de cet objet est " + objet1.couleur);

objet1.couleur = "vert";
