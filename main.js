import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js"

// const getRandomMovieButton = document.querySelector(".find-movie")
// getRandomMovieButton.addEventListener("click", getMovie)

// function getMovie() {
//   const id = Math.floor(Math.random() * 1000) + 1

//   // const url = "https://api.themoviedb.org/3/movie/550?api_key=c765089e4d87975bccca6ee5aaa565c5"
//   const url = `https://api.themoviedb.org/3/movie/${id}?${API_KEY}&${language}`

//   axios
//     .get(url)
//     .then((response) => {
//       const data = response.data

//       film.innerHTML = `
//     <div>
//       <img class="movie-poster" src ='${
//         IMG_URL + data.poster_path
//       }' alt="Poster do filme."/>
//       <p class="film-popularity">Nota: ${data.vote_average}</p>
//     </div>
//     <div>
//       <h2 class="movie-title">${data.title}</h2>
//       <p class='movie-description'>${data.overview}</p>
//     <div/>
//     `
//     })
//     .catch((error) => {
//       film.innerHTML = `
//       <div id="text"><div/>
//     `
//     })
// }

//codigo da pessoa

const changeMovie = document.querySelector(".find-movie")
changeMovie.addEventListener("click", getMovie)

function getMovie() {
  const id = Math.floor(Math.random() * 1000) + 1

  const url = `${BASE_URL}${id}?${API_KEY}&${language}`

  axios
    .get(url)
    .then((response) => {
      const data = response.data

      film.innerHTML = `
      <div>
          <img class="movie-poster" src="${
            IMG_URL + data.poster_path
          }" alt="Poster do filme.">
          <p class="film-popularity">Nota: ${data.vote_average}</p>
      </div>
      <div>
          <h2 class="movie-title">${data.title}</h2>
          <p class="movie-description">${data.overview}</p>
      </div>
      `
    })
    .catch((error) => {
      film.innerHTML = `
      <div id="error-message">
          <h2 class="movie-title">HMM...Que pena, hoje não é dia de assistir filme.</h2>
      </div>
      `
    })
}

// const movieContainer = document.querySelector(".movie-info")
// const moviePoster = document.querySelector(".movie-poster")
// const movieTitle = document.querySelector(".movie-title")
// const movieDescription = document.querySelector(".movie-description")
// const getRandomMovieButton = document.querySelector(".find-movie")

// const API_KEY = "c765089e4d87975bccca6ee5aaa565c5"
// const language = "language=pt-BR"

// getRandomMovieButton.addEventListener("click", async () => {
//   const randomId = Math.floor(Math.random() * 1000)
//   const movie = await getMovie(randomId)
//   renderMovie(movie)
// })

// async function getMovie(randomId) {
//   const movie = await fetch(
//     `https://api.themoviedb.org/3/movie/${randomId}?api_key=${API_KEY}&${language}`
//   )
//   const movieData = await movie.json()
//   return movieData
// }

// function renderMovie(movieData) {
//   movieContainer.style.display = "flex"
//   moviePoster.src = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
//   movieTitle.textContent = movieData.title
//   movieDescription.textContent = movieData.overview
// }
