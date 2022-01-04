// мобильное меню
const mobileMenuHeaderContainer = document.querySelector('.header__container');

const mobileMenuOpenButton = document.querySelector('.header__burger-button');
const mobileMenuCloseButton = document.querySelector('.header__close-button');

const mobileMenuNav = document.querySelector('.header__nav-bar');

const themeSwitcher = document.querySelector('.theme-switcher');

const toggleHeader = () => {
  mobileMenuHeaderContainer.classList.toggle('header__container_type_mobile');
  mobileMenuOpenButton.classList.toggle('header__burger-button_hidden');
  mobileMenuCloseButton.classList.toggle('header__close-button_hidden');
  mobileMenuNav.classList.toggle('header__nav-bar_type_mobile');
}

const openMobileMenu = () => {
  toggleHeader();
  themeSwitcher.classList.add('theme-switcher_visible');
};

const closeMobileMenu = () => {
  toggleHeader();
  themeSwitcher.classList.remove('theme-switcher_visible');
};

mobileMenuOpenButton.addEventListener('click', () => openMobileMenu());
mobileMenuCloseButton.addEventListener('click', () => closeMobileMenu());

// слайдер
const sliderData = [
  {
    title: 'Шоссе',
    text: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
    images: [
      { link: './images/surface-road.jpeg', alt: 'Покрытие-шоссе' },
      { link: './images/surface-gravel.jpeg', alt: 'Покрытие-легкое бездорожье' }
    ],
    type: 'surface-slider__line surface-slider__line_type_road'
  },
  {
    title: 'Грэвел',
    text: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
    images: [
      { link: './images/surface-gravel.jpeg', alt: 'Покрытие-легкое бездорожье' },
      { link: './images/surface-tt.jpeg', alt: 'Покрытие-ровный асфальт' }
    ],
    type: 'surface-slider__line surface-slider__line_type_gravel'
  },
  {
    title: 'ТТ',
    text: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
    images: [
      { link: './images/surface-tt.jpeg', alt: 'Покрытие-ровный асфальт' },
      { link: './images/surface-road.jpeg', alt: 'Покрытие-шоссе' }
    ],
    type: 'surface-slider__line surface-slider__line_type_tt'
  }
];


const surfaceSlider = document.querySelector('#surface-slider');

const surfaceSliderTitle = surfaceSlider.querySelector('.surface-slider__title');
const surfaceSliderText = surfaceSlider.querySelector('.surface-slider__text');

const surfaceSliderFirstImage = surfaceSlider.querySelector('.surface-slider__image-first');
const surfaceSliderSecondImage = surfaceSlider.querySelector('.surface-slider__image-second');
const surfaceLine = surfaceSlider.querySelector('.surface-slider__line');

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

  surfaceLine.classList = sliderData[currentSlide].type;

  return currentSlide;
}


sliderRightButton.addEventListener('click', () => {
  currentSlide = changeSlide(currentSlide, 1);
});

sliderLeftButton.addEventListener('click', () => {
  currentSlide = changeSlide(currentSlide, -1);
});



// Секция bikes  ******************


const bikesData = [
  {
    type: 'road',
    items: [
      {
        title: 'Cervelo Caledonia-5',
        image: './images/bikes/Cervelo-Caledonia-5.jpeg',
        link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN'
      },
      {
        title: 'Cannondale Systemsix Himod',
        image: './images/bikes/Cannondale-Systemsix-Himod.jpg',
        link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J'
      },
      {
        title: 'Trek-Domane-SL-7',
        image: './images/bikes/Trek-Domane-SL-7.jpg',
        link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF'
      }
    ]
  },
  {
    type: 'gravel',
    items: [
      {
        title: 'Cervelo Aspero GRX 810',
        image: './images/bikes/Cervelo-Aspero-GRX-810.jpg',
        link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE'
      },
      {
        title: 'Specialized S-Works Diverge',
        image: './images/bikes/Specialized-S-Works-Diverge.jpg',
        link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9'
      },
      {
        title: 'Cannondale Topstone Lefty 3',
        image: './images/bikes/Cannondale-Topstone-Lefty-3.jpg',
        link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8'
      }
    ]
  },
  {
    type: 'tt',
    items: [
      {
        title: 'Specialized S-Works Shiv',
        image: './images/bikes/Specialized-S-Works-Shiv.jpg',
        link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9'
      },
      {
        title: 'BMC Timemachine 01 ONE',
        image: './images/bikes/BMC-Timemachine-01-ONE.jpg',
        link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835'
      },
      {
        title: 'Cervelo P-Series',
        image: './images/bikes/Cervelo P-Series.jpg',
        link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
      }
    ]
  }
];

