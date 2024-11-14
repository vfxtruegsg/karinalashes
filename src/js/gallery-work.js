import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  slidesPerView: 2, // По умолчанию отображается 1 слайд
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2, // 2 слайда на экранах от 768px
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3, // 3 слайда на экранах от 1024px
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4, // 4 слайда на экранах от 1440px
      spaceBetween: 30,
    },
  },
});
