const poids = document.querySelector('.poids');
const taille = document.querySelector('.taille');
const button = document.querySelector('.button');
const resultat = document.querySelector('.resultat');
const imc = document.querySelector('.imc');



button.addEventListener('click', () => {
   
    const poidsNumber = Number(poids.value); // Convertit la valeur en nombre
    const tailleNumber = Number(taille.value) / 100; // Convertir en mètres; // Convertit la valeur en nombre
    const CalculImc = poidsNumber / (tailleNumber * tailleNumber) ; // CALCUL IMC


    /// 
    if (poidsNumber > 0 && tailleNumber > 0) {


        imc.textContent  = `Votre IMC est : ${CalculImc.toFixed(2)}`; // Affiche l'IMC avec 2 décimales//
         }


         if  (CalculImc > 12 && CalculImc < 15) {
            resultat.textContent = "Votre IMC est bon.";
            resultat.style.color = "green"}

            else if  (CalculImc > 19.51 && CalculImc < 22 ) {
                resultat.textContent = "Votre IMC est moyen.";
                resultat.style.color = "orange"} 

               else if  (CalculImc > 22.01 && CalculImc < 25  ) {
                    resultat.textContent = "Votre IMC est en surpoids.";
                    resultat.style.color = "blue";}

                 else if     (CalculImc > 25.01 && CalculImc < 30 ) {
                        resultat.textContent = "Votre IMC est obese.";
                        resultat.style.color = "red";}

                       else if   (CalculImc > 30.01 ) {
                            resultat.textContent = "Votre IMC est hyper obese.";
                            resultat.style.color = "black";}



         })





            