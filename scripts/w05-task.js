/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = []; // Use let to allow reassignment

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement('article');
    const h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;
    const imgElement = document.createElement('img');
    imgElement.src = temple.imageUrl; // Use the correct property names
    imgElement.alt = temple.location; // Use the correct property names

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch() */
let originalTempleList = [];

const getTemples = async () => {
  const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
  if (response.ok) {
    originalTempleList = await response.json();
    templeList = [...originalTempleList]; // Create a copy of the original data
  }
  displayTemples(templeList);
};

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
      templeList = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
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
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();
