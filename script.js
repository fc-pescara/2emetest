const Name = document.querySelector('.Name');
const Valeur = document.querySelector('.Valeur');

const ButtonCreer = document.querySelector('.ButtonCreer');
const Afficher = document.querySelector('.Afficher');

ButtonCreer.addEventListener('click', () => {
    const DataName = Name.value;
    const DataValeur = Valeur.value;

    const DataFinal = DataName + DataValeur;

    if (DataFinal) {
        const newDiv = document.createElement('div');
        newDiv.className = 'created-div'; // Classe pour personnalisation si besoin
    
        // Créer un paragraphe à l'intérieur de la div
        const paragraph = document.createElement('p');
        paragraph.textContent = `Nom : ${DataName}, Valeur : ${DataValeur}`;

    // Ajouter le paragraphe dans la nouvelle div
        newDiv.appendChild(paragraph);

        // Ajouter la div dans le conteneur principal
        Afficher.appendChild(newDiv);

      newDiv.style.display = 'none';



      Afficher.addEventListener('click',() => {

        newDiv.style.display = 'block'
    
    
    })

    
    }





});


// QUAND LES VALUE DE NAME ET DE VALEUR SONT COMPLETE , EN CLIQUANT sur CREER  IL AFFICHE UNE DIV AVEC LES VALEURS  JE LES MET EN DISPLAY  NONE 
// ET PUIS EN CLICQUANT SUR AFFICHER JE MET EN DISPLAY :*
