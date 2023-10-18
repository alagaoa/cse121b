/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
const templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
    
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    })
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
    const data = await response.json();
    templeList = data;

    }
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'utah':
            templeList = temples.filter(temple => temple.location.includes('Utah'));
            break;
        case 'notutah':
            templeList = temples.filter(temple => !temple.location.includes('Utah'));
            break;
        case 'older':
            templeList = temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
            break;
        case 'all':
            templeList = temples;
            break;
        default:
            templeList = temples;
            break;
    }

    displayTemples(templeList);
};

    



/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();