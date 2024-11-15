import Swiper from 'swiper';
import 'swiper/css';

var swiper = new Swiper('.swiper', {
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
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
      },
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
      mousewheel: {
        forceToAxis: true,
      },
    },
  },
});

const gallery = document.querySelector('.swiper');

gallery.addEventListener(
  'wheel',
  event => {
    // Предотвращаем стандартное поведение прокрутки страницы
    event.preventDefault();

    // Если колесо прокручивается вниз — переходим к следующему слайду
    if (event.deltaY > 0) {
      swiper.slideNext();
    } else {
      // Если колесо прокручивается вверх — переходим к предыдущему слайду
      swiper.slidePrev();
    }
  },
  { passive: false }
);
