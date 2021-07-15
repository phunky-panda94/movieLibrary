let movieCard;
let deleteButton;
let text;
let movies = [];

const container = document.getElementById('container');

export function Movie(title, rating, runtime, genre) {
    this.title = title;
    this.rating = rating;
    this.runtime = runtime;
    this.genre = genre;
};

export function addMovie(movie) {
    movies.push(movie);
};

export function displayMovies() {
    movies.forEach(movie => {
        
        // create a card for each movie
        movieCard = document.createElement('div');
        movieCard.classList.add('card');

        // loop through movie details and add to movieCard
        for (let value of Object.values(movie)) {

            text = document.createElement('p');
            text.textContent = `${value}`;
            movieCard.append(text);

        }

        // add card to the container
        container.appendChild(movieCard);

    });
}

export function updateMovies() {

    let movie = movies[movies.length - 1];

    movieCard = document.createElement('div');
    movieCard.classList.add('card');

    deleteButton = document.createElement('button');
    deleteButton.classList.add('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', (e) => {
        container.removeChild(e.target.parentElement);
    });

    for (let value of Object.values(movie)) {

        text = document.createElement('p');
        text.textContent = value;
        movieCard.append(text);

    }

    movieCard.append(deleteButton);
    container.appendChild(movieCard);

}
