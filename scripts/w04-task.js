/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Arthur Alagao",
    photo : "images/wedding.jpg",
    favoriteFoods : ["chicken", "shrimp", "rice", "sushi"],
    hobbies : ["basketball", "board games", "computer", "hiking"],
    placesLived : []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place : "San Francisco",
        length: "10 years"
    }
)

myProfile.placesLived.push(
    {
        place : "Philippines",
        length: "14 years"
    }
)


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

var imgElement = document.getElementById('photo');
imgElement.src = myProfile.photo;

var imgElement = document.getElementById('photo');
imgElement.alt = myProfile.name;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */

var dlElement = document.getElementById('places-lived');

    myProfile.placesLived.forEach(function (location) {
        var dtElement = document.createElement('dt');
        dtElement.textContent = location.place;

        var ddElement = document.createElement('dd');
        ddElement.textContent = location.length;


    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});