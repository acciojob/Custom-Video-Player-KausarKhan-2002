/* Edit this file */
// const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
// const skipButtons = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player__slider');

// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('.volume');
const playbackSpeed = player.querySelector('.playbackSpeed');
const skipButtons = player.querySelectorAll('.skip');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');

// Play/Pause functionality
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Handle volume control
function handleVolume() {
  video.volume = this.value;
}

// Handle playback speed control
function handleSpeed() {
  video.playbackRate = this.value;
}

// Skip functionality
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub (seek) functionality
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handleSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => e.buttons && scrub(e));

