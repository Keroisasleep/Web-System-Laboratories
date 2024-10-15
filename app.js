const songInput = document.getElementById('song');
const artistInput = document.getElementById('Artist');
const addBtn = document.getElementById('addBtn');
const songList = document.getElementById('Songlist');
const searchInput = document.querySelector('.list input');

addBtn.addEventListener('click', addSong);

songList.addEventListener('click', deleteSong);

searchInput.addEventListener('keyup', searchSongs);

function addSong() {
    const songName = songInput.value.trim();
    const artistName = artistInput.value.trim();

    if (songName === '' || artistName === '') {
        alert('Please provide both song name and artist.');
        return;
    }

    const li = document.createElement('li');

    const songInfoDiv = document.createElement('div');
    songInfoDiv.classList.add('song-info');
    const songSpan = document.createElement('span');
    songSpan.textContent = songName;
    const artistSmall = document.createElement('small');
    artistSmall.textContent = artistName;

    songInfoDiv.appendChild(songSpan);
    songInfoDiv.appendChild(artistSmall);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';

    li.appendChild(songInfoDiv);
    li.appendChild(deleteBtn);

    songList.appendChild(li);

    songInput.value = '';
    artistInput.value = '';
}

function deleteSong(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        songList.removeChild(li);
    }
}

function searchSongs(e) {
    const searchText = e.target.value.toLowerCase();


    const songs = document.querySelectorAll('#Songlist li');

    songs.forEach((song) => {
        const songName = song.querySelector('span').textContent.toLowerCase();
        const artistName = song.querySelector('small').textContent.toLowerCase();

        if (songName.includes(searchText) || artistName.includes(searchText)) {
            song.style.display = '';
        } else {
            song.style.display = 'none';
        }
    });
}
