const wrestler = document.getElementById('Song');
const catchphrase = document.getElementById('Artist');
const addBtn = document.getElementById('addBtn');
const ul = document.getElementById('ul');


addBtn.addEventListener('click', ()=>{
    const newSong = Song.value;
    const newArtist = Artist.value;

    const span = document.createElement('span');
    const small = document.createElement('small');

    const div = document.createElement('div');

    span.innerHTML = newSong;
    small.innerHTML = newArtist;

    div.classList.add('wrestler-info');

    div.append(span);
    div.append(small);

    const li = document.createElement('li');
    li.append(span);
    li.append(small);

    ul.append(li);

    console.log(li);
})
