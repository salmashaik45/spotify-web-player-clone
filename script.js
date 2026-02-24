const audioPlayer = document.getElementById("audio-player");

function playSong(file, title, artist) {
    audioPlayer.src = file;
    audioPlayer.play();

    document.querySelector(".album-title").innerText = title;
    document.querySelector(".album-info").innerText = artist;
}