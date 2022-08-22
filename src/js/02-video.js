import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
console.log(player);

player.on(
  'timeupdate',
  throttle(data => {
    const currentTimeVideo = data.seconds;
    console.log(currentTimeVideo);
    localStorage.setItem(STORAGE_KEY, currentTimeVideo);
  }, 1000)
);
const savedTime = localStorage.getItem(STORAGE_KEY);
console.log(savedTime);
if (savedTime === null) {
  return;
}
player.setCurrentTime(savedTime);
