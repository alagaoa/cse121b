// joke.js
export function getRandomCategory() {
    const jokeCategories = ["Programming", "Miscellaneous", "Pun", "Spooky", "Christmas"];
    return jokeCategories[Math.floor(Math.random() * jokeCategories.length)];
}

export async function fetchJoke(category, blacklistFlags) {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?blacklistFlags=${blacklistFlags}`);
    
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return response.json();
}
