// je dois prendre les deux donner des input et faire le calcul montant diviser par le nb d'année et 2% en plus du montant

 const montant = document.querySelector('.montant')
 const resultat = document.querySelector('.taux')
 const annee = document.querySelector('.annee')
 const button = document.querySelector('.button')

 button.addEventListener('click', () => {
    
   const valeurAnnee = Number(annee.value); // Convertit la valeur en nombre
    const result = valeurAnnee ; // ANNEE
    const montant1 = Number(montant.value) 
    const Pret = montant1 * 0.02 
    const CalculOne = result + Pret

    console.log(CalculOne); // Affiche le résultat du taux d'interet


const LastCalcul = CalculOne + montant1 // MONTANT INITIAL + TAUX D'INTERET


resultat.value = `Résultat : ${LastCalcul.toFixed(2)}`; // Arrondi à deux décimales






})