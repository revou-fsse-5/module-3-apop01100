import { fetchData, ingridientAndMeasureData, splitInstructions } from './functions.js';
import { clear, paragraphElement, listElement, orderListElement, imageElement } from './items.js';

// Makes variable for access elements in index.html file
const body = document.querySelector('body');
const container = document.querySelector('.container');
const recipeRandomButton = document.querySelector('#getRecipeBtn');
const recipeContainer = document.querySelector('.recipe-container');

// Setup size values when display the recipe contents
const bodyHeight = '100%';
const marginSize = '30px 50px 30px 50px';

recipeRandomButton.onclick = async function () {
    const data = await fetchData(); // fetch the data and then assign object data to variable

    const foodName = data.strMeal; // take string food value name from the object
    const foodCategory = data.strCategory; // take string food category from the object
    const foodArea = data.strArea; // take string food area from the object
    const foodImage = data.strMealThumb; // take image URL from the object
    const foodRecipe = data.strInstructions; // take string recipe instructions from the object
    const videoTutorial = data.strYoutube; // take link video from the object
    const ingredients = ingridientAndMeasureData(data); // take ingredients and measures from the object

    const div1 = document.createElement('div'); // make div element
    div1.classList.add('grid-item2'); // add css class to div element
    // add paragraph element as child to div element
    paragraphElement(div1, `Category : ${foodCategory}`);
    paragraphElement(div1, `Indigenous food : ${foodArea}`)
    paragraphElement(div1, `<a href=${videoTutorial} target=_blank >Follow this link to see tutorial video!</a>`);

    clear(recipeContainer); //clear innerHTML content of .recipeContainer

    body.style.height = bodyHeight; // Change height body to 100%
    container.style.margin = marginSize; // add margin in class container

    // Add food name and food image as child in .recipe-container element 
    imageElement(foodName, recipeContainer, foodImage, 'grid-item1')

    // Add div1 element as child in .recipe-container element
    recipeContainer.appendChild(div1);

    // Add unorder list element as child in .recipe-container element
    listElement('Ingredients', recipeContainer, ingredients);

    // Add order list element as child in .recipe-container element
    orderListElement('Instructions', recipeContainer, splitInstructions(foodRecipe));
}
