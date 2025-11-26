import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const searchForm = document.querySelector('.form');
const galleryContainer = document.querySelector('.gallery');

async function onSearch(event) {
    event.preventDefault();
    const query = event.currentTarget.elements['search-text'].value.trim();
    if (query === '') {
        return;
    }
    clearGallery();
    showLoader();

    event.currentTarget.reset();
    
    try {
        const data = await getImagesByQuery(query);
        
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        } else {
            createGallery(data.hits);
        }

    } catch (error) {
        console.error(error);
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please check your network or API key.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
}

if (searchForm) {
    searchForm.addEventListener('submit', onSearch);
}