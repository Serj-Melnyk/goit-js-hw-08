import throttle from 'lodash.throttle';
// console.log(throttle);
import Player from '@vimeo/player';

const frame = document.querySelector('#vimeo-player');
const player = new Player(frame);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function savedTime(data) {
  console.log(data.seconds);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(savedTime, 1000));

const startTime = localStorage.getItem(LOCALSTORAGE_KEY);

player
  .setCurrentTime(startTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
