
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const volumeSlider = document.getElementById('volume-slider');

const playlist = ['assets/audio/cjgs_snippet_mix.mp3'];

let isPlaying = false;

// Set the audio source immediately
bgMusic.src = playlist[0];
bgMusic.volume = 0.5;

// Attempt to autoplay on load
window.addEventListener('load', () => {
  // Try to play automatically
  bgMusic.play().then(() => {
    isPlaying = true;
  }).catch(() => {
    // Autoplay was blocked, wait for user interaction
    isPlaying = false;
  });
});

// Play/Pause toggle
musicToggle.addEventListener('click', () => {
  if (!isPlaying) {
    bgMusic.play().then(() => {
      isPlaying = true;
    });
  } else {
    bgMusic.pause();
    isPlaying = false;
  }
});

// Volume slider
volumeSlider.addEventListener('input', () => {
  bgMusic.volume = volumeSlider.value;
});
