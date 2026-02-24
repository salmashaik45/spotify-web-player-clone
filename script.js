const audioPlayer = document.getElementById("audio-player");

function playSong(file, title, artist) {
    audioPlayer.src = file;
    audioPlayer.play();
    isPlaying = true;

    document.querySelector(".album-title").innerText = title;
    document.querySelector(".album-info").innerText = artist;
}
const playButton = document.querySelector(
  ".player-control-icon[style*='2rem']"
);

let isPlaying = false;

playButton.addEventListener("click", () => {
    if (!audioPlayer.src) return;
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer.play();
        isPlaying = true;
    }
});