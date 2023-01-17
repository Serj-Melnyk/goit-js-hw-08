import throttle from 'lodash.throttle';
// console.log(throttle);
import Player from '@vimeo/player';

const frame = document.querySelector('#vimeo-player');
const player = new Player(frame);

// console.log(frame);
// console.log(player);

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

player.on('timeupdate', throttle(dataTime, 1000));

function dataTime(data) {
  // console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
player.on('play', data => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (data.seconds !== savedTime) {
    player.setCurrentTime(savedTime);
  }
});
