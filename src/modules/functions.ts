import * as cards from "./cards";
import * as types from "./types";

async function getData(endpoint: string): Promise<types.Meal> {
    try{
        const response: Response = await fetch(endpoint);

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`)

        const data = await response.json()
        const meal: types.Meal = {
            name: data.meals[0].strMeal,
            category: data.meals[0].strCategory,
            area: data.meals[0].strArea,
            image: data.meals[0].strMealThumb,
            video: data.meals[0].strYoutube,
            ingredients: ingredientsAndMeasures(data.meals[0]),
            instructions: splitInstructions(data.meals[0].strInstructions)
        }
    
        return meal
    } catch(error){
        console.log('failed to fetch data')
        throw error
    }
}

function matchPattern(pattern: string, text: string): boolean {
    const validation: RegExp = new RegExp(`^${pattern}\\d+$`);
    return validation.test(text);
}

function splitInstructions(text: string): string[] {
    const results: string[] = text?.split('.');
    return results
}

function ingredientsAndMeasures(data: {[key: string]: string}): string[] {
    let ingredients: string[] = [];
    let measures: string[] = [];

    Object.keys(data).forEach((value) => {
        if (matchPattern('strIngredient', `${value}`)) {
            ingredients.push(data[value]);
        } else if (matchPattern('strMeasure', `${value}`)) {
            measures.push(data[value]);
        }
    })

    ingredients = ingredients.filter(word => word !== ' ' && word !== '' && word !== null);
    measures = measures.filter(word => word !== ' ' && word !== '' && word !== null);

    const results: string[] = [];

    ingredients.forEach((value) => {
        const index: number = ingredients.indexOf(value);
        if (measures[index]) {
            results.push(`${value} (${measures[index]})`);
        } else {
            results.push(`${value}`);
        }
    })

    return results
}

function addAttributes(element: HTMLElement, attributes: types.Attributes): void {
    if (attributes) {
        Object.keys(attributes).forEach((key) => {
            console.log(key)
            if (attributes)
                element.setAttribute(key, attributes[key]);
        })
    }
}

function getId(url: string): string | null {
    const regExp: RegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match: RegExpMatchArray | null  = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}

export {
    getData,
    splitInstructions,
    addAttributes,
    getId,
}