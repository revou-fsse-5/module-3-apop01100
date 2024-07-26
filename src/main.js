// Makes variable for access elements in index.html file
const body = document.querySelector('body');
const recipeRandomButton = document.querySelector('#getRecipeBtn');
const recipeTitle = document.querySelector('.recipe-title');
const recipeImage = document.querySelector('.recipe-image');
const recipeInstructions = document.querySelector('.recipe-instructions');

// Setup size values when display the recipe contents
let widthImage = '200px';
let bodyHeight = '100%';

// Fetch function for takes data from API random recipe (https://www.themealdb.com/api/json/v1/1/random.php)
const fetchData = async function () {
    // API URL
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    try {
        const response = await fetch(url); // fetch process

        // Condition for response doesn't fetch the data, will throw the Error
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }

        const json = await response.json()
        return json; // object return
    } catch (error) {
        console.error(error.message);
    }
}

recipeRandomButton.onclick = async function () {
    const data = await fetchData(); // fetch the data and then assign object data to variable

    let foodName = data.meals[0].strMeal; // take food value name from object
    let foodImage = data.meals[0].strMealThumb; // take image URL from object
    let foodRecipe = data.meals[0].strInstructions; // take recipe instructions from object

    body.style.height = bodyHeight; // Change height body to 100%
    recipeTitle.innerHTML = foodName; // Set food name to inner h2 element
    recipeImage.src = foodImage; // Set image food with URL to src img element
    recipeImage.alt = foodImage; // Set food name to alt img element
    recipeImage.style.width = widthImage; // Set width img element
    recipeInstructions.innerHTML = foodRecipe; // Set recipe instructions to inner p element
}
