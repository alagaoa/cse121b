// Function to fetch a random dog image from the Dog CEO's API
export async function getRandomDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error('Failed to fetch dog image');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
