document.addEventListener('DOMContentLoaded', function() {
    const postContainer = document.getElementById('post-container');
    const cities = ['Mersin', 'Antalya', 'Mugla']; 

    cities.forEach(city => {
        const imgSrc = `image/${city.toLowerCase()}.jpg`; 
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <img src="${imgSrc}" alt="${city}">
            <h3><a href="#" class="city-link" data-city="${city}">${city}</a></h3>
        `;
        postContainer.appendChild(postDiv);
    });

    document.querySelectorAll('.city-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const city = this.getAttribute('data-city');
            fetchWikipediaDescription(city).then(description => {
                document.getElementById('city-name').innerText = city;
                document.getElementById('guide-content').innerHTML = description;
                document.getElementById('city-guide').style.display = 'block';
                document.getElementById('blog-posts').style.display = 'none';
            });
        });
    });

    document.getElementById('back-button').addEventListener('click', function() {
        document.getElementById('city-guide').style.display = 'none';
        document.getElementById('blog-posts').style.display = 'block';
    });
});

function fetchWikipediaDescription(city) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.extract)
        .catch(error => {
            console.error('Error fetching Wikipedia data:', error);
            return 'Description not available';
        });
}
