const getJokeButton = document.getElementById('getJokeButton');
const jokeDisplay = document.getElementById('jokeDisplay');

getJokeButton.addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
        .then(response => response.json())
        .then(data => {
            const joke = data.joke;
            jokeDisplay.innerHTML = `<p>${joke}</p>`;
        })
        .catch(error => {
            jokeDisplay.innerHTML = `<p>Failed to fetch Chuck Norris joke.</p>`;
        });
});
