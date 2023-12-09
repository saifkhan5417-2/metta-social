document.getElementById("btn").addEventListener("click", click);
const val = document.getElementById("search");
const cardsContainer = document.getElementById("cards");
const arr = [];

async function click(e) {
    e.preventDefault();

    // Get the value from the input field
    const inputValue = val.value;

    // Update the API endpoint based on the user input
    const jsonval = await fetch(`https://restcountries.com/v3.1/currency/${inputValue}`);
    
    // Check if the request was successful
    if (jsonval.ok) {
        const data = await jsonval.json();
        arr.push(data);

        // Clear previous cards
        cardsContainer.innerHTML = "";
        cardsContainer.style.maxWidth = "80%"
        cardsContainer.style.margin = "auto"
        // max-width: 80%;
        // margin: auto;

        // Create and append cards dynamically
        data.forEach(country => {
            const card = document.createElement("div");
            card.className = "card col mb-3 mx-3";
            card.style = "width: 18rem;";

            const img = document.createElement("img");
            img.src = `https://flagsapi.com/${country.cca2}/flat/64.png`
            img.className = "card-img-top";
            img.alt = country.altSpellings[1]; // Update with the actual alt text

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = "Name : "+" "+country.altSpellings[1];

            const text = document.createElement("p");
            text.className = "card-text";
            text.textContent = "Capital : "+" "+country.capital[0];

            cardBody.appendChild(title);
            cardBody.appendChild(text);

            card.appendChild(img);
            card.appendChild(cardBody);

            cardsContainer.appendChild(card);
            console.log(country);
        });
    } else {
        console.error(`Error: ${jsonval.status}`);
    }
}
