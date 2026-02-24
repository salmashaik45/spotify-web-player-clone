const albumCover = document.getElementById("album-cover");
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("main-play-btn");
const albumTitle = document.querySelector(".album-title");
const albumArtist = document.querySelector(".album-info");

const playIcon = "./assets/player_icon3.png";
const pauseIcon = "./assets/player_pause.png";

function playSong(file, title, artist, image) {
    audioPlayer.src = file;
    audioPlayer.play();
    isPlaying = true;

    albumTitle.innerText = title;
    albumArtist.innerText = artist;
    albumCover.src = image;

    playButton.src = pauseIcon;
}

playButton.addEventListener("click", () => {
    if (!audioPlayer.src) return;

    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.src = pauseIcon;
    } else {
        audioPlayer.pause();
        playButton.src = playIcon;
    }
});

audioPlayer.addEventListener("ended", () => {
    playButton.src = playIcon;
});