"use strict"; 


const Students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     note: 14, autre: 5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", note: 7,  autre: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   note: 13, autre: 3 }
];



function B(note) {
  
  return note >= 10;
}


function A() {

  for (const s of Students) {
    
    if (B(s.note)) {
     
      console.log(s.id + ": ADMIS");
    } else {
      console.log(s.id + ": AJOURNÉ");
    }
  }
}S