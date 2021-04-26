const baseURL = `https://cat-fact.herokuapp.com`;
let submitBtn = document.getElementById('.submitBtn');
let animalChoice = document.querySelector('.animalOptions');
let form = document.querySelector('.form');
let factResults = document.querySelector(".returnInfo");

submitBtn.addEventListener('click', fetchResults());
function fetchResults(e) {
    e.preventDefault();
    console.log(e);
    url = baseURL + 'facts' + 'random?animal_type=' + animalChoice.value + "&amount=1";
}
    
function displayResults() {
    fetch('url') 
    .then(response => response.text())
    .then(data => {
        let finalResults = JSON.parse(data).text;
        console.log(finalResults);
        let paragraph = document.createElement("p");
        let node = document.createTextNode(facts);
        paragraph.appendChild(node);
        facts.appendChild(paragraph);
    
        
    })
}



