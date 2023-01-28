const burger = document.querySelector(".icon-menu")
const listMenu = document.querySelectorAll(".menu__item")

burger.addEventListener("click", () => {
  burger.classList.toggle("active")
})

listMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    listMenu.forEach((elem) => {
      elem.classList.remove("active")
    })
    e.target.parentElement.classList.toggle("active")
  })
})

const swiperPopular = new Swiper(".destination-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: ".destination-swiper__button.swiper-button-next",
    prevEl: ".destination-swiper__button.swiper-button-prev",
  },

  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2.2 },
    1152: { slidesPerView: 2.8 },
    1420: { slidesPerView: 3.4 },
  },
})

const swiperOffer = new Swiper(".offer-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: ".offer-swiper__button.swiper-button-next",
    prevEl: ".offer-swiper__button.swiper-button-prev",
  },

  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1152: { slidesPerView: 2 },
    1420: { slidesPerView: 3 },
  },
})
