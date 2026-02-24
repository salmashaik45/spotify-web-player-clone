const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("main-play-btn");
const albumTitle = document.querySelector(".album-title");
const albumArtist = document.querySelector(".album-info");
let isPlaying = false;
function playSong(file, title, artist) {
    audioPlayer.src = file;
    audioPlayer.play();
    isPlaying = true;

    albumTitle.innerText = title;
    albumArtist.innerText = artist;
}
playButton.addEventListener("click", () => {
    if (!audioPlayer.src) return;

    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
    } else {
        audioPlayer.pause();
        isPlaying = false;
    }
});