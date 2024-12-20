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

// Функція для закриття всіх акардіонів
function closeAllAccordions() {
  items.forEach((item) => item.setAttribute("aria-expanded", "false"))
}

// Функція для переключення акардіону
function toggleAccordion(event) {
  const itemToggle = this.getAttribute("aria-expanded")

  // Закриваємо всі акардіони
  closeAllAccordions()

  // Відкриваємо, якщо раніше був закритий
  if (itemToggle === "false") {
    this.setAttribute("aria-expanded", "true")
  }

  // Зупиняємо поширення події, щоб не викликати закриття акардіона при кліку на кнопці
  event.stopPropagation()
}

// Додаємо обробник до кожної кнопки акардіону
items.forEach((item) => {
  item.addEventListener("click", toggleAccordion)
})

// Закриття акардіону при кліку поза його межами
document.addEventListener("click", (event) => {
  // Перевіряємо, чи клік був за межами акардіона
  if (!event.target.closest(".accordion")) {
    closeAllAccordions()
  }
})

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
// for (let smoothLink of smoothLinks) {
//   smoothLink.addEventListener("click", function (evt) {
//     evt.preventDefault()
//     const id = smoothLink.getAttribute("href")

//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     })
//   })
// }
