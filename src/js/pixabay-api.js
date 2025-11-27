import axios from 'axios';

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
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
    
}