// Шаблон карточки - берем из html
const bikeTemplate = document.querySelector('#bike-template').content;

// ul - элемент - список велосипедов
const bikeMedia = document.querySelector('.bikes__media');

// select в моб. версии
const bikeSelect = document.querySelector('.bikes__select');

// переключатель велосипедов в моб. версии
const toggleContainer = document.querySelector('.bikes__toggle-container');

bikeSelect.addEventListener('change', () => toggleBikeGroupMobile());


// десктоп
const bikeList = document.querySelectorAll('.bikes__list-item');
bikeList.forEach(bikeGroup => {
  bikeGroup.addEventListener('click', () => {
    toggleBikeGroupDesktop(bikeGroup.id);
  });
});

// функция переключает карточки в десктопной версии
const toggleBikeGroupDesktop = (id) => {
  const bikeType = id;
  const selectedGroup = bikesData.filter(group => group.type == bikeType);

  // очистить bikeMedia
  bikeMedia.innerHTML = '';

  // переключить в навигационной панели блока активную ссылку
  bikeList.forEach(element => {
    if (element.id === id) {
      element.classList.add('bikes__list-item_active');
    } else {
      element.classList.remove('bikes__list-item_active');
    }
  });

  // связать значение селекта
  // с выбранным значением навигационной панели десктопной версии
  bikeSelect.value = id;

  selectedGroup[0].items.forEach(bike => {
    // создать карточку
    const createdCard = createCard(bike.title, bike.image, bike.link);
    renderCard(createdCard);
  });
}


// функция создает карточку
const createCard = (cardTitle, cardImage, cardLink) => {
  const element = bikeTemplate.querySelector('.bikes__card').cloneNode(true);
  const title = element.querySelector('.bikes__card-title');
  const image = element.querySelector('.bikes__card-image');
  const link = element.querySelector('.bikes__card-link');

  title.textContent = cardTitle;
  image.src = cardImage;
  image.alt = cardTitle;
  link.href = cardLink;

  // навесить обработчики
  // setEventListeners(element, cardTitle, cardUrl);

  return element;
}

const renderCard = (card) => {
  bikeMedia.append(card);
}

// функция переключает велосипед в мобильной версии
const toggleBikeGroupMobile = (index = 0) => {
  toggleContainer.innerHTML = '';
  const bikeType = bikeSelect.value;
  // найти в bikeData объект со св-вом type = bikeType (gravel)
  const selectedGroup = bikesData.filter(group => group.type == bikeType);

  // создать карточку
  const card = {
    title: selectedGroup[0].items[index].title,
    image: selectedGroup[0].items[index].image,
    link: selectedGroup[0].items[index].link

  };
  const createdCard = createCard(card.title, card.image, card.title);

  // очистить bikeMedia
  bikeMedia.innerHTML = '';

  renderCard(createdCard);
  renderTogglers(selectedGroup[0].items, index);
}

// функция создает кружочки-переключатели велосипедов в моб. версии
const renderTogglers = (items, index) => {
  items.forEach((item, i) => {
    const toggler = document.createElement('li');
    toggler.classList.add('bikes__toggle');
    if (i === index) {
      toggler.classList.toggle('bikes__toggle_active');
    }

    // добавить li в DOM
    toggleContainer.appendChild(toggler);

    // навесить обработчик клика на переключатель
    toggler.addEventListener('click', () => {
      toggleBikeGroupMobile(i);
    });
  });
}


