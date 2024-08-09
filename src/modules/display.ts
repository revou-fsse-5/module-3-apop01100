import * as cards from "./cards";
import * as types from "./types";
import * as functions from "./functions"

const body: HTMLBodyElement | null = document.querySelector('body');
const container: HTMLDivElement | null = document.querySelector('.container');
const recipeContainer: HTMLDivElement | null = document.querySelector('.recipe-container');

const configOfParagraph: types.Attributes = {
    class: 'recipe-card-paragraph'
}

const configImage: types.ConfigOfImage = {
    image: {
        class: 'recipe-image'
    },
    card: {
        class: 'recipe-card-image'
    }
}

const configOrderList: types.ConfigOfList = {
    type: 'ol'
}

const configUnorderList: types.ConfigOfList = {
    type: 'ul'
}

async function display() {
    const URL : string = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const data: types.Meal = await functions.getData(URL);

    if (body) {
        body.style.height = '100%'
        body.style.margin = '50px'
    }

    if (container) {
        container.style.width= '750px'
        container.style.height = '100%'
    }

    if (recipeContainer) {
        cards.clear(recipeContainer);
        cards.imageElement(data.name, recipeContainer, data.image, configImage)
        cards.paragraphElement(recipeContainer, `Indegenouw recipe: ${data.area}`, configOfParagraph)
        cards.paragraphElement(recipeContainer, `Category recipe: ${data.category}`, configOfParagraph)
        cards.listElement('Ingredients', recipeContainer, data.ingredients, configUnorderList)
        cards.listElement('Procedure', recipeContainer , data.instructions , configOrderList)
        cards.videoElement('Video Tutorial', recipeContainer, data.video)
    }
}

export {
    display
}