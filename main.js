import { Movie, addMovie, displayMovies, updateMovies } from "/movie.js";

const form = document.getElementById('form');
const modal = document.getElementById('modal');

// Add Movie button
const addMovieButton = document.getElementById('add-movie');

addMovieButton.addEventListener('click', () => {
    modal.style.display = "flex";
});

// Close button
const closeForm = document.getElementById('close-form');

closeForm.addEventListener('click', () => {
    modal.style.display = "none";
});

// Submit form
form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    let movie = new FormData(form);

    // Call addMovie function with details as parameters
    let runtime = String(movie.get('hours')) + 'hr ' + String(movie.get('minutes')) + 'mins';

    addMovie(new Movie(movie.get('title'), movie.get('rating'), runtime, movie.get('genre')));
    
    updateMovies();

    modal.style.display = "none";

    form.reset();

});

// Cancel button
const cancel = document.getElementById('cancel');

cancel.addEventListener('click', () => {
    modal.style.display = "none";
    form.reset();
});




