const btnJoinKuy1 = document.getElementById("joinKuy1")
const btnJoinKuy2 = document.getElementById("joinKuy2")
const btnJoinKuy3 = document.getElementById("joinKuy3")

const btnJoinKuyBwh = document.getElementById("joinKuyBwh")

const width = window.innerWidth;

if (width < 800) {
  btnJoinKuy1.style.display = "none"
  btnJoinKuy2.style.display = "none"
  btnJoinKuy3.style.display = "none"

  btnJoinKuyBwh.style.display = "inline-block"
} else {
  btnJoinKuy1.style.display = "inline-block"
  btnJoinKuy2.style.display = "inline-block"
  btnJoinKuy3.style.display = "inline-block"

  btnJoinKuyBwh.style.display = "none"
}