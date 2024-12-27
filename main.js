document.addEventListener("DOMContentLoaded", () => {
  //   new Glide(".glide-works", {
  //     type: "carousel",
  //     768: { perView: 1.2 },
  //     991.98: { perView: 3 },
  //     perView: 4.5,
  //     gap: 16,
  //   }).mount()

  new Glide(".glide-certificates", {
    type: "carousel",
    perView: 4.5,
    breakpoints: {
      991.98: { perView: 2.5 },
      479.98: { perView: 1.5 },
    },
    gap: 16,
  }).mount()

  const burger = document.querySelector(".burger")
  const body = document.querySelector("body")

  burger.addEventListener("click", (event) => {
    event.stopPropagation() // Запобігаємо спрацюванню події на document
    body.classList.toggle("nav-visible")
  })

  document.addEventListener("click", (event) => {
    const nav = document.querySelector(".nav")
    const body = document.body

    // Перевіряємо, чи клік був не по навігації або по посиланню в навігації
    if (!nav.contains(event.target) || event.target.closest(".nav__link")) {
      body.classList.remove("nav-visible")
    }
  })

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

  document.querySelector(".nav").addEventListener("click", function (event) {
    const link = event.target.closest("a.nav__link")
    if (!link) return // Якщо клік не по посиланню, виходимо

    event.preventDefault()

    const targetId = link.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Якщо body має клас nav-visible (мобільне меню), прибираємо його
      if (document.body.classList.contains("nav-visible")) {
        document.body.classList.remove("nav-visible")
      }
    }
  })
})

//---------Loader----------
window.onload = function () {
  document.body.classList.add("loaded_hiding")
  window.setTimeout(function () {
    document.body.classList.add("loaded")
    document.body.classList.remove("loaded_hiding")
  }, 500)
}
