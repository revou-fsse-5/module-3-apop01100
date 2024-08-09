function clear(element) {
    element.innerHTML = '';
}
function paragraphElement(parent, text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    parent.appendChild(paragraph);
}
function ListElement(title, parent, items, config) {
    const div = document.createElement('div');
    if (config.attributes) {
        Object.keys(config.attributes).forEach((key) => {
            console.log(key);
        });
    }
    const h3 = document.createElement('h3');
    h3.innerHTML = title;
    const ul = document.createElement(config.type);
    items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    });
    div.appendChild(h3);
    div.appendChild(ul);
    parent.appendChild(div);
}
export { clear, paragraphElement, ListElement, };
