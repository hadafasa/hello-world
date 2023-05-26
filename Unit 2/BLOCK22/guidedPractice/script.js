// script.js

async function fetchAllSongs() {
    const response = await fetch('http://fsa-async-await.herokuapp.com/api/guided-practice/songs');
    const songs = await response.json();
    return songs;
}

// function renderAllSongs(songs) {
//     const songContainer = document.getElementById('song-container');

//     // clear previous content
//     songContainer.innerHTML = '';

//     // loop through the songs and create HTML elements to display them
//     songs.forEach(song => {
//         const songElement = document.createElement('div');
//         songElement.textContent = `${song.title} - ${song.artist}`;
//         songContainer.appendChild(songElement);
//     });
// }

function renderAllSongs(songs) {
    const songContainer = document.getElementById('song-container');

    // clear previous content
    songContainer.innerHTML = '';

    // loop through the songs and create html elements to display them
    songs.forEach(song => {
        const songElement = document.createElement('div');

        // check if artist proptery exists
        if (song.artist) {
            songElement.textContent = `${song.title} - ${song.artist}`;
          } else {
            songElement.textContent = song.title;
          }
      
          songContainer.appendChild(songElement);
        });
}

async function addNewSong(song) {
    const response = await fetch('http://fsa-async-await.herokuapp.com/api/guided-practice/songs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(song)
    });
    const newSong = await response.json();
    return newSong;
}

function renderNewSongForm() {
    const formContainer = document.getElementById('new-song-form');

    // create the form element
    const form = document.createElement('form');

    // create input fields
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');

    const artistInput = document.createElement('input');
    artistInput.setAttribute('type', 'text');
    artistInput.setAttribute('placeholder', 'Artist');

    const genreInput = document.createElement('input');
    genreInput.setAttribute('type', 'text');
    genreInput.setAttribute('placeholder', 'Genre');

    const releaseDateInput = document.createElement('input');
    releaseDateInput.setAttribute('type', 'text');
    releaseDateInput.setAttribute('placeholder', 'Release Date');

    // create submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Add Song';

    // append input fields and submit button to the form
    form.appendChild(titleInput);
    form.appendChild(artistInput);
    form.appendChild(genreInput);
    form.appendChild(releaseDateInput);
    form.appendChild(submitButton);

    // append the form to the form container
    formContainer.appendChild(form);

    // add event listener to the form submit event
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // prevent form submission

        // create a song object with form values
        const song = {
            title: titleInput.value,
            artist: artistInput.value,
            genre: genreInput.value,
            releaseDate: releaseDateInput.value,
        };

        // call addNewSong function and console.log the result
        const newSong = await addNewSong(song);
        console.log('New song', newSong);

        // clear form inputs
        titleInput.value = '';
        artistInput.value = '';
        genreInput.value = '';
        releaseDateInput.value = '';
    });
}

async function init() {
    const songs = await fetchAllSongs();
    renderAllSongs(songs);
    renderNewSongForm();
}

init();
