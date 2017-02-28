var CreationTableauLangages = function () {
  langages = ['Html', 'CSS', 'Java', 'PHP']; //déclaration d'un tableau composé de chaines de caractères
  return langages;
}

var CreationTableauNombres = function () {
  nombres = [0, 1, 2, 3, 4, 5]; //déclaration d'un tableau composé de nombres
  return nombres;
}

var RemplacementElement = function (langages) {
  langages[2] = 'Javascript'; //changement de la deuxième occurence du tableau en Javascript à partir de l'indice (donc la troisième position)
  return langages;
}

var AjoutElementLangages = function (langages) {
  langages.push('Ruby', 'Python'); //ajout de deux nouvelles cellules à la fin du tableau
  return langages;
}

var AjoutElementNombres = function (nombres) {
  nombres.unshift(-2, -1);
  return nombres;
}

var SuppressionPremierElement = function (langages) {
  langages.shift() // en php c'est unset, supprimer le premier élément du tableau
  return langages;
}

var SuppressionDernierElement = function (langages) {
  langages.pop(); //supprimer le dernier élément
  return langages;
}
// transformation d'une chaine de caractères en un tableau de nom reseaux_sociaux
var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  var reseaux_chaine = reseaux_sociaux_chaine.split(',');
  return reseaux_chaine;
}
//transformation d'un tableau en une chaine de caractères séparée par des virgules
var ConversionTableauChaine = function (langages) {
  var langages_chaine = langages.join(',');
  return langages_chaine;
}
// rangement du tableau par ordre alphabétique
var TriTableau = function (reseaux_sociaux) {
  reseaux_sociaux = reseaux_sociaux.sort();
  return reseaux_sociaux;
}
//inversement des indices du tableau
var InversionTableau = function (reseaux_sociaux){
  reseaux_sociaux.reverse();
  return reseaux_sociaux;
}