const breakpoint = 1060;

window.addEventListener('resize', () => {
  if (window.innerWidth >= breakpoint) {
    // показать 3 карточки в десктопной версии
    toggleBikeGroupDesktop(bikeSelect.value);
  } else {
    // показать начальную карточку в моб. версии
    toggleBikeGroupMobile(0);
  }
});

if (window.innerWidth >= breakpoint) {
  toggleBikeGroupDesktop('road');
} else {
  toggleBikeGroupMobile(0);
}


// Форма - эл. почта

const form = document.querySelector('form');
const emailInput = form.querySelector('#mailing');
const submitButton = form.querySelector('.form__btn-submit');


const handleInput = (target) => {
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


// Переключатель темы

const switchButton = themeSwitcher.querySelector('.theme-switcher__bg');

// чекбокс
const themeSwitcherCheckBox = document.querySelector('.footer__invisible-checkbox');

switchButton.addEventListener('click', () => switchTheme());

let isLight = true;
themeSwitcherCheckBox.checked = false;

const switchTheme = () => {
  themeSwitcherCheckBox.checked = !isLight;
  isLight = !isLight;

  // container
  document.querySelector('.container').classList.toggle('container_dark');

  // header
  document.querySelector('.header__container').classList.toggle('header__container_dark');
  document.querySelectorAll('.header__link')
    .forEach(link => link
      .classList.toggle('header__link_dark')
    );

  // intro
  document.querySelector('.intro__title').classList.toggle('intro__title_dark');
  document.querySelector('.intro__text').classList.toggle('intro__text_dark');
  document.querySelector('.intro__bike-text').classList.toggle('intro__bike-text_dark');


  // quote
  document.querySelector('.quote__text').classList.toggle('quote__text_dark');
  document.querySelector('.quote__author').classList.toggle('quote__author_dark');
  document.querySelector('.quote__occupation').classList.toggle('quote__occupation_dark');

  // surface slider 
  document.querySelector('.surface-slider__title').classList.toggle('surface-slider__title_dark');
  document.querySelector('.surface-slider__text').classList.toggle('surface-slider__text_dark');
  document.querySelector('.surface-slider__btn-left').classList.toggle('surface-slider__btn-left_dark');
  document.querySelector('.surface-slider__btn-right').classList.toggle('surface-slider__btn-right_dark');

  // bikes
  document.querySelector('.bikes__title').classList.toggle('bikes__title_dark');

  document.querySelectorAll('.bikes__list-item')
    .forEach((item) => {
      item.classList.toggle('bikes__list-item_dark');
    });

  document.querySelectorAll('.bikes__card-title')
    .forEach(title => title
      .classList.toggle('bikes__card-title_dark'));

  // training
  document.querySelector('.training__title').classList.toggle('training__title_dark');
  document.querySelector('.training__text').classList.toggle('training__text_dark');
  document.querySelectorAll('.training__link')
  .forEach(item => item
    .classList.toggle('training__link_dark'));

  // footer
  document.querySelector('.footer').classList.toggle('footer_dark');
  document.querySelector('.footer__title').classList.toggle('footer__title_dark');
  document.querySelector('.footer__copyright').classList.toggle('footer__copyright_dark');
  document.querySelector('.form__field').classList.toggle('form__field_dark');
  document.querySelector('.form__btn-submit').classList.toggle('form__btn-submit_dark');



  // передвинуть ползунок
  themeSwitcher.querySelector('.theme-switcher__switch').classList.toggle('theme-switcher__switch_theme_dark');
  themeSwitcher.querySelector('.theme-switcher__bg').classList.toggle('theme-switcher__bg_theme_dark');

  themeSwitcher.querySelector('.theme-switcher__sun').classList.toggle('theme-switcher__sun_theme_dark');
  themeSwitcher.querySelector('.theme-switcher__moon').classList.toggle('theme-switcher__moon_theme_dark');


}