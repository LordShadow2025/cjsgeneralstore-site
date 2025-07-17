
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

const playlist = ['assets/audio/cjgs_snippet_mix.mp3'];

let isPlaying = false;

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
