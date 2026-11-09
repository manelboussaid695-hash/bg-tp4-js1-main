"use strict";

const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];  
const etudiant = {Nom: "Doe", Prenom: "John", Age: 30};
const etudiant objet =[
    {Nom:"nom1", Prenom:"prenom1", Age:20},
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 },
];

function f1(){                        
    for (const e of etudiants){
        console.log(e);              
    }
}
function f2(){
    console.log(etudiant);

}
function f3(){
    for (const e of etudiant objet ){
        console.log('${e.nom}-${e.prenom}-${age}');
        
    }
}