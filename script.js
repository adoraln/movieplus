document.addEventListener('DOMContentLoaded', function () {


    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const moviesList = document.getElementById('moviesList');

    const scrollAmount = 200 * 3;

    rightArrow.addEventListener('click', () => {

        moviesList.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    leftArrow.addEventListener('click', () => {
        moviesList.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});