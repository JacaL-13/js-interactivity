const message = document.querySelector('#message')
const movieList = []

function addMovie(event) {
    event.preventDefault()

    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')

    if (movieList.includes(inputField.value)) {
        message.textContent = 'Movie already in list'
        revealMessage()
        inputField.value = ''
    } else if (inputField.value !== '') {
        movieList.push(inputField.value)

        movieTitle.textContent = inputField.value
        movieTitle.addEventListener('click', crossOffMovie)
        movie.appendChild(movieTitle)

        const delBtn = document.createElement('button')
        delBtn.textContent = 'X'
        delBtn.addEventListener('click', deleteMovie)

        movie.appendChild(delBtn)
        document.querySelector('ul').appendChild(movie)
        inputField.value = ''
    } else {
        message.textContent = 'Please enter a movie title.'
        revealMessage()
    }
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    movieList.splice(movieList.indexOf(event.target.parentNode.firstChild), 1)
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.toggle('hide')
    }, 2000)
}

document.querySelector('form').addEventListener('submit', addMovie)