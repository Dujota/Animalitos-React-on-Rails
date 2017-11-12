class Player{
  constructor(){
  this.audio = new Audio();  // this is a new audio tag in html that can hold an mp3
  }
  // in a class we dont have to declare the function, just the name and then start going
  play(songUrl){
    this.audio.setAttribute('src', songUrl);
    this.audio.play();
  }
}

const player = new Player();
export default player;
