
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

const playlist = [
  'assets/audio/track1.wav',
  'assets/audio/track2.wav',
  'assets/audio/track3.wav'
];

let currentTrack = 0;
let isPlaying = false;

function playNextTrack() {
  bgMusic.src = playlist[currentTrack];
  bgMusic.play().then(() => {
    isPlaying = true;
  }).catch(() => {});
}

bgMusic.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  playNextTrack();
});

musicToggle.addEventListener('click', () => {
  if (!isPlaying) {
    playNextTrack();
  } else {
    bgMusic.pause();
    isPlaying = false;
  }
});
