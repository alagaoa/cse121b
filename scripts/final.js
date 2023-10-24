// app.js
import { getRandomCategory, fetchJoke } from './joke.js';

const getJokeButton = document.getElementById("getJoke");
const jokeText = document.getElementById("joke");

getJokeButton.addEventListener("click", async () => {
    const category = getRandomCategory();
    const blacklistFlags = "nsfw,religious,political,racist,sexist,explicit";

    try {
        const data = await fetchJoke(category, blacklistFlags);

        const setup = data.setup || "No setup found.";
        const punchline = data.delivery || "No punchline found.";

        const jokeMessage = `
        Category: ${category}<br>
        Setup: ${setup}<br>
        Punchline: ${punchline}
        `;
        
        jokeText.innerHTML = jokeMessage;
        
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
});
