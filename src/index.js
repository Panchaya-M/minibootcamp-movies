import movieCollection from './movies.json'
import icons from './icons.json'

import './style.scss'

document.addEventListener('DOMContentLoaded', function(){
    const cards = document.getElementById('cards')
    const movies = movieCollection

    console.log(movies)

    movies.forEach(movie => {
        let cardDOM = buildCardDOM(movie)
        console.log(cardDOM)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})

function buildCardDOM(movie) {
    let iconScore = ''
    let score = movie.tomatoScore
    if (score >= 80 ) {
        iconScore += `<img class="icon" src="${icons[0].img}" alt="#" />`
    }
    else if (score < 80 && score >=60) {
        iconScore += `<img class="icon" src="${icons[1].img}" alt="#" />`
    } 
    else {
        iconScore += `<img class="icon" src="${icons[2].img}" alt="#" />`
    }
    
    return (
        `<div class="card">
            <a href="" class="movie-poster">
                <img src="${movie.posters.primary}" alt="">
            </a>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-score">
                    <div class="icon-score">${iconScore}</div>
                    <p class="score">${movie.tomatoScore}%</p>
                </div>
                <div class="movie-dvdReleaseDate">available ${movie.dvdReleaseDate}</div>
            </div>
        </div>`
    )
}