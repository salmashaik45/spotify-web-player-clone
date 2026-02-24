const progressBar = document.querySelector(".progress-bar");
const currentTimeEl = document.querySelector(".curr-time");
const totalTimeEl = document.querySelector(".tot-time");
const albumCover = document.getElementById("album-cover");
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("main-play-btn");
const albumTitle = document.querySelector(".album-title");
const albumArtist = document.querySelector(".album-info");
let isPlaying = false;

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

audioPlayer.addEventListener("timeupdate", () => {
    if (!audioPlayer.duration) return;

    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progressPercent;

    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    totalTimeEl.textContent = formatTime(audioPlayer.duration);
});

progressBar.addEventListener("input", () => {
    if (!audioPlayer.duration) return;

    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

function formatTime(time) {
    if (isNaN(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}