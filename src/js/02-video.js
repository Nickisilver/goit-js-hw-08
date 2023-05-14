import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = "videoplayer-current-time"
const iFrame = document.querySelector("iframe");
const player = new Player(iFrame);
let savedTime = localStorage.getItem(STORAGE_KEY) || 0;

player.setCurrentTime(savedTime)

player.on('timeupdate', throttle(onPlay,1000))


function onPlay(e){
console.log(Math.round(e.seconds))
console.log(typeof Math.round(e.seconds))
  localStorage.setItem( STORAGE_KEY, e.seconds)
  
  
}
