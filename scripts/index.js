const sliderData = [
  {
    title: 'Шоссе',
    text: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
    images: [
      { link: './images/surface-road.jpeg', alt: 'Покрытие-шоссе' },
      { link: './images/surface-gravel.jpeg', alt: 'Покрытие-легкое бездорожье' }
    ],
  },
  {
    title: 'Грэвел',
    text: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
    images: [
      { link: './images/surface-gravel.jpeg', alt: 'Покрытие-легкое бездорожье' },
      { link: './images/surface-tt.jpeg', alt: 'Покрытие-ровный асфальт' }
    ],
  },
  {
    title: 'ТТ',
    text: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
    images: [
      { link: './images/surface-tt.jpeg', alt: 'Покрытие-ровный асфальт' },
      { link: './images/surface-road.jpeg', alt: 'Покрытие-шоссе' }
    ],
  }
];

// слайдер

const surfaceSlider = document.querySelector('#surface-slider');

const surfaceSliderTitle = surfaceSlider.querySelector('.surface-slider__title');
const surfaceSliderText = surfaceSlider.querySelector('.surface-slider__text');

const surfaceSliderFirstImage = surfaceSlider.querySelector('.surface-slider__image-first');
const surfaceSliderSecondImage = surfaceSlider.querySelector('.surface-slider__image-second');

const sliderLeftButton = document.querySelector('.surface-slider__btn-left');
const sliderRightButton = document.querySelector('.surface-slider__btn-right');

let currentSlide = 0;

const changeSlide = (currentSlide, direction) => {
  currentSlide += direction;
  if (currentSlide === -1) {
    currentSlide = sliderData.length - 1;
  }
  if (currentSlide >= sliderData.length) {
    currentSlide = 0;
  }

  surfaceSliderTitle.textContent = sliderData[currentSlide].title;
  surfaceSliderText.textContent = sliderData[currentSlide].text;
  surfaceSliderFirstImage.src = sliderData[currentSlide].images[0].link;
  surfaceSliderFirstImage.alt = sliderData[currentSlide].images[0].alt;
  surfaceSliderSecondImage.src = sliderData[currentSlide].images[1].link;
  surfaceSliderSecondImage.alt = sliderData[currentSlide].images[1].alt;

  return currentSlide;
}


sliderRightButton.addEventListener('click', () => {
  currentSlide = changeSlide(currentSlide, 1);
});

sliderLeftButton.addEventListener('click', () => {
  currentSlide = changeSlide(currentSlide, -1);
});





// Форма - эл. почта

const form = document.querySelector('form');
const emailInput = form.querySelector('#mailing');
const submitButton = form.querySelector('.form__btn-submit');


const handleInput = (target) => {
  // console.log(target.parentElement);

  // console.log(target.value);
  if (target.value.length > 0) {
    submitButton.classList.remove('form__btn-submit_hidden');
  } else {
    submitButton.classList.add('form__btn-submit_hidden');
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  emailInput.value = 'Круто!'
});



// Swiper
const swiper = new Swiper(".bikes__slider", {
  pagination: {
    el: ".swiper-pagination",
    // breakpoints: {
    //   1440: {
    //     slidesPerView: 3,
    //     spaceBetween: 80,
    //   },
    //   950: {
    //     centeredSlides: true,
    //     slidesPerView: 1,
    //     spaceBetween: 80,
    //   },
    // },
  }
});