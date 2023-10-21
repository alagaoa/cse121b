const getJokeButton = document.getElementById('getJokeButton');
const jokeDisplay = document.getElementById('jokeDisplay');

getJokeButton.addEventListener('click', () => {
    fetch('https://api.icndb.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            const joke = data.value.joke;
            jokeDisplay.innerHTML = `<p>${joke}</p>`;
        })
        .catch(error => {
            jokeDisplay.innerHTML = `<p>Failed to fetch Chuck Norris joke.</p>`;
        });
});
