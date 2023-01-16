import Player from '@vimeo/player';

const frame = document.querySelector('#vimeo-player');
console.log(frame);

const player = new Player('frame', {});

player.on('timeupdate', function () {
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
});
