// link -> src="./images/surface-road.jpeg"
const sliderData = [
  {
    title: 'Шоссе',
    text: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
    link: 'surface-road.jpeg',
    alt: 'Шоссе'
  },
  {
    title: 'Грэвел',
    text: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
    link: 'surface-gravel.jpeg',
    alt: 'Грэвел'
  },
  {
    title: 'ТТ',
    text: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
    link: 'surface-tt.jpeg',
    alt: 'Триатлон (ТТ)'
  }
];

const form = document.querySelector('form');
const emailInput = form.querySelector('#mailing');
const submitButton = form.querySelector('.form__btn-submit');


// слайдер
// Слайдер - управление текстом

const sliderElement = document.querySelector('#surface-slider');
const sliderContentContainer = sliderElement.querySelector('.surface-slider__content-container');
const sliderContentTemplate = document.querySelector('#slider-content').content;

const sliderContentElement = sliderElement.querySelector('.surface-slider__content');
const sliderMediaElement = sliderElement.querySelector('.surface-slider__media');
const sliderMediaContainer = sliderMediaElement.querySelector('.surface-slider__media-container');


// Старая версия - с контейнерами

const createSlideContent = (slideTitle, slideText, slideLink, slideAlt) => {
  const contentElement = sliderContentTemplate.querySelector('.surface-slider__content').cloneNode(true);
  const title = contentElement.querySelector('.surface-slider__title');
  const text = contentElement.querySelector('.surface-slider__text');

  title.textContent = slideTitle;
  text.textContent = slideText;

  return contentElement;
}

const toggleSlideContentVisibility = (element) => {
  element.classList.toggle('surface-slider__content_hidden');
}

const renderSlideContent = (element) => {
  sliderContentContainer.append(element);
}

let currentSlide = 0;
// добавить в DOM заголовок и текст всех слайдов
const slides = [];
sliderData.forEach(slide => {
  const slideContent = createSlideContent(slide.title, slide.text);
  slides.push(slideContent);
  renderSlideContent(slideContent);
  toggleSlideContentVisibility(slideContent); // скрыть все слайды
});

toggleSlideContentVisibility(slides[currentSlide]);


// Слайдер - управление картинками


const slideImages = sliderMediaContainer.querySelectorAll('.surface-slider__image');
const sliderLeftButton = document.querySelector('.surface-slider__btn-left');
const sliderRightButton = document.querySelector('.surface-slider__btn-right');


let slideCounter = 0;

const changeSlideText = (currentSlide, direction) => {
  toggleSlideContentVisibility(slides[currentSlide]);
  currentSlide += direction;
  if (currentSlide === -1) {
    currentSlide = slides.length - 1;
  }
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  toggleSlideContentVisibility(slides[currentSlide]);
  return currentSlide;
}

const listItems = sliderMediaContainer.children;

const moveImages = (direction) => {
  // сдвинуть все картинки влево
  slideImages.forEach(slide => {
    const animation = slide.animate([
      { transform: 'translate(0)' },
      { transform: `translate(${-700 * direction}px, 0)` }
    ], {
      duration: 400,
      easing: 'ease-out'
    });
    animation.addEventListener('finish', () => {
      // затем переместить первый элемент в конец списка
      if (direction === 1) {
        sliderMediaContainer.append(listItems[0]);
      } else {
        sliderMediaContainer.prepend(listItems[2]);
      }

      slide.style.transform = `translate(${-700 * direction}px, 0)`;
    });
  })

  if (direction === 1) {
    if (slideCounter !== 0) {
      sliderMediaContainer.append(listItems[0]);
    }
  } else {
    sliderMediaContainer.prepend(listItems[0]);
  }

  slideCounter++;
}

sliderRightButton.addEventListener('click', () => {
  currentSlide = changeSlideText(currentSlide, 1);
  moveImages(1);
});

sliderLeftButton.addEventListener('click', () => {
  currentSlide = changeSlideText(currentSlide, -1);
  moveImages(-1);
});






// Форма - эл. почта
const handleInput = (target) => {
  // console.log(target.parentElement);

  console.log(target.value);
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