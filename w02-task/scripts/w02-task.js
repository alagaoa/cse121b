/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Arthur Alagao';
let currentYear = 2023 ;
let profilePicture = "images/wedding.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent += currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute("alt", profilePicture);





/* Step 5 - Array */
favoriteFoods = ['rice', 'chicken', 'seafood']
const favoriteFoodsString = favoriteFoods.join(", ");
foodElement.innerHTML = `${favoriteFoodsString}`;
const newFavoriteFood = "Pasta";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

