const player = document.getElementById("player")
const songList = document.getElementsByClassName("songList");

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  const url = `https://www.youtube.com/embed/${id}?autoplay=1`
  player.setAttribute("src", `${url}`)
}

function hide() {
  player.style.width = "0";
  player.style.height = "0"
}

function unhide() {
  player.style.width = "480px";
  player.style.height = "240px"
}


for(let btn of songList) {
  // console.log(btn)
   btn.addEventListener("click", function(e) {
    for(let btn of songList) {
      btn.classList.remove("active")
    }
    e.target.classList.add("active")
  })
}