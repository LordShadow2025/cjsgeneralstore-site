
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const volumeSlider = document.getElementById('volume-slider');

const playlist = ['assets/audio/cjgs_snippet_mix.mp3'];

let isPlaying = false;

// Set initial volume to 50%
bgMusic.volume = 0.5;

musicToggle.addEventListener('click', () => {
  if (!isPlaying) {
    bgMusic.src = playlist[0];
    bgMusic.play().then(() => {
      isPlaying = true;
    });
  } else {
    bgMusic.pause();
    isPlaying = false;
  }
});

// Volume control handler
volumeSlider.addEventListener('input', () => {
  bgMusic.volume = volumeSlider.value;
});
