// Import the required elements
import { getRandomDogImage } from './api.js';

const fetchButton = document.getElementById('fetchButton');
const dogImageContainer = document.getElementById('dogImageContainer');

fetchButton.addEventListener('click', async () => {
    try {
        const data = await getRandomDogImage();
        const dogImage = data.message;

        // Update the DOM with the fetched dog image
        dogImageContainer.innerHTML = `<img src="${dogImage}" alt="Random Dog">`;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
});



