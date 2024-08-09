import * as types from "./types";
import * as functions from "./functions"

function clear(element: HTMLElement): void {
    element.innerHTML = '';
}

function paragraphElement(parent: Element, text: string, config?: types.Attributes): void {
    const paragraph: HTMLParagraphElement = document.createElement('p');
    if (config)
        functions.addAttributes(paragraph, config)
    paragraph.innerHTML = text;
    parent.appendChild(paragraph);
}

function listElement(title: string, parent: HTMLElement, items: string[], config: types.ConfigOfList): void {
    const div = document.createElement('div');

    if (config.attributes)
        functions.addAttributes(div, config.attributes)
    
    const h3: HTMLElement = document.createElement('h3');
    h3.innerHTML = title;

    const ul: HTMLElement = document.createElement(config.type);
    items?.forEach((item: string): void => {
        const li: HTMLElement = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    })

    div.appendChild(h3);
    div.appendChild(ul);
    parent.appendChild(div);
}

function imageElement(title: string, parent: HTMLElement, source: string, config?:types.ConfigOfImage): void {
    const div: HTMLDivElement | null = document.createElement('div');

    if (config?.card)
        functions.addAttributes(div, config.card);

    const h3: HTMLHeadingElement | null = document.createElement('h3');
    h3.innerHTML = title;

    const img: HTMLImageElement | null = document.createElement('img');
    if (config?.image)
        functions.addAttributes(img, config.image);
    img.src = source;

    div.appendChild(h3);
    div.appendChild(img);
    parent.appendChild(div);
}

function videoElement(title: string, parent: HTMLElement, source: string, config?:types.ConfigOfVideo): void {
    const div: HTMLDivElement | null  = document.createElement('iframe');

    if (config?.card) 
        functions.addAttributes(div, config.card)
    

    const h3: HTMLHeadElement | null = document.createElement('h3');
    h3.innerHTML = title;

    const video: HTMLIFrameElement | null =  document.createElement('iframe');
    if (config?.video) 
        functions.addAttributes(video, config.video);
    const videoId: string | null = functions.getId(source);
    console.log(`Video ID: ${videoId}`)
    const sourceEmbed: string = `//www.youtube.com/embed/${videoId}`;
    video.src = sourceEmbed;

    div.appendChild(h3);
    div.appendChild(video);
    parent.appendChild(div);
}

export {
    clear,
    paragraphElement,
    listElement,
    imageElement,
    videoElement,
}