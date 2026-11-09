// ===== Question 1 : un produit et la valeur de son stock =====
const produit = {
  nom: "Stylo",
  prix: 50,
  quantite: 20
};

const valeurStock = produit.prix * produit.quantite;

console.log("--- Question 1 ---");
console.log("Produit :", produit.nom);
console.log("Valeur du stock :", valeurStock, "DA");



const catalogue = [
  { nom: "Stylo",        prix: 50,   quantite: 20 },
  { nom: "Cahier",       prix: 120,  quantite: 15 },
  { nom: "Règle",        prix: 30,   quantite: 40 },
  { nom: "Sac",          prix: 1500, quantite: 5  },
  { nom: "Calculatrice", prix: 800,  quantite: 8  }
];


let somme = 0;
for (const p of catalogue) {
  somme = somme + p.prix;
}


const prixMoyen = somme / catalogue.length;


const produitsChers = [];            

for (const p of catalogue) {         
  if (p.prix > prixMoyen) {          
    produitsChers.push(p);           
  }
}

console.log("--- Question 2 ---");
console.log("Prix moyen :", prixMoyen);
console.log("Produits dont le prix dépasse la moyenne :");
for (const p of produitsChers) {
  console.log("-", p.nom, ":", p.prix, "DA");
}



const totalArticles = catalogue.reduce(function (total, p) {
  return total + p.quantite;
}, 0);

const valeurGlobale = catalogue.reduce(function (total, p) {
  return total + p.prix * p.quantite;
}, 0);

console.log("--- Question 3 ---");
console.log("Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale, "DA");



function calculerValeurStock(p) {
  return p.prix * p.quantite;
}

console.log("--- Question 4 ---");
console.log("Stylo :", calculerValeurStock(catalogue[0]), "DA");
console.log("Cahier :", calculerValeurStock(catalogue[1]), "DA");
console.log("Sac :", calculerValeurStock(catalogue[3]), "DA");


for (const p of catalogue) {
  console.log(p.nom, ":", calculerValeurStock(p), "DA");
}



function appliquerTraitement(liste, traitement) {
  for (const p of liste) {
    traitement(p);
  }
}

function afficherNom(p) {
  console.log(p.nom);
}

function afficherPrix(p) {
  console.log(p.prix, "DA");
}

console.log("--- Question 5 ---");
console.log("Les noms :");
appliquerTraitement(catalogue, afficherNom);

console.log("Les prix :");
appliquerTraitement(catalogue, afficherPrix);