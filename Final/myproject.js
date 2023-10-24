// app.js

const getJokeButton = document.getElementById("getJoke");
const jokeText = document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"


let results = null;
async function getJoke(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
    getJokeButton.addEventListener("click", async () => {
        const category = getRandomCategory();
        const blacklistFlags = "nsfw,religious,political,racist,sexist,explicit";
    })}





