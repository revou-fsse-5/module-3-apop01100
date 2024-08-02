// function for clear innerHTML content form specific element
const clear = (element) => {
    element.innerHTML = '';
}

// Function for build paragraph element
const paragraphElement = (parent, text) => {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    parent.appendChild(paragraph);
}

// Function for build unorder list element
const listElement = (title, parent, items, cls = '') => {
    const div = document.createElement('div');
    if (cls !== '') {
        div.classList.add(`${cls}`);
    }
    const h3 = document.createElement('h3');
    h3.innerHTML = title;
    const ul = document.createElement('ul');
    items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    });
    div.appendChild(h3);
    div.appendChild(ul);
    parent.appendChild(div);
}

// Function for buid order list element
const orderListElement = (title, parent, items, cls = '') => {
    const div = document.createElement('div');
    if (cls !== '') {
        div.classList.add(`${cls}`);
    }
    const h3 = document.createElement('h3');
    h3.innerHTML = title;
    const ol = document.createElement('ol')
    items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        ol.appendChild(li);
    });

    console.log(items);

    div.appendChild(h3);
    div.appendChild(ol)
    parent.appendChild(div);
}

// Function for build image element
const imageElement = (title, parent, url, cls = '') => {
    const div = document.createElement('div');
    if (cls !== '') {
        div.classList.add(`${cls}`);
    }
    const h3 = document.createElement('h3');
    h3.innerHTML = title;
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('recipe-image');
    
    console.log(url);

    div.appendChild(h3);
    div.appendChild(img);
    parent.appendChild(div);
}

export {
    clear,
    paragraphElement,
    listElement,
    orderListElement,
    imageElement
}