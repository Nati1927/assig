// java.js

async function fetchData() {
    const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '35d4d4d649mshe33e0059dffab29p17ca15jsnae05a2daf827',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const list = data.d;

        const moviesContainer = document.querySelector('.movies');

        list.forEach(item => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movieHTML = `<div class="movie"><img src="${poster}" alt="${name}"><h2>${name}</h2></div>`;
            moviesContainer.innerHTML += movieHTML;
        });
    } catch (error) {
        console.error(error);
    }
}

// Call the async function
fetchData();
