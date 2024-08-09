import * as functions from "./modules/functions";
import * as types from "./modules/types";
import * as display from "./modules/display";

const URL : string = 'https://www.themealdb.com/api/json/v1/1/random.php';

const data: types.Meal = await functions.getData(URL);

console.log(data);
// // const instructions: types.StringArray= functions.splitInstructions(data['strInstructions']);

// const recipeContainer: Element | null = document.querySelector('.recipe-container');
const body: HTMLElement | null = document.querySelector('body');
const recipeRandomButton: HTMLElement | null = document.querySelector('#getRecipeBtn');


recipeRandomButton?.addEventListener('click', display.display)

