// let movies = [];

const movies = window.localStorage;

const container = document.getElementById('container');

export class Movie {
    constructor(title, rating, runtime, genre) {
        this._title = title;
        this._rating = rating;
        this._runtime = runtime;
        this._genre = genre;
    };

    get title() {
        return this._title;
    }

};

export function addMovie(movie) {
    // movies.push(movie);
    movies.setItem(movie.title, JSON.stringify(movie));
};

export function displayMovies() {

    let movieCard;
    let text;

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

    let deleteButton;
    let movie = JSON.parse(movies.getItem(movies.key(movies.length-1)));
    let movieCard;
    let text;

    movieCard = document.createElement('div');
    movieCard.classList.add('card');

    deleteButton = document.createElement('button');
    deleteButton.classList.add('button');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', (e) => {
        container.removeChild(e.target.parentElement);
        movies.removeItem(e.target.parentElement.firstChild.innerText);
    });

    for (let value of Object.values(movie)) {

        text = document.createElement('p');
        text.textContent = value;
        movieCard.append(text);

    }

    movieCard.append(deleteButton);
    container.appendChild(movieCard);

}
