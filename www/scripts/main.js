function toss(val) {
  const coin = document.querySelector("#coin")
  const face = val < 0.5 ? "head" : "tail"

  if (coin.dataset.state === "flip") {
    return
  }

  coin.dataset.state = "flip"
  setTimeout(() => (coin.dataset.state = face), 1000)
}

const mc = new Hammer(window)
mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL })
mc.on("swipe tap", function (event) {
  toss(event.type === "swipe" ? 1 : 0)
})
