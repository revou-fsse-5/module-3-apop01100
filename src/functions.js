// Fetch function for takes data from API random recipe (https://www.themealdb.com/api/json/v1/1/random.php)
const fetchData = async () => {
    // API URL
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    try {
        const response = await fetch(url); // fetch process

        // Condition for response doesn't fetch the data, will throw the Error
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }

        const json = await response.json();

        return json.meals[0];//return meals object

    } catch (error) {
        console.error(error.message);
    }
}

const matchPattern = (pat, txt) => {
    let pattern = new RegExp(`^${pat}\\d+$|^NULL$|^\w$`);
    return pattern.test(txt);
}

// Filtering instruction text
const splitInstructions = (text) => {
    const result = text
    .split(/\r?\n\r?\n/)
    .flatMap(paragraph => paragraph.split(/(?<!\w\.\w.)(?<![A-Z][a-z][.])(?<=\.|\?|\!)\s/))
    .filter(sentence => /^[A-Z]/.test(sentence.trim()))
    .filter(sentence => /^(?!STEP \d+)/.test(sentence))
    .map(sentence => sentence.trim());
  
    return result;
}

// Function for combine ingredients and measures to one array
const ingridientAndMeasureData = (data) => {
    let ingredients = [];
    let measures = [];

    Object.keys(data).forEach(function (key) {
        if (matchPattern('strIngredient', `${key}`)) {
            ingredients.push(data[key]);
        } else if (matchPattern('strMeasure', `${key}`)) {
           measures.push(data[key]);
        }
    })

    ingredients = ingredients.filter(word => word !== ' ' && word !== '' && word !== null);
    measures = measures.filter(word => word !== ' ' && word !== '' && word !== null);
    
    let ingredientsMeasures = [];

    ingredients.forEach(function (value) {
        let index = ingredients.indexOf(value);
        ingredientsMeasures.push(`${value} (${measures[index]})`);
    })

    return ingredientsMeasures;
}

export {
    fetchData,
    splitInstructions,
    ingridientAndMeasureData
}