import * as functions from "./modules/functions";
const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const data = await functions.getData(URL);
console.log(data);
// const instructions: types.StringArray= functions.splitInstructions(data['strInstructions']);
// const recipeContainer: Element = document.querySelector('recipe-container');
