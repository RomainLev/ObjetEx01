var repositoire = new Array(1234, "Coucou", "L'escargot", 'L\'escalier');
repositoire.push('truc');



var tab1 = ['pommes de terre', 'camembert', 'pommes', 'bière'];
var tab2 = ['salade', 10, true, Math.PI];

tab1.push ('whisky');
tab1.push(tab2);
tab1.push(22);
tab1.push("zzzzzzz");
tab1.sort();
tab1.reverse();

var reponse = "<ul>";

for (var i = 0 ; i < tab1.length ; i++) {
  reponse += "<li>";
    if (Array.isArray (tab1[i])) {
      let tab2 = tab1[i];
      reponse += "<ul>";

      for (var y = 0 ; y < tab2.length ; y++) {
        reponse += "<li>" + tab2[y]; + "</li>";
      }
      reponse += "</ul>";
    }
  reponse += tab1[i];
  reponse += "</li>";

}

reponse += "</ul>";

document.write(reponse);
