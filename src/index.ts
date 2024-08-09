import { default as show } from "./modules/display";

const recipeRandomButton: HTMLElement | null = document.querySelector('#getRecipeBtn');
recipeRandomButton?.addEventListener('click', show.display)

