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
    1152: { slidesPerView: 3 },
  },
})

const swiperGallery = new Swiper(".gallery-swiper", {
  loop: true,
  spaceBetween: 32,
  slidesPerView: 4,
  direction: "vertical",
  // Navigation arrows
  navigation: {
    nextEl: ".gallery-swiper__button.swiper-button-next",
    prevEl: ".gallery-swiper__button.swiper-button-prev",
  },
  breakpoints: {
    768: { direction: "horizontal" },
  },
})

const swiperExperiences = new Swiper(".experiences-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: ".experiences-swiper__button.swiper-button-next",
    prevEl: ".experiences-swiper__button.swiper-button-prev",
  },

  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 1.5 },
    1152: { slidesPerView: 2.5 },
  },
})


const animItems = document.querySelectorAll('.-anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('-active');
			} else {
				if (!animItem.classList.contains('-anim-no-hide')) {
					animItem.classList.remove('-active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}