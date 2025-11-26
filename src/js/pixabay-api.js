const API_KEY = '53410313-8865f85a69864d0c0c63fb400';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });
    const url = `${BASE_URL}?${params}`;
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}