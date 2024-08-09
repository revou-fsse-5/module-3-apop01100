import { default as cards } from "./cards";
import * as types  from  "./types";
import { default as functions } from "./functions"

// Create variable for access some HTML elements
const body: HTMLBodyElement | null = document.querySelector('body');
const container: HTMLDivElement | null = document.querySelector('.container');
const recipeContainer: HTMLDivElement | null = document.querySelector('.recipe-container');

// Set configuration attribute for paragraph element card
const configOfParagraph: types.Attributes = {
    class: 'recipe-card-paragraph'
}

// Set configuration attribute for image element card
const configImage: types.ConfigOfImage = {
    image: {
        class: 'recipe-image'
    },
    card: {
        class: 'recipe-card-image'
    }
}

// Set configuration attribute for order list element card
const configOrderList: types.ConfigOfList = {
    type: 'ol'
}

// Set configuration attribute for unorder list element card
const configUnorderList: types.ConfigOfList = {
    type: 'ul'
}

// Set configuration attribute for video element card
const configVideo: types.ConfigOfVideo = {
    video: {
        width: '100%',
        height: '350',
        title: 'YouTube video player',
        class: 'recipe-video',
        frameborder: '0',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        allowFullscreen: '',
        referrerPolicy: 'strict-origin-when-cross-origin',
    }
}

// Function for displaying random recipe when the button on click condition
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
        cards.paragraphElement(recipeContainer, `Indegenous recipe: ${data.area}`, configOfParagraph)
        cards.paragraphElement(recipeContainer, `Category recipe: ${data.category}`, configOfParagraph)
        cards.listElement('Ingredients', recipeContainer, data.ingredients, configUnorderList)
        cards.listElement('Procedure', recipeContainer , data.instructions , configOrderList)
        cards.videoElement('Tutorial Video', recipeContainer, data.video, configVideo)
    }
}

export default {
    display
}