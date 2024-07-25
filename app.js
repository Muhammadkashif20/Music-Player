// // M.Kashif Music Player JavaScript:- //
let start = document.getElementById("playbtn");
let pause = document.getElementById("pausebtn");
let audio = document.getElementById("audio");
let images=document.getElementById('img')
let naat1=document.getElementById('naat1')
let naat2=document.getElementById('naat2')
let naat3=document.getElementById('naat3')
let naat4=document.getElementById('naat4')
// let range = document.querySelector(".range");
let startStop = document.getElementById("Center-arrow");
let count=0
let playAudio=audio.innerHTML+=['audio/naat1.mp3','audio/naat2.mp3','audio/naat3.mp3','audio/naat4.mp3']
// console.log(playAudio);
startStop.addEventListener("click", () => {
  playAudio.src=playAudio[count]
  if (start.style.display == "none") {
    start.style.display = "block";
    pause.style.display = "none";
    audio.pause()
  } else {
    start.style.display = "none";
    pause.style.display = "block";
   audio.play()
  }
});
let previous = document.getElementById("left-arrow");
let next = document.getElementById("right-arrow");
previous.addEventListener('click',()=>{
  // if(naat1.style.display=='none'){
  //   naat1.style.display='block'
  //   audio.pause()
  // }
  // else{
  //   naat1.style.display='none'
  //   playAudio.src=playAudio[count]
  //   audio.play()

  // }
})
next.addEventListener('click',()=>{
  playAudio.src=playAudio[count]
  // if(audio.play()){
  //   audio.play()
  // }
  // else{
  // audio.pause()

  // }
})

