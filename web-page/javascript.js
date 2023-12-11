const val = document.getElementById("search");
val.addEventListener("input", debounce(click, 300));
const cardsContainer = document.getElementById("cards");
let debounceTimeout;

async function click(e) {
    e.preventDefault();

    // Get the value from the input field
    const inputValue = val.value;

    // Clear previous timeout to avoid multiple API requests
    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
    }

    // Set a new timeout for debouncing
    debounceTimeout = setTimeout(async () => {
        const jsonval = await fetch(`https://restcountries.com/v3.1/currency/${inputValue}`);

        // Check if the request was successful
        try {
            if (!jsonval.ok) {
                throw new Error(`Error: ${jsonval.status}`);
            }

            const data = await jsonval.json();

            // Clear previous cards
            cardsContainer.innerHTML = "";

            // Create and append cards dynamically
            data.forEach(country => {
                const card = document.createElement("div");
                card.className = "card col mb-3 mx-3";
                card.style = "width: 18rem;";
                let con = document.getElementById("cards");
                con.style.maxWidth = "80%"
                con.style.margin = "auto"
                const img = document.createElement("img");
                img.src = `https://flagsapi.com/${country.cca2}/flat/64.png`;
                img.className = "card-img-top";
                img.alt = country.altSpellings[1]; // Update with the actual alt text

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";

                const title = document.createElement("h5");
                title.className = "card-title";
                title.textContent = "Name : " + " " + country.altSpellings[1];

                const text = document.createElement("p");
                text.className = "card-text";
                text.textContent = "Capital : " + " " + country.capital[0];

                cardBody.appendChild(title);
                cardBody.appendChild(text);

                card.appendChild(img);
                card.appendChild(cardBody);

                cardsContainer.appendChild(card);
                console.log(country);
            });

        } catch (error) {
            console.error(`Error: ${error.message}`);
            // You may want to handle errors here, e.g., show a user-friendly message
        }

        debounceTimeout = null; // Reset debounce timeout after API request is processed
    }, 300); // Adjust the debounce time to your preference
}

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}
