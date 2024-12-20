import Glide from "./node_modules/@glidejs/glide/dist/glide.esm.js"

new Glide(".glide", {
  type: "carousel",
  perView: 4.5,
  gap: 16,
}).mount()

new Glide(".glide-works", {
  type: "carousel",
  perView: 4.5,
  gap: 16,
}).mount()

const items = document.querySelectorAll(".accordion button")

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded")

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false")
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true")
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion))

//---------Loader----------
window.onload = function () {
  document.body.classList.add("loaded_hiding")
  window.setTimeout(function () {
    document.body.classList.add("loaded")
    document.body.classList.remove("loaded_hiding")
  }, 500)
}

//------------Smooth scroll-------------
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (evt) {
    evt.preventDefault()
    const id = smoothLink.getAttribute("href")

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}
