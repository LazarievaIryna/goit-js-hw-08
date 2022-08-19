
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
console.log(player);
player.on('timeupdate', function (data) {
  const currentTimeVideo = data.seconds;
    console.log(currentTimeVideo);
});
const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem('videoplayer-current-time');


// player
//   .getCurrentTime()
//     .then(function (seconds) {
//         console.log(seconds)
//     });