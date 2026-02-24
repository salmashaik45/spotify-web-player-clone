// Get audio element
const audioPlayer = document.getElementById("audio-player");

// Get play button (make sure your HTML has id="main-play-btn")
const playButton = document.getElementById("main-play-btn");

// Get album title & artist
const albumTitle = document.querySelector(".album-title");
const albumArtist = document.querySelector(".album-info");

// Track state
let isPlaying = false;

// Function to play selected song
function playSong(file, title, artist) {
    audioPlayer.src = file;
    audioPlayer.play();
    isPlaying = true;

    albumTitle.innerText = title;
    albumArtist.innerText = artist;
}

// Play / Pause button logic
playButton.addEventListener("click", () => {

    // If no song selected, do nothing
    if (!audioPlayer.src) return;

    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
    } else {
        audioPlayer.pause();
        isPlaying = false;
    }
});