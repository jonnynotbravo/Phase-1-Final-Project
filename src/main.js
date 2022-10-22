// Decalaring variables
const searchContainer = document.querySelector('#search-container');
const webSearchContainer = document.querySelector('#web-search');
const imageContainer = document.querySelector('#image-search');
const newsContainer = document.querySelector('#news-search');

// Web Search Container event listener and handler
webSearchContainer.addEventListener('click', () => {

    searchContainer.style.display = 'none';

})

// Image Search Container event listener and handler
imageContainer.addEventListener('click', () => {

    searchContainer.style.display = 'none';

})

// News Search Container event listener and handler
newsContainer.addEventListener('click', () => {

    searchContainer.style.display = 'none';
    
});


