interface Recipe {
    meals : { [key: string]: null | string | undefined}[];
}

interface Attributes {
    [key: string]: string;
}

interface ConfigOfList {
    type: 'ol' | 'ul'
    attributes?: Attributes
}

interface ConfigOfImage {
    image?: Attributes
    card?: Attributes
}

interface ConfigOfVideo {
    video?: Attributes
    card?: Attributes
}


interface Meal {
    name: string
    category: string
    area: string
    image: string
    video: string
    ingredients: string[]
    instructions: string[]
}

export {
    Recipe,
    Attributes,
    ConfigOfList,
    ConfigOfImage,
    Meal,
    ConfigOfVideo
}