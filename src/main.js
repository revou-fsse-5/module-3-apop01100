const recipeContainer = document.querySelector('.recipe-container')
const recipeRandomButton = document.querySelector('#getRecipeBtn')
const recipeTitle = document.querySelector('.recipe-title');
const recipeImage = document.querySelector('img');
const recipeInstructions = document.querySelector('.recipe-instructions');

const fetchData = async function () {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    try {
        const response = await fetch(url,
            {cache: 'no-cache',
             mode: 'cors',
             redirect: 'follow',
                                        
        });

        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
        const json = await response.json()
        return json;
    } catch (error) {
        console.error(error.message);
    }
}

recipeRandomButton.onclick = async function () {
    const data = await fetchData();
    recipeTitle.innerHTML = data.meals[0].strMeal;
    recipeImage.src = data.meals[0].strMealThumb;
    recipeImage.style.width = "200px"
    recipeInstructions.innerHTML = data.meals[0].strInstructions;
}
