import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

playerPlay() 

player.on(
  'timeupdate',
  throttle(data => {
    const currentTimeVideo = data.seconds;
    localStorage.setItem(STORAGE_KEY, currentTimeVideo);
  }, 1000)
);

function playerPlay() {
  const savedTime = localStorage.getItem(STORAGE_KEY);
    if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
}
