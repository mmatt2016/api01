const baseURL = `https://cat-fact.herokuapp.com`;
let submitBtn = document.getElementById('submitBtn');
let animalChoice = document.querySelector('.animalOptions');
let form = document.querySelector('.form');
let factResults = document.querySelector(".returnInfo");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);


    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animalChoice.value}&amount=1`) 
    .then(response => response.json())
    .then(data => {
        let finalResults = data.text;
        console.log(finalResults);
        let paragraph = document.createElement("p");
        paragraph.innerText= finalResults;
        factResults.appendChild(paragraph);
    
    })
})



