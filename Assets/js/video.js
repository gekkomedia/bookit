// Select the HTML5 video
const video = document.querySelector("#video")
const button_audio = document.querySelector("#btn-custom")
const button_play = document.querySelector("#btn-custom")
// set the pause button to display:none by default
document.querySelector("#volume").style.display = "none"
// update the progress bar
video.addEventListener("timeupdate", () => {
    if(video.muted){
        document.querySelector("#mute").style.display = "block"
        document.querySelector("#volume").style.display = "none"
    } else {
      document.querySelector("#mute").style.display = "none"
      document.querySelector("#volume").style.display = "block"
    }
})

function toggle_audio() {
  if(video.muted){
      video.muted = false
  } else {
    video.muted = true
  }
}

function toggle_video() {
  if(video.paused){
    video.play();
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
  } else {
    video.pause();
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
  }
}
