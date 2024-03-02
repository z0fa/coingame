function toss(val) {
  const coin = document.querySelector("#coin")
  const face = val < 0.5 ? "head" : "tail"

  coin.classList.toggle("flipping", true)
  coin.classList.toggle("head", false)
  coin.classList.toggle("tail", false)
  setTimeout(() => {
    coin.classList.toggle(face, true)
    coin.classList.toggle("flipping", false)
  }, 1000)
}

const mc = new Hammer(document.querySelector("body"))

mc.on("panup tap", function (event) {
  toss(event.type === "panup" ? 1 : 0)
})
