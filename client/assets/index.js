async function getBeastData() {

    // Reach out to the API
    const response = await fetch("http://localhost:3000/beasts");

    // Extract the beast data from the response
    const beasts = await response.json();

    // Return the data
    return beasts;

}

async function displayBeastData() {

    // Get the beast data;
    const beasts = await getBeastData();

    // Get a reference to the cage
    const cage = document.getElementById("cage");

    // Loop through the beast data
    for (let beast of beasts) {

        // Create an HTML element
        const elem = document.createElement("li");
        const link = document.createElement("a");

        // Set the link's content
        link.textContent = beast["name"];
        link.href = `beast.html?id=${beast["id"]}`;

        // Add the link to the elem
        elem.appendChild(link);

        // Add the element to the cage
        cage.appendChild(elem);

    }

}

displayBeastData();

async function createNewBeast(e) {

    e.preventDefault();

    // Extract the data into an object
    const data = {
        name: e.target.name.value,
        encounterRate: e.target.encounterRate.value 
    }

    // Set the options for the fetch request
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    // Make a fetch request sending the data
    const response = await fetch("http://localhost:3000/beasts", options);

    if (response.status == 201) {
        alert("Current creature created (cleverly)");
        window.location.assign("")
    }
}

const form = document.querySelector("#create-form");
form.addEventListener("submit", createNewBeast